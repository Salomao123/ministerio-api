const mongoose = require('mongoose')

const Mandado = new mongoose.Schema(
  {
    nome: {
      type: String,
      required: true
    },
    numero: {
      type: Number,
      required: true
    },
    alvo: {
      type: String,
      required: true
    },
    cnpj: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('Mandado', Mandado)
