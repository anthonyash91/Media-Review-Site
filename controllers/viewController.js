const RESOURCE_PATH = '/posts'

// only put routes that show something on a page; create doesn't show anything, neither does delete, so they won't be put here
const viewController = {
  // index
  index (req, res, next) {
    res.render('posts/Index', res.locals.data)
  },
  // new
  view (req, res, next) {
    res.render('posts/New', req.params.type)
  },
  // edit
  edit (req, res, next) {
    res.render('posts/Edit', res.locals.data)
  },
  // show
  show (req, res, next) {
    res.render('posts/Show', res.locals.data)
  },
  redirectHome (req, res, next) {
    res.redirect(RESOURCE_PATH)
  },
  redirectShow (req, res, next) {
    const fruitId = req.params.id || res.locals.data.fruit._id
    res.redirect(`${RESOURCE_PATH}/${fruitId}`)
  }
}

module.exports = viewController
