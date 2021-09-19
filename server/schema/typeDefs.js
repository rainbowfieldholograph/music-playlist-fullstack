const { gql } = require('apollo-server-express')

const typeDefs = gql`
  scalar Upload

  type File {
    url: String!
  }

  type Track {
    id: ID!
    title: String!
    author: String!
    src: String!
  }

  type Query {
    getAllTracks: [Track!]!
  }

  #Mutations

  type Mutation {
    uploadFile(file: Upload!): File!
    addTrack(title: String!, author: String!, src: String!): Track!
  }
`

module.exports = { typeDefs }
