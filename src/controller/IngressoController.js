const ingressoService = require("../service/IngressoService");

const createIngresso = async (req, res) => {
    try {
        const ingresso = await ingressoService.createIngresso(req.body, req.userTipo);
        res.status(201).json(ingresso);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

const getIngressos = async (req, res) => {
    try {
        const ingressos = await ingressoService.getIngressos();
        res.status(201).json(ingressos);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

const getIngressoById = async (req, res) => {
    try {
        const ingresso = await ingressoService.getIngressoById(req.params.id);

        if(!ingresso) return res.status(404).json({ message: "Ingresso não encontrado"})

        res.status(201).json(ingresso);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

const updateIngresso = async (req, res) => {
    try {
        const ingresso = await ingressoService.updateIngresso(req.params.id, req.body, req.userTipo);

        if (!ingresso) {
            return res.status(404).json({ message: "Ingresso não encontrado" });
        }

        res.status(200).json(ingresso);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const deleteIngresso = async (req, res) => {
    try {
        const ingresso = await ingressoService.deleteIngresso(req.params.id, req.userTipo);

        if (!ingresso) {
            return res.status(404).json({ message: "Ingresso não encontrado" });
        }

        res.status(200).json({ message: "Ingresso deletado com sucesso" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = { 
    createIngresso, 
    getIngressos, 
    getIngressoById, 
    updateIngresso, 
    deleteIngresso,
};