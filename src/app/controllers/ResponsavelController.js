const Responsavel = require('../models/Responsavel')

class ResponsavelController {
  async store (req, res) {
    const { email } = req.body

    if (await Responsavel.findOne({ email })) {
      return res.status(400).json({ error: 'User already exists' })
    }

    const users = await Responsavel.create(req.body)
    return res.json(users)
  }
}

module.exports = new ResponsavelController()
