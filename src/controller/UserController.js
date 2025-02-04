const userService = require('../service/UserService');

const createUser = async (req, res) => {
  try {
    const user = await userService.createUser(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getUsers = async (req, res) => {
  try {
    const users = await userService.getUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getUserByUsername = async (req, res) => {
  try {
    const user = await userService.getUserByUsername(req.params.username);
    if (!user) {
      return res.status(404).json({ message: 'Usuário não encontrado' });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteByUsername = async (req, res) => {
    try {
      await userService.deleteByUsername(req.params.username);
      res.status(200).json({ message: `usuario ${req.params.username} deletado com sucesso`});
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

module.exports = { createUser, getUsers, getUserByUsername, deleteByUsername };
