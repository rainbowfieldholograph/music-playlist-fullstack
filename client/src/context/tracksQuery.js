import { gql } from '@apollo/client'

export const getAllTracks = gql`
  query getAllTracks {
    getAllTracks {
      id
      title
      author
      src
    }
  }
`
