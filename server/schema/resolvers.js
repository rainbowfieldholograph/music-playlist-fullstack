const { GraphQLUpload } = require('graphql-upload')
const fs = require('fs')
const path = require('path')
const Tracks = require('../models/Track.model.js')
const util = require('util')
const stream = require('stream')
const pipeline = util.promisify(stream.pipeline)

const { uploadFileAWS } = require('../s3')

function generateRandomString(length) {
  let result = ''
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  const charactersLength = characters.length
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength))
  }
  return result
}

const resolvers = {
  Upload: GraphQLUpload,

  Query: {
    getAllTracks: async () => {
      const data = await Tracks.find({})
      return data
    },
  },

  Mutation: {
    addTrack: async (parent, { title, author, file }) => {
      const { createReadStream, filename } = await file
      const { ext } = path.parse(filename)
      const randomName = generateRandomString(12) + ext
      const stream = createReadStream()
      const pathName = path.join(__dirname, `../public/audio/${randomName}`)
      const out = fs.createWriteStream(pathName)
      // await stream.pipe(out)
      await pipeline(stream, out)
      try {
        const uploadedFile = await uploadFileAWS(pathName, randomName)
        const track = new Tracks({
          title: title,
          author: author,
          src: uploadedFile.Location,
        })
        const savedTrack = await track.save()
        return savedTrack
      } catch (error) {
        console.log(error)
      }
    },
  },
}

module.exports = { resolvers }
