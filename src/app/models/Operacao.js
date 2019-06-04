const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate')

const Operacao = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Usuario',
      required: true
    },
    address: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
)

Operacao.plugin(mongoosePaginate)

module.exports = mongoose.model('Operacao', Operacao)
