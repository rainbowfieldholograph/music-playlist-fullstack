import { gql } from '@apollo/client'

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
