const Operacao = require('../models/Operacao')

class OperacaoController {
  async index (req, res) {
    const ops = await Operacao.paginate(
      {},
      {
        page: req.query.page || 1,
        limit: 20,
        sort: '-createdAt',
        populate: ['author']
      }
    )
    return res.json(ops)
  }

  async show (req, res) {
    const ops = await Operacao.findById(req.params.id)
    return res.json(ops)
  }

  async store (req, res) {
    const ops = await Operacao.create({ ...req.body, author: req.userId })
    return res.json(ops)
  }

  async update (req, res) {
    const ops = await Operacao.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })

    return res.json(ops)
  }

  async destroy (req, res) {
    await Operacao.findByIdAndRemove(req.params.id)

    return res.json({ success: 'Operação deletada com sucesso!' })
  }
}

module.exports = new OperacaoController()
