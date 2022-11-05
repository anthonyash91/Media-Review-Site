const express = require('express')
const router = express.Router()
const viewController = require('./viewController.js')
const dataController = require('./dataController.js')
const apiController = require('./apiController.js')

router.use((req, res, next) => {
  if (req.session.loggedIn) {
    next()
  } else {
    res.redirect('/user/login')
  }
})

// api routes
router.get('/api', dataController.index, apiController.index) // index
router.delete('/api/:id', dataController.destroy, apiController.show) // delete
router.put('/api/:id', dataController.update, apiController.show) // update
router.post('/api', dataController.create, apiController.show) // create
router.get('/api/:id', dataController.show, apiController.show) // Show

// non api routes
router.get('/', dataController.index, viewController.index) // index
router.get('/new/:postType', dataController.newPost, dataController.index, viewController.newPost) // new
router.delete('/:postType/:id', dataController.destroy, viewController.redirectHome) // delete
router.put('/:postType/:id/comments', dataController.updateComment, viewController.redirectComment) // comment
router.put('/:postType/:id', dataController.update, viewController.redirectShow) // update
router.post('/', dataController.create, viewController.redirectHome) // create
router.get('/:postType/:id/edit', dataController.show, dataController.index, viewController.edit) // edit
router.get('/tag/:tag', dataController.index, viewController.tag) // new
router.get('/category/:tag', dataController.index, viewController.category) // new
router.get('/:postType/:id/', dataController.show, dataController.index, viewController.show) // posts show pages

module.exports = router
