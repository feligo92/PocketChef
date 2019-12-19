const express = require ('express');

const helmet = require('helmet');



const server = express();

//Middleware
server.use(helmet());
server.use(helmet.hidePoweredBy())

server.use(express.static('docs'));



//Escuchando en port
server.listen(3400,()=>{
    console.log(`Servidor escuchando en el puerto 3400`)
})