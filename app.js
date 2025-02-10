require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const mustacheExpress = require("mustache-express");
const engine = mustacheExpress();
const path = require("path");

const pages = require("./src/routes/Pages");
const authUser = require("./src/routes/Auth.routes");
const User = require("./src/routes/Users.routes");
const ingresso = require("./src/routes/Ingressos.routes");
const vendas = require("./src/routes/Vendas.routes");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.engine("mustache", engine);

app.set("views", path.join(__dirname, "src", "views"));
app.set("view engine", "mustache");

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
        app.listen(process.env.PORT, () => console.log(`Servidor rodando em http://localhost:${process.env.PORT}`));
    } catch (error) {
        console.error("❌ Erro ao conectar no MongoDB:", error);
        process.exit(1);
    }
}

app.use("/", pages)
app.use("/Auth", authUser)
app.use("/Users", User)
app.use("/Ingressos", ingresso)
app.use("/Vendas", vendas)
