const RESOURCE_PATH = '/posts'

// only put routes that show something on a page; create doesn't show anything, neither does delete, so they won't be put here
const viewController = {
  // index
  index (req, res, next) {
    res.render('posts/Index', res.locals.data)
  },
  // new
  newPost (req, res, next) {
    res.render('posts/New', res.locals.data)
  },
  // edit
  edit (req, res, next) {
    res.render('posts/Edit', res.locals.data)
  },
  // show
  show (req, res, next) {
    res.render('posts/Show', res.locals.data)
  },
  tag (req, res, next) {
    res.render('posts/Tag', res.locals.data)
  },
  category (req, res, next) {
    res.render('posts/Category', res.locals.data)
  },
  redirectHome (req, res, next) {
    res.redirect(RESOURCE_PATH)
  },
  redirectShow (req, res, next) {
    const postId = req.params.id || res.locals.data.post._id
    const type = req.params.postType || res.locals.data.postType
    res.redirect(`${RESOURCE_PATH}/${type}/${postId}`)
  },
  redirectComment (req, res, next) {
    const postId = req.params.id || res.locals.data.post._id
    const type = req.params.postType || res.locals.data.postType
    res.redirect(`${RESOURCE_PATH}/${type}/${postId}#comments`)
  }
}

module.exports = viewController
