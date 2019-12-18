const express = require ('express');
const process = require ('process');
const helmet = require('helmet');

//Declaramos una variable para el puerto y la definimos como el 3r argumento que recibirá
const port = process.argv[2]

const server = express();

//Middleware
server.use(helmet());
server.use(helmet.hidePoweredBy())
server.use(express.static('public'));
server.use(express.static('uploads'));



//Escuchando en port
server.listen(3500,()=>{
    console.log(`Servidor escuchando en el puerto 3500`)
})