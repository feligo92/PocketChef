const express = require('express');
const colors = require('colors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const fs = require('fs');
const bcrypt = require('bcrypt');//libreria para hashear
const { check, validationResult } = require('express-validator');
const jwt = require('jsonwebtoken')
const jwtChecker = require('express-jwt')
const cors = require('cors');//liberia cors
const cookieParser = require('cookie-parser');//libreria para parsear cookies
const helmet = require('helmet');
const multer = require('multer');
const path = require('path');

const fileUpload = require('express-fileupload');

//========== MODELS ==============
const User = require('./models/user');
const Ingrediente = require('./models/ingredientes');
const Receta = require('./models/recetas');

//=============== leer archivo secrets =============
const rawData = fs.readFileSync('secrets.json');
const secrets = JSON.parse(rawData);




//============== SERVER =============
const server = express();


//========= Middleware ===========
server.use(bodyParser.json());
server.use(cors());
server.use(cookieParser());
server.use(helmet());
server.use(jwtChecker({   //como argumento le pasamos un objeto con la configuración
    secret: secrets["jwt_clave"],    //clave de la firma
    getToken: (req) => {   //funcion para obtener las cookies
        return req.cookies['jwt']; //devuelve la cookie con esa clave
    }
}).unless({ path: ['/register', '/login', '/upload'] }))//objeto clave path valor array de strings con todos los paths en que no se le exige la cookie



//Subida de imágenes
const storageManager = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, './uploads')
    },
    filename: (req, file, callback) => {
        callback(null, file.originalname)
    }
});

const upload = multer({ storage: storageManager })



// ====== Conexion con la DB y endpoints =============
mongoose.connect(`mongodb+srv://${secrets['user']}:${secrets['password']}@cluster0-4n2wo.mongodb.net/pocketchef?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => { //primer argumento url de la DB, segundo (err)=>{} los endpoints y el listen irá dentro de la callback
    if (err) throw err;

    //Endpoint de subida de imágenes
    server.post('/upload', upload.single('myImg'), (req, res) => {
        console.log(req.file.filename)
        res.send({ "ok": req.file.filename })
    })

    console.log("Conexión con mongo completada!".yellow)


    //=========== USER =============

    server.get('/user', (req, res) => {
        User.find((err, data) => {
            if (err) res.send(err);
            res.send(data)
        })
    })
    server.get('/user/:id', (req, res) => {
        const urlObjetivo = decodeURI(req.params.id)
        User.find({ _id: urlObjetivo }, (err, data) => {
            if (err) throw err;
            res.send(data)
        })
    })
    server.post('/register', [
        check('userName').trim().escape(),
        check('mail').trim().escape(),
        check('password').trim().escape()
    ], (req, res) => {
        body = req.body;
        body['_id'] = mongoose.Types.ObjectId();




        User.find({ mail: body['mail'] }, (err, data) => {
            if (err) throw err;
            if (data.length > 0) {
                res.send({ "error": "Este email ya tiene una cuenta asociada" })
            } else {
                User.find({ userName: body['userName'] }, (err, result) => {

                    if (err) throw err;
                    if (result.length > 0) {

                        res.send({ "error": "Nombre de usuario no disponible" })
                    } else {

                        bcrypt.hash(req.body.password, 11, (err, hash) => {
                            if (err) throw err
                            body.password = hash
                            const miUser = new User(body);
                            miUser.save((err) => {
                                if (err) res.send(err);
                                res.send({ "ok": miUser })
                            })
                        })

                    }


                })

            }


        })


    })

    server.post('/login', [
        check('mail').trim().escape(),
        check('password').trim().escape()
    ], (req, res) => {
        User.find({ mail: req.body.mail }, (err, data) => {
            if (err) res.send({ "Error": "DB Fail" });
            if (data.length < 1) {
                res.send({ "Error": "Esta dirección no tiene ninguna cuenta asociada" })
            } else {
                bcrypt.compare(req.body.password, data[0]['password'], (err, same) => {
                    if (err) res.send({ "Error": "DB Fail" });
                    if (same) {

                        const token = jwt.sign({ "mail": req.body.mail }, secrets["jwt_clave"]);

                        res.header('Set-Cookie', `jwt=${token}; httponly; maxAge: 99999`);
                        // res.header('Set-Cookie', `logued=true; maxAge: 99999`);
                        res.send({ "logged": true })
                    } else {
                        res.send({ "Error": "Incorrect password" })
                    }
                })
            }
        })
    })

    server.put('/user', (req, res) => {
        User.findByIdAndUpdate(
            req.body._id,
            {
                $set: req.body
            },
            (err) => {
                if (err) throw err;
                res.send({ message: "documento actualizado" });
            }
        )
    })

    server.delete('/user/:id', (req, res) => {
        User.findByIdAndDelete(req.params.id, (err) => {
            if (err) res.send(err)
            res.send({ message: "okay" })
        })
    })




    //============= Ingrediente ===========

    server.get('/ingrediente', (req, res) => {
        Ingrediente.find((err, data) => {
            if (err) res.send(err);
            res.send(data)
        })
    })
    server.get('/ingrediente/:id', (req, res) => {
        const urlObjetivo = decodeURI(req.params.id)
        Ingrediente.find({ _id: urlObjetivo }, (err, data) => {
            if (err) throw err;
            res.send(data)
        })
    })
    server.post('/ingrediente', (req, res) => {
        body = req.body;
        body['_id'] = mongoose.Types.ObjectId();

        const miIngrediente = new Ingrediente(body);
        console.log(miIngrediente)
        miIngrediente.save((err) => {
            if (err) res.send(err);
            res.send({ "ok": miIngrediente })
        })
    })

    server.put('/ingrediente', (req, res) => {
        Ingrediente.findByIdAndUpdate(
            req.body._id,
            {
                $set: req.body
            },
            (err) => {
                if (err) throw err;
                res.send({ message: "documento actualizado" });
            }
        )
    })

    server.delete('/deleteIngrediente/:id', (req, res) => {
        Ingrediente.findByIdAndDelete(req.params.id, (err) => {
            if (err) res.send(err)
            res.send({ message: "okay" })
        })
    })


    //================ Recetas =====================



    server.get('/receta', (req, res) => {
          
          Receta.find({}).sort({puntuacion: 1}).exec(function(err, data) { 
              
            if (err) res.send(err);
            res.send(data)

          });

    })
    

    server.get('/recetas/filter', (req, res) => {
        let checker = (arr, target) => target.every(v => arr.includes(v));
        const params = req.query;
        let arrParams = Object.values(params);
        let recetasEncontradas = [];
        Receta.find().sort({'puntuacion': -1}).exec(function(err, data) {
            if (err) res.send(err);
            for (receta of data) {
                let arrIngredientes = [];
                receta.ingredientes.forEach((ingrediente) => {
                    arrIngredientes.push(ingrediente._id.toString())
                })

                const result = checker(arrParams, arrIngredientes)
                
                if (result) {
                    recetasEncontradas.push(receta)
                }
            }
            res.send(recetasEncontradas)

        })
    })


    server.get('/receta/:id', (req, res) => {
        const urlObjetivo = decodeURI(req.params.id)
        Receta.find({ _id: urlObjetivo }, (err, data) => {
            if (err) throw err;
            res.send(data)
        })
    })
    server.post('/receta', (req, res) => {

        const decoded = jwt.verify(req.cookies.jwt, secrets["jwt_clave"]);

        body = req.body;
        body['_id'] = mongoose.Types.ObjectId();

        User.find({ mail: decoded.mail }, (err, data) => {
            body = req.body;
            body['_id'] = mongoose.Types.ObjectId();
            body['autor'] = data[0]._id;
            if (err) throw err;
            const miReceta = new Receta(body);

            miReceta.save((err) => {
                if (err) res.send(err);
                res.send({ "ok": miReceta })
            })
        })


    })

    server.put('/receta', (req, res) => {

        Receta.findByIdAndUpdate(
            req.body._id,
            {
                $set: req.body
            },
            (err) => {
                if (err) throw err;
                res.send({ message: "documento actualizado" });
            }
        )
    })

    server.delete('/deleteReceta/:id', (req, res) => {
        Receta.findByIdAndDelete(req.params.id, (err) => {
            if (err) res.send(err)
            res.send({ message: "okay" })
        })
    })


















    //Listen
    server.listen(3000, function () {
        console.log('Servidor escuchando en el puerto 3000'.rainbow);
    });

})