import { gql } from '@apollo/client'

// export const UPLOAD_FILE = gql`
//   mutation uploadFile($file: Upload!) {
//     uploadFile(file: $file) {

//     }
//   }
// `
export const ADD_TRACK = gql`
  mutation addTrack($title: String!, $author: String!, $file: Upload!) {
    addTrack(title: $title, author: $author, file: $file) {
      src
      author
      title
      id
    }
  }
`
