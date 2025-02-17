const Ingresso = require("../models/Ingressos");

const createIngresso = async (dataIngreso, userTipo) => {
    if (userTipo !== 'admin') {
        throw new Error('Apenas administradores podem criar Ingressos.');
    }
    try {
        const ingresso = new Ingresso(dataIngreso);
        await ingresso.save();
        return ingresso;
    } catch (error) {
        throw new Error("Erro ao criar Ingreeso: " + error.message);
    }
}

const getIngressos = async () => {
    try {
        return await Ingresso.find()
    } catch {
        throw new Error("Erro ao buscar Ingressos: " + error.message);
    }
}

const getIngressoById = async (id) => {
    try {
        return await Ingresso.findOne({ _id: id });
    } catch {
        throw new Error("Erro ao buscar Ingresso: " + error.message);
    }
}

const getIngressoByUsername = async (nome) => {
    try {
        return await Ingresso.findOne({ nome: nome });
    } catch {
        throw new Error("Erro ao buscar Ingresso: " + error.message);
    }
}

const getIngressoByNome = async (nome) => {
    try {
        return await Ingresso.findOne({ nome: nome });
    } catch {
        throw new Error("Erro ao buscar Ingresso: " + error.message);
    }
}

const updateIngresso = async (id, data, userTipo) => {
    if (userTipo !== 'admin') {
        throw new Error('Apenas administradores podem editar Ingressos.');
    }
    try {
        return await Ingresso.findByIdAndUpdate(id, data, { new: true });
    } catch (error) {
        throw new Error("Erro ao atualizar ingresso: " + error.message);
    }
};

const deleteIngresso = async (id, userTipo) => {
    if (userTipo !== 'admin') {
        throw new Error('Apenas administradores podem deletar Ingressos.');
    }
    try {
        return await Ingresso.findByIdAndDelete(id);
    } catch (error) {
        throw new Error("Erro ao deletar ingresso: " + error.message);
    }
};

module.exports = {
    createIngresso,
    getIngressos,
    getIngressoById,
    updateIngresso,
    deleteIngresso,
    getIngressoByNome,
    getIngressoByUsername,
};