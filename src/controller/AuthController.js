const authService = require('../service/AuthService');

const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Valida os campos
    if (!username || !password) {
      return res.status(400).json({ message: 'Username e senha são obrigatórios.' });
    }

    // Chama o serviço de autenticação
    const token = await authService.authenticate(username, password);

    // Resposta de sucesso
    return res.status(200).json({ token });
  } catch (error) {
    return res.status(401).json({ message: error.message });
  }
};

const token = async (req, res) => {
  const { authorization } = req.headers;
  const parts = authorization.split(" "); 
  const [schema, token] = parts;
  return res.status(200).json({ token });
};

module.exports = {
  login,
  token
}
