const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const authConfig = require('../../config/auth')

const Usuario = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    senha: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
)

Usuario.statics = {
  generateToken ({ id }) {
    return jwt.sign({ id }, authConfig.secret, {
      expiresIn: authConfig.ttl
    })
  }
}

module.exports = mongoose.model('Usuario', Usuario)
