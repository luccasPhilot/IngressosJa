const express = require('express');
const auth = require("../middleware/auth.middleware");
const IngressoController = require("../controller/IngressoController");
const router = express.Router();

router.post('/', auth.authMiddleware, IngressoController.createIngresso);
router.get('/', auth.authMiddleware, IngressoController.getIngressos);
router.get('/:id', auth.authMiddleware, IngressoController.getIngressoById);
router.patch("/:id", auth.authMiddleware, IngressoController.updateIngresso);
router.delete("/:id", auth.authMiddleware, IngressoController.deleteIngresso);

module.exports = router;
