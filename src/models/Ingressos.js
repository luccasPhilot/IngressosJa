const mongoose = require('mongoose');

const IngressoSchema = new mongoose.Schema({
    nome: { type: String, required: true, unique: true },
    preco: { type: Number, required: true },
    qtd: { type: Number, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Ingresso', IngressoSchema, 'ingressos');
