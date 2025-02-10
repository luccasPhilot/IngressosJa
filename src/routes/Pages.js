const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
    res.render('login');
});

router.get("/historico", (req, res) => {
    res.render('historico');
});

router.get("/ingresso", (req, res) => {
    res.render('ingresso');
});

module.exports = router;