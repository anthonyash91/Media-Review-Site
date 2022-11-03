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

router.get('/', dataController.index, viewController.index) // index

// api routes
router.get('/api', dataController.index, apiController.index) // index
router.delete('/api/:id', dataController.destroy, apiController.show) // delete
router.put('/api/:id', dataController.update, apiController.show) // update
router.post('/api', dataController.create, apiController.show) // create
router.get('/api/:id', dataController.show, apiController.show) // Show

// non api routes
router.get('/new/', viewController.view) // new
router.delete('/:id', dataController.destroy, viewController.redirectHome) // delete
router.put('/:id/comments', dataController.updateComment, viewController.redirectShow) // comment
router.put('/:id', dataController.update, viewController.redirectShow) // update
router.post('/', dataController.create, viewController.redirectHome) // create
router.get('/:id/edit', dataController.show, viewController.edit) // edit
router.get('/:id', dataController.show, viewController.show) // show

module.exports = router
