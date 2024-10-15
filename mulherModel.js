const mongoose = require('mongoose')

const MulhereSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    imagem: {
        type: String,
        required: true,
    },
    citacao: {
        type: String,
        required: true,
    },
    minibio: {
        trype: String,
        required: true,
    }
})

module.exports = mongoose.model('diva', MulherSchema)