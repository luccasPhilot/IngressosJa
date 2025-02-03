const express = require("express");

const authUser = require("./src/routes/Users")
const ingresso = require("./src/routes/Ingressos")
const vendas = require("./src/routes/Vendas")

require('dotenv').config();
const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: false }));

app.use("/Auth", authUser)
app.use("/Ingressos", ingresso)
app.use("/Vendas", vendas)

app.listen(process.env.PORT, () => {
    console.log(`Servidor rodando em http://localhost:${process.env.PORT}`);
});