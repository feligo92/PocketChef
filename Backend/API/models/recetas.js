const mongoose = require('mongoose');
const mongooseAutopopulate = require('mongoose-autopopulate');

const types = mongoose.Schema.Types;


const recetaEsquema = new mongoose.Schema({
    _id: {
        type: types.ObjectId,
        require: true
    },
   nombre: {
        type: String,
        require: true
    },
    instrucciones: {
        type: String,
        require: true
    },
    ingredientes: {
        require: true,
        type: [types.ObjectId],
        ref: 'Ingrediente',
        autopopulate: true,
    },
    cantidades:{
        require: true,
        type: [types.String]
    },
    autor: {
        require: true,
        type: types.ObjectId,
        ref: 'User',
        autopopulate: true,
    },
    imgUrl: String
})

recetaEsquema.plugin(mongooseAutopopulate);
module.exports = mongoose.model('Receta', recetaEsquema);