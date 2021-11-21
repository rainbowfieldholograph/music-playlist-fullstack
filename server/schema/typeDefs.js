const { gql } = require('apollo-server-express')

const typeDefs = gql`
  scalar Upload

  #Types

  type Track {
    id: ID!
    title: String!
    author: String!
    src: String!
  }

  #Query

  type Query {
    getAllTracks: [Track!]!
  }

  #Mutations

  type Mutation {
    addTrack(title: String!, author: String!, file: Upload!): Track!
  }
`

module.exports = { typeDefs }
