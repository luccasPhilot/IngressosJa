const Venda = require("../models/Venda");
const ingressoService = require("../service/IngressoService");

const processarVenda = async (ingressos, username) => {
    if (!ingressos || ingressos.length === 0) {
        throw { status: 400, message: "Nenhum ingresso selecionado." };
    }

    let total = 0;
    let ingressosAtualizados = [];

    for (let item of ingressos) {
        const ingresso = await ingressoService.getIngressoByNome(item.nome);
        if (!ingresso) {
            throw { status: 404, message: `Ingresso nome ${item.nome} não encontrado.` };
        }
        if (ingresso.qtd < item.qtd) {
            throw { status: 400, message: `Estoque insuficiente para ${ingresso.nome}.` };
        }
        ingresso.qtd -= item.qtd;
        ingressosAtualizados.push(ingresso);
        total += ingresso.preco * item.qtd;

        console.log(ingressosAtualizados);
    }

    console.log(ingressosAtualizados);

    await Promise.all(ingressosAtualizados.map((ingresso) => ingresso.save()));

    const venda = new Venda({
        username,
        ingressos,
        total,
    });

    await venda.save();
    return venda;
};

const getVendas = async () => {
    try {
        return await Venda.find()
    } catch {
        throw new Error("Erro ao buscar Vendas: " + error.message);
    }
}

module.exports = {
    processarVenda,
    getVendas
}