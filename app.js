require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authUser = require("./src/routes/Auth.routes")
const User = require("./src/routes/Users.routes")
const ingresso = require("./src/routes/Ingressos.routes")
const vendas = require("./src/routes/Vendas.routes")

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Construindo a URL de conexão com autenticação
const mongoConnectionString = `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_URI}?authSource=admin`;

main().catch(err => {
    console.error("❌ Erro ao conectar no MongoDB:", err);
    process.exit(1);
});

async function main() {
    try {
        await mongoose.connect(mongoConnectionString);
        console.log("✅ MongoDB conectado ao banco vendaIngressos");

        // Só inicia o servidor depois de conectar no MongoDB
        app.listen(process.env.PORT, () => console.log(`Servidor rodando em http://localhost:${process.env.PORT}`));

    } catch (error) {
        console.error("❌ Erro ao conectar no MongoDB:", error);
        process.exit(1);
    }
}

app.use("/Auth", authUser)
app.use("/Users", User)
app.use("/Ingressos", ingresso)
app.use("/Vendas", vendas)
