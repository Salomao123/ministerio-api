const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate')

const Post = new mongoose.Schema(
  {
    description: {
      type: String,
      required: true
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Usuario',
      required: true
    }
  },
  {
    timestamps: true
  }
)

Post.plugin(mongoosePaginate)

module.exports = mongoose.model('Post', Post)
