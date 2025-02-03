const userRepository = require('../repositories/User');
const jwt = require("jsonwebtoken")

const authenticate = async (username, password) => {
  // Busca o usuário no banco pelo username
  const user = await userRepository.findByUsername(username);
  if (!user) {
    throw new Error('Usuário não encontrado.');
  } 

  // Verifica se a senha está correta
  if (password !== user.password) {
    throw new Error('Credenciais inválidas.');
  }

  // Gera o token JWT
  const token = jwt.sign({ id: user.username, tipo: user.tipo }, process.env.SECRET, {expiresIn: process.env.TOKEN_EXPIRATION});
  return token;
};

module.exports = {
    authenticate,
}
