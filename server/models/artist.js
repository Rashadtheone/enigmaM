const mongoose = require ('mongoose')

// setting obj format up to be sent to info database

const artistSchema = new mongoose.Schema ({
  artistName: {
    type: String,
    required: true,
  },
  hitSongs: {
    type: Number,
    required: true,
  }
})

const artist = mongoose.model("artist", artistSchema)
module.exports = artist
