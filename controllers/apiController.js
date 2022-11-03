const apiController = {
  index (req, res, next) {
    res.json(res.locals.data.posts)
  },
  show (req, res, next) {
    res.json(res.locals.data.post)
  }
}

module.exports = apiController
