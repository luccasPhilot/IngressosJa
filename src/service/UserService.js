const User = require('../models/Users');

const createUser = async (userData) => {
  try {
    const user = new User(userData);
    await user.save();
    return user;
  } catch (error) {
    throw new Error('Erro ao criar usuário: ' + error.message);
  }
};

const getUsers = async () => {
  try {
    return await User.find();
  } catch (error) {
    throw new Error('Erro ao buscar usuários: ' + error.message);
  }
};

const getUserByUsername = async (username) => {
  try {
    return await User.findOne({username: username});
  } catch (error) {
    throw new Error('Erro ao buscar usuário: ' + error.message);
  }
};

const deleteByUsername = async (username) => {
    try {
        user = await User.findOne({username: username});
        if(!user){
            throw new Error('Erro ao buscar usuário: ' + error.message);
        }
        await User.deleteOne(user)
    } catch (error) {
        throw new Error('Erro ao deletar usuário: ' + error.message);
    }
  };

module.exports = { createUser, getUsers, getUserByUsername, deleteByUsername };