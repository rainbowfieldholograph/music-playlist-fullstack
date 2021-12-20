import React, { useState } from 'react'
import { useMutation } from '@apollo/client'
import styles from './UploadForm.module.css'
import Loading from '../loading/Loading'
import { ADD_TRACK } from '../../graphql/tracks/mutation'
import PlayerStore from '../../mobx/PlayerStore'

const UploadForm = React.memo(function ({ setModal }) {
  const { fetchTracks } = PlayerStore
  const [file, setFile] = useState(null)
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [addTrack, { loading }] = useMutation(ADD_TRACK)

  const handleFileChange = async (event) => {
    const selectedFile = await event.target.files[0]
    if (selectedFile.type.includes('audio/')) {
      setFile(selectedFile)
    } else {
      alert('выберите audio/mpeg файл')
    }
  }

  const onSubmitUpload = async (event) => {
    event.preventDefault()
    try {
      await addTrack({ variables: { title: title, author: author, file: file } })
      setModal(false)
      setAuthor('')
      setTitle('')
      fetchTracks()
    } catch (error) {
      alert('Не удалось загрузить трек на сервер')
      console.log(error)
    }
  }

  loading && (
    <div>
      <Loading />
      <p>Uploading track. Please wait.</p>
    </div>
  )

  return (
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
        onChange={(event) => setAuthor(event.target.value)}
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
        onChange={(event) => setTitle(event.target.value)}
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
  )
})

export default UploadForm
