const Mandado = require('../models/Mandado')

class MandadoController {
  async store (req, res) {
    const mandados = await Mandado.create(req.body)
    return res.json(mandados)
  }
}

module.exports = new MandadoController()
