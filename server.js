require('dotenv').config()
const PORT = process.env.PORT || 3333

const express = require('express')
const methodOverride = require('method-override')
const session = require('express-session')
const MongoStore = require('connect-mongo')
const db = require('./models/db')
const app = express()

app.use(express.urlencoded({ extended: true }))

app.use((req, res, next) => {
  res.locals.data = {}
  next()
})

app.engine('jsx', require('jsx-view-engine').createEngine())
app.set('view engine', 'jsx')

db.once('open', () => {
  console.log('connected to MongoDB')
})

app.use(
  session({
    secret: process.env.SECRET,
    store: MongoStore.create({ mongoUrl: process.env.MONGO_URI }),
    saveUninitialized: true,
    resave: false
  })
)

app.use(methodOverride('_method'))

app.get('/', (req, res) => {
  res.redirect('/posts')
})

app.use(express.static('public'))
app.use('/posts', require('./controllers/routeController'))
app.use('/user', require('./controllers/authController'))

app.listen(PORT, () => {
  console.log('listening on port 3333')
})
