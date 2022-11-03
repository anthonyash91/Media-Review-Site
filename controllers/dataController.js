const Album = require('../models/album')

const dataController = {
  // index
  index (req, res, next) {
    Album.find({ username: req.session.username }, (err, foundAlbums) => {
      if (err) {
        res.status(400).send({ msg: err.message })
      } else {
        res.locals.data.albums = foundAlbums
        next()
      }
    })
  },
  // delete
  destroy (req, res, next) {
    Album.findByIdAndDelete(req.params.id, (err, deletedAlbum) => {
      if (err) {
        res.status(400).send({ msg: err.message })
      } else {
        res.locals.data.album = deletedAlbum
        next()
      }
    })
  },
  // update
  update (req, res, next) {
    // req.body.readyToEat = req.body.readyToEat === 'on'
    Album.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedAlbum) => {
      if (err) {
        res.status(400).send({ msg: err.message })
      } else {
        res.locals.data.album = updatedAlbum
        next()
      }
    })
  },
  updateComment (req, res, next) {
    console.log(req.body)
    Album.findById(req.params.id, (err, foundAlbum) => {
      if (err) {
        res.status(400).send({ msg: err.message })
      } else {
        foundAlbum.comments.push(req.body)

        Album.findByIdAndUpdate(req.params.id, foundAlbum, { new: true }, (err, updatedAlbum) => {
          if (err) {
            res.status(400).send({ msg: err.message })
          } else {
            res.locals.data.album = updatedAlbum
            next()
          }
        })
      }
    })
  },
  // create
  create (req, res, next) {
    // req.body.readyToEat = req.body.readyToEat === 'on'
    req.body.username = req.session.username

    Album.create(req.body, (err, createdAlbum) => {
      if (err) {
        res.status(400).send({ msg: err.message })
      } else {
        res.locals.data.album = createdAlbum
        next()
      }
    })
  },
  // edit

  // show
  show (req, res, next) {
    Album.findById(req.params.id, (err, foundAlbum) => {
      if (err) {
        res.status(400).send({ msg: err.message })
      } else {
        res.locals.data.album = foundAlbum
        next()
      }
    })
  }
}

module.exports = dataController
