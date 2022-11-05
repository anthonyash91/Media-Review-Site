const Post = require('../models/post')

const dataController = {
  // index
  index (req, res, next) {
    Post.find({ username: req.session.username }, (err, foundPosts) => {
      if (err) {
        res.status(400).send({ msg: err.message })
      } else {
        const counterTypes = [['movie', 0], ['album', 0], ['song', 0], ['tvseries', 0], ['podcast', 0], ['book', 0]]

        for (let i = 0; i < counterTypes.length; i++) {
          for (let j = 0; j < foundPosts.length; j++) {
            if (counterTypes[i][0] === foundPosts[j].type) {
              counterTypes[i][1] += 1
            }
          }
        }

        res.locals.data.tag = req.params.tag
        res.locals.data.posts = foundPosts
        res.locals.data.fullName = req.session.fullName
        res.locals.data.headerBackground = req.session.headerBackground
        res.locals.data.profilePicture = req.session.profilePicture

        res.locals.data.movieNumber = counterTypes[0][1]
        res.locals.data.albumNumber = counterTypes[1][1]
        res.locals.data.songNumber = counterTypes[2][1]
        res.locals.data.tvSeriesNumber = counterTypes[3][1]
        res.locals.data.podcastNumber = counterTypes[4][1]
        res.locals.data.bookNumber = counterTypes[5][1]
        next()
      }
    })
  },
  // delete
  destroy (req, res, next) {
    Post.findByIdAndDelete(req.params.id, (err, deletedPost) => {
      if (err) {
        res.status(400).send({ msg: err.message })
      } else {
        res.locals.data.post = deletedPost
        next()
      }
    })
  },
  // update
  update (req, res, next) {
    const type = req.body.type
    Post.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedPost) => {
      if (err) {
        res.status(400).send({ msg: err.message })
      } else {
        res.locals.data.post = updatedPost
        res.locals.data.postType = type
        next()
      }
    })
  },
  updateComment (req, res, next) {
    Post.findById(req.params.id, (err, foundPost) => {
      if (err) {
        res.status(400).send({ msg: err.message })
      } else {
        foundPost.comments.push(req.body)

        Post.findByIdAndUpdate(req.params.id, foundPost, { new: true }, (err, updatedPost) => {
          if (err) {
            res.status(400).send({ msg: err.message })
          } else {
            res.locals.data.post = updatedPost
            next()
          }
        })
      }
    })
  },
  newPost (req, res, next) {
    res.locals.data.postType = req.params.postType
    next()
  },
  // create
  create (req, res, next) {
    req.body.username = req.session.username

    Post.create(req.body, (err, createdPost) => {
      if (err) {
        res.status(400).send({ msg: err.message })
      } else {
        res.locals.data.post = createdPost
        next()
      }
    })
  },
  // edit

  // show
  show (req, res, next) {
    Post.findById(req.params.id, (err, foundPost) => {
      if (err) {
        res.status(400).send({ msg: err.message })
      } else {
        res.locals.data.postType = req.params.postType
        res.locals.data.post = foundPost
        next()
      }
    })
  }
}

module.exports = dataController
