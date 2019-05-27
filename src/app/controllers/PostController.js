const Post = require('../models/Post')

class PostController {
  async index (req, res) {
    const posters = await Post.paginate(
      {},
      {
        page: req.query.page || 1,
        limit: 10,
        sort: '-createdAt',
        populate: ['author']
      }
    )
    return res.json(posters)
  }

  async store (req, res) {
    const posters = await Post.create(req.body)

    return res.json(posters)
  }
}

module.exports = new PostController()
