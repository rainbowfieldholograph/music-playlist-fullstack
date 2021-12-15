import React, { useState } from 'react'
import { useMutation } from '@apollo/client'
import styles from './UploadForm.module.css'
import Loading from '../loading/Loading'
import { ADD_TRACK } from '../../graphql/tracks/mutation'
import playerStore from '../../mobx/PlayerStore'

const UploadForm = React.memo(function ({ modal, setModal }) {
  const [file, setFile] = useState(null)
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [loading, setLoading] = useState(false)
  const [addTrack] = useMutation(ADD_TRACK)

  const handleFileChange = async (e) => {
    const selectedFile = await e.target.files[0]
    if (selectedFile.type.includes('audio/')) {
      setFile(selectedFile)
    } else {
      alert('выберите audio/mpeg файл')
    }
  }

  const onSubmitUpload = async (event) => {
    event.preventDefault()
    setLoading(true)
    try {
      await addTrack({ variables: { title: title, author: author, file: file } })
    } catch (error) {
      setLoading(false)
      alert('Не удалось загрузить трек на сервер')
      console.log(error)
      return
    }
    setLoading(false)
    setModal(!modal)
    setAuthor('')
    setTitle('')
    playerStore.fetchTracks()
  }

  return (
    <div
      onClick={() => {
        setModal(!modal)
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
          <form action="" onSubmit={onSubmitUpload}>
            <h1 className={styles.title}>Upload Track</h1>
            <label htmlFor="author">
              <h3>Author</h3>
            </label>
            <input
              id="author"
              required
              className={styles.input}
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              type="text"
            />
            <label htmlFor="title">
              <h3>Title</h3>
            </label>
            <input
              id="title"
              required
              className={styles.input}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
            />
            <label htmlFor="file">
              <h1 className={styles.uploadTitle}>Upload audio File</h1>
            </label>
            <input required id="file" accept="audio/*" type="file" onChange={handleFileChange} />
            <button className={styles.btn} type="submit">
              UPLOAD TRACK
            </button>
          </form>
        )}
      </div>
    </div>
  )
})

export default UploadForm
