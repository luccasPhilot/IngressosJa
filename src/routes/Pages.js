const express = require("express");
const ingressoService = require("../service/IngressoService");

const router = express.Router();

router.get("/", (req, res) => {
    res.render('login');
});

router.get("/historico", (req, res) => {
    res.render('historico');
});

router.get("/ingresso/:evento", async (req, res) => {
    try {
        const evento = req.params.evento;
        const ingresso = await ingressoService.getIngressoByUsername(evento);

        if (!ingresso) {
            return res.status(404).send("Ingresso não encontrado.");
        }

        res.render("ingresso", ingresso);
    } catch (error) {
        console.error("Erro ao buscar ingresso:", error);
        res.status(500).send("Erro ao carregar o ingresso.");
    }
});


module.exports = router;