const express = require("express");
const auth = require("../middleware/auth.middleware");
const vendaController = require("../controller/VendaController");

const router = express();

router.post("/ingresso", auth.authMiddleware, vendaController.realizarVenda);
router.get("/", auth.authMiddleware, vendaController.getVendas)

module.exports = router;