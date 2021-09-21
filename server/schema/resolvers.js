const { GraphQLUpload } = require('graphql-upload')
const fs = require('fs')
const path = require('path')
const Tracks = require('../models/Track.model.js')

const PORT = process.env.PORT || 5000

function generateRandomString(length) {
  var result = ''
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  var charactersLength = characters.length
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
    uploadFile: async (parent, { file }) => {
      const { createReadStream, filename } = await file
      const { ext } = path.parse(filename)
      const randomName = generateRandomString(12) + ext
      const stream = createReadStream()
      const pathName = path.join(__dirname, `../public/audio/${randomName}`)
      console.log(pathName)
      const out = fs.createWriteStream(pathName)
      console.log(pathName)
      await stream.pipe(out)
      const urlPath = `https://eyes-closed-server.herokuapp.com/audio/${randomName}` //`http://localhost:${PORT}/audio/${randomName}`
      return { url: urlPath }
    },
    addTrack: (parent, args) => {
      const track = new Tracks({
        title: args.title,
        author: args.author,
        src: args.src,
      })
      return track.save()
    },
  },
}

module.exports = { resolvers }
