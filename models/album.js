const mongoose = require('mongoose')

const albumSchema = new mongoose.Schema({
  albumTitle: { type: String, required: true },
  albumArtist: { type: String, required: true },
  albumRating: { type: String, required: true },
  albumArtUrl: { type: String, required: true },
  username: String,
  tags: [{
    tagOne: { type: String, required: true },
    tagTwo:{ type: String, required: true },
    tagThree:{ type: String, required: true }
  }],
  albumReview: { type: String, required: true },
  comments: [{
    commentName: { type: String, required: true },
    commentBody: { type: String, required: true }
  }]
}, { timestamps: true })

const Album = mongoose.model('Album', albumSchema)

module.exports = Album
