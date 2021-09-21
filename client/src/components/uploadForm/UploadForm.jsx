import React, { useContext, useState } from 'react'
import { useMutation, gql } from '@apollo/client'
import styles from './UploadForm.module.css'
import playerContext from '../../context/playerContext'

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

let src = ''

const UploadForm = () => {
  const { modal, toggleModal } = useContext(playerContext)
  const [file, setFile] = useState(null)
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')

  const [uploadFile] = useMutation(UPLOAD_FILE, {
    onCompleted: (data) => {
      const { uploadFile: g } = data
      src = g.url
      console.log(data)
      console.log('ssqe', src)
    },
  })
  const [newTrack] = useMutation(ADD_TRACK)

  const handleFileChange = async (e) => {
    const f = await e.target.files[0]
    if (f.type.includes('audio/')) {
      setFile(f)
      console.log('file', f)
    } else {
      alert('выберите audio/mpeg файл')
    }
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
      src = ''
    })
  }

  const onClickUpload = async () => {
    if (title && file && author) {
      await uploadFile({ variables: { file } })
      console.log('src:', src, 'sqwe:')
      toggleModal()
      addTrack()
    } else {
      alert('заполните все поля')
    }
  }

  return (
    <div
      onClick={() => {
        toggleModal()
      }}
      className={modal ? [styles.wrapper, styles.active].join(' ') : styles.wrapper}
    >
      <div
        onClick={(e) => {
          e.stopPropagation()
        }}
        className={styles.inner}
      >
        <h1 className={styles.title}>Upload Track</h1>
        <h3>Title</h3>
        <input
          className={styles.input}
          value={title}
          onChange={(e) => {
            setTitle(e.target.value)
          }}
          type="text"
        />
        <h3>Author</h3>
        <input
          className={styles.input}
          value={author}
          onChange={(e) => {
            setAuthor(e.target.value)
          }}
          type="text"
        />
        <h1 className={styles.uploadTitle}>Upload audio File</h1>
        <input accept="audio/*" type="file" onChange={handleFileChange} />
        <button
          className={styles.btn}
          onClick={() => {
            onClickUpload()
          }}
        >
          UPLOAD TRACK
        </button>
      </div>
    </div>
  )
}

export default UploadForm
