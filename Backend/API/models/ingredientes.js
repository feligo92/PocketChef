const mongoose = require('mongoose');

const types = mongoose.Schema.Types;

const ingredienteEsquema = new mongoose.Schema({
    _id: {
        type: types.ObjectId,
        require: true
    },
    ingredienteName: {
        type: String,
        require: true
    }
})


module.exports = mongoose.model('Ingrediente', ingredienteEsquema);