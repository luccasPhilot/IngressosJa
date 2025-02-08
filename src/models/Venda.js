const mongoose = require("mongoose");

const VendaSchema = new mongoose.Schema({
    username: { type: String, required: true },
    ingressos: [
        {
            nome: { type: String, required: true },
            qtd: { type: Number, required: true }
        }
    ],
    total: { type: Number, required: true },
}, { timestamps: true });

module.exports = mongoose.model("Venda", VendaSchema, "vendas");
