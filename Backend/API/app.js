const express = require ('express');
const process = require ('process');
const helmet = require('helmet');
const https = require('https')
const fs = require('fs');

//Declaramos una variable para el puerto y la definimos como el 3r argumento que recibirá
const port = process.argv[2]

const server = express();

//Middleware
server.use(helmet());
server.use(helmet.hidePoweredBy())
server.use(express.static('public'));
server.use(express.static('uploads'));



//Escuchando en port
https.createServer({
    key: fs.readFileSync('server.key'),
    cert: fs.readFileSync('server.cert')
  }, server)
  .listen(3500, function () {
    console.log('Escuchando en puerto 3500'.rainbow)
  })
  