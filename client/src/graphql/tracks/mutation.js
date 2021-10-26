import { gql } from '@apollo/client'

export const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`
export const ADD_TRACK = gql`
  mutation addTrack($title: String!, $author: String!, $src: String!) {
    addTrack(title: $title, author: $author, src: $src) {
      title
      author
      src
    }
  }
`
