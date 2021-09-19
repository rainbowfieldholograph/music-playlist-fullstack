const { Schema, model } = require('mongoose')

const TrackSchema = new Schema(
  {
    title: { type: String, required: true, unique: false },
    author: { type: String, required: true, unique: false },
    src: { type: String, required: true, unique: true },
  },
  {
    versionKey: false,
  }
)

module.exports = model('Track', TrackSchema)
