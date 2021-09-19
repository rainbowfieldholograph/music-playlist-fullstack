import { gql } from '@apollo/client'

// export const tracksQuery = gql`

//     getAllTracks {
//       id
//       title
//       author
//       src
//     }

// `

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
