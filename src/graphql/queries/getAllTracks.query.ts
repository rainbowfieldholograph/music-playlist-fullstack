import { gql } from '@apollo/client'

export const GET_ALL_TRACKS = gql`
  query GetAllTracks {
    getAllTracks {
      id
      title
      author
      src
    }
  }
`
