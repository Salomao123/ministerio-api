const Usuario = require('../models/Usuario')

class UsuarioController {
  async store (req, res) {
    const { email } = req.body

    if (await Usuario.findOne({ email })) {
      return res.status(400).json({ error: 'Usuário já existe!' })
    }

    const usuarios = await Usuario.create(req.body)
    return res.json(usuarios)
  }

  async index (req, res) {
    const user = await Usuario.findById(req.params.id)

    return res.json(user)
  }
}

module.exports = new UsuarioController()
