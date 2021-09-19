import React, { useState } from 'react'
import { useMutation, gql } from '@apollo/client'
import styles from './UploadForm.module.css'

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`
const ADD_TRACK = gql`
  mutation addTrack($title: String!, $author: String!, $src: String!) {
    addTrack(title: $title, author: $author, src: $src) {
      title
      author
      src
    }
  }
`

const UploadForm = () => {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [src, setSrc] = useState('')
  const [uploadFile] = useMutation(UPLOAD_FILE, {
    onCompleted: (data) => {
      const { uploadFile } = data
      setSrc(uploadFile.url)
      console.log(src)
    },
  })
  const [newTrack] = useMutation(ADD_TRACK)

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (!file) return
    uploadFile({ variables: { file } })
  }

  const addTrack = () => {
    newTrack({
      variables: {
        title,
        author,
        src,
      },
    }).then(({ data }) => {
      console.log(data)
      setAuthor('')
      setTitle('')
      setSrc('')
    })
  }

  return (
    <div className={styles.wrapper}>
      <h1>Upload Track</h1>
      <h3>Title</h3>
      <input
        value={title}
        onChange={(e) => {
          setTitle(e.target.value)
        }}
        type="text"
      />
      <h3>Author</h3>
      <input
        value={author}
        onChange={(e) => {
          setAuthor(e.target.value)
        }}
        type="text"
      />
      <h1>Upload audio File</h1>
      <input type="file" onChange={handleFileChange} />
      <button
        onClick={() => {
          addTrack()
        }}
      >
        UPLOAD
      </button>
    </div>
  )
}

export default UploadForm
