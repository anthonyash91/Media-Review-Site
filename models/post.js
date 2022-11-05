const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
  imageUrl: { type: String, required: true },
  title: { type: String, required: true },
  mainPeople: { type: String, required: true },
  mp3: { type: String, required: false },
  rating: { type: String, required: true },
  review: { type: String, required: true },
  tag1: { type: String, required: true },
  tag2: { type: String, required: true },
  tag3: { type: String, required: true },
  type: { type: String, required: true },
  username: String,
  comments: [{
    commentName: { type: String, required: true },
    commentBody: { type: String, required: true },
    commentProfileIconUrl: { type: String, required: false }
  }]
}, { timestamps: true })

const Post = mongoose.model('Post', postSchema)

module.exports = Post
