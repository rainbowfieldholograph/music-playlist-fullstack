const express = require('express')
const mongoose = require('mongoose')
const { ApolloServer } = require('apollo-server-express')
const { typeDefs } = require('./schema/typeDefs')
const { resolvers } = require('./schema/resolvers')
const { graphqlUploadExpress } = require('graphql-upload')

const app = express()
const PORT = process.env.PORT || 5000
const mongoURL =
  'mongodb+srv://user:user123@music.dsxqg.mongodb.net/music?retryWrites=true&w=majority'

const startServer = async () => {
  try {
    const server = new ApolloServer({
      typeDefs,
      resolvers,
      playground: true,
    })

    await server.start()

    app.use(graphqlUploadExpress())
    server.applyMiddleware({ app })
    app.use(express.static('public'))

    await mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true })

    app.listen(PORT, () => console.log(`Server Started on port ${PORT}`))
  } catch (error) {
    console.log('error', error)
  }
}

const dbConnection = mongoose.connection
dbConnection.on('error', (err) => console.log(`Connection error: ${err}`))
dbConnection.once('open', () => console.log('Connected to DB!'))

startServer()
