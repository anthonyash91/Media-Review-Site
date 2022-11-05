const mongoose = require('mongoose')
const { Schema, model } = mongoose

const userSchema = new Schema({
  firstName: { type: String, required: false },
  lastName: { type: String, required: false },
  headerBackground: { type: String, required: false },
  profilePicture: { type: String, required: false },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true }
})

const User = model('User', userSchema)

module.exports = User
