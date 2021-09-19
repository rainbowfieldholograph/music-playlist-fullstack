const graphql = require('graphql')

const { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID, GraphQLList, GraphQLNonNull } =
  graphql

const Tracks = require('../models/track')

const TrackType = new GraphQLObjectType({
  name: 'Track',
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: new GraphQLNonNull(GraphQLString) },
    author: { type: new GraphQLNonNull(GraphQLString) },
    src: { type: new GraphQLNonNull(GraphQLString) },
  }),
})

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addTrack: {
      type: TrackType,
      args: {
        title: { type: new GraphQLNonNull(GraphQLString) },
        author: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve(parent, args) {
        const track = new Tracks({
          title: args.title,
          author: args.author,
        })
        return track.save()
      },
    },
  },
})

const Query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    track: {
      type: TrackType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Tracks.findById(args.id)
      },
    },
    tracks: {
      type: new GraphQLList(TrackType),
      resolve(parent, args) {
        return Tracks.find({})
      },
    },
  },
})

module.exports = new GraphQLSchema({
  query: Query,
  mutation: Mutation,
})
//экспортируем наш созданный запрос
