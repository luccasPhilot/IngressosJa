const vendaService = require("../service/VendaService");

const realizarVenda = async (req, res) => {
    try {
        const venda = await vendaService.processarVenda(req.body.ingressos, req.userId);
        return res.status(201).json({ message: "Compra realizada com sucesso!", venda });
    } catch (error) {
        return res.status(error.status || 500).json({ error: error.message });
    }
};

const getVendas = async (req, res) => {
    try {
        const vendas = await vendaService.getVendas(req.userTipo);
        res.status(201).json(vendas);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

module.exports = {
    realizarVenda,
    getVendas
}
