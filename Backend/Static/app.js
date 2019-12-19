const express = require ('express');
const fs = require('fs')
const https = require('https')

const helmet = require('helmet');



const server = express();

//Middleware
server.use(helmet());
server.use(helmet.hidePoweredBy())

server.use(express.static('docs'));



//Escuchando en port
https.createServer({
    key: fs.readFileSync('/etc/letsencrypt/live/my-static.ga/privkey.pem'),
    cert: fs.readFileSync('/etc/letsencrypt/live/my-static.ga/fullchain.pem')
  }, server)
  .listen(443, function () {
    console.log('Escuchando en puerto 443'.rainbow)
  })
  