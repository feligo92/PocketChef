const mongoose = require('mongoose');

const types = mongoose.Schema.Types;

const userEsquema = new mongoose.Schema({
    _id: {
        type: types.ObjectId,
        require: true
    },
    userName: {
        type: String,
        require: true
    },
    mail: {
        type: types.String,
        require: true
    },
    password:{
        type: types.String,
        require: true
    }
})


module.exports = mongoose.model('User', userEsquema);