const Usuario = require('../models/Usuario')

class LoginSession {
  async store (req, res) {
    const { email } = req.body

    const usuario = await Usuario.findOne({ email })

    if (!usuario) {
      return res.status(400).json({ error: 'Email inválido!' })
    }

    return res.json({ usuario, token: Usuario.generateToken(usuario) })
  }
}

module.exports = new LoginSession()
