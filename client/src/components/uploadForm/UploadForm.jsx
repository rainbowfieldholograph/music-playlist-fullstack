import React, { useContext, useState } from 'react'
import { useMutation } from '@apollo/client'
import styles from './UploadForm.module.css'
import playerContext from '../../context/playerContext'
import Loading from '../loading/Loading'
import { ADD_TRACK, UPLOAD_FILE } from '../../graphql/tracks/mutation'

let src = ''

const UploadForm = () => {
  const { modal, toggleModal } = useContext(playerContext)
  const [file, setFile] = useState(null)
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [loading, setLoading] = useState(false)

  const [uploadFile] = useMutation(UPLOAD_FILE, {
    onCompleted: (data) => {
      const { uploadFile: f } = data
      src = f.url
    },
  })
  const [newTrack] = useMutation(ADD_TRACK)

  const handleFileChange = async (e) => {
    const selectedFile = await e.target.files[0]
    if (selectedFile.type.includes('audio/')) {
      setFile(selectedFile)
    } else {
      alert('выберите audio/mpeg файл')
    }
  }

  const addTrack = async () => {
    await newTrack({
      variables: {
        title,
        author,
        src,
      },
    })
    setAuthor('')
    setTitle('')
    src = ''
    window.location.reload()
  }

  const onClickUpload = async (event) => {
    event.preventDefault()
    if (title && file && author) {
      setLoading(true)
      await uploadFile({ variables: { file } })
      console.log('src:', src)
      setLoading(false)
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
        {loading ? (
          <div>
            <Loading />
            <h1>Uploading track... Please wait.</h1>
          </div>
        ) : (
          <form action="" onSubmit={onClickUpload}>
            <h1 className={styles.title}>Upload Track</h1>
            <label htmlFor="title">
              <h3>Title</h3>
            </label>
            <input
              id="title"
              className={styles.input}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
            />
            <label htmlFor="author">
              <h3>Author</h3>
            </label>
            <input
              id="author"
              className={styles.input}
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              type="text"
            />
            <label htmlFor="file">
              <h1 className={styles.uploadTitle}>Upload audio File</h1>
            </label>
            <input id="file" accept="audio/*" type="file" onChange={handleFileChange} />
            <button className={styles.btn} type="submit">
              UPLOAD TRACK
            </button>
          </form>
        )}
      </div>
    </div>
  )
}

export default UploadForm
