import { useState } from 'react'
import { useMutation } from '@apollo/client'
import styles from './UploadForm.module.css'
import Loading from '../loading/Loading'
import { ADD_TRACK } from '../../graphql/tracks/mutation'
import PlayerStore from '../../mobx/PlayerStore'
import FormInput from '../formInput/FormInput'

const UploadForm = function ({ setModal }) {
  const { addToTracks } = PlayerStore
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
      const {
        data: { addTrack: newTrack },
      } = await addTrack({ variables: { title: title, author: author, file: file } })
      addToTracks(newTrack)
      setModal(false)
      setAuthor('')
      setTitle('')
    } catch (error) {
      alert('Failed to upload track to server')
      console.log('upload failed: ', error)
    }
  }

  if (loading)
    return (
      <div>
        <Loading />
        <p className={styles.uploadTitle}>Uploading track. Please wait.</p>
      </div>
    )

  return (
    <form action="" onSubmit={onSubmitUpload}>
      <h1 className={styles.title}>Upload Track</h1>
      <FormInput inputState={author} setInputState={setAuthor} id="author" label="Author" />
      <FormInput inputState={title} setInputState={setTitle} id="title" label="Title" />
      <label htmlFor="file">
        <h1 className={styles.uploadTitle}>Upload audio File</h1>
      </label>
      <input required id="file" type="file" accept="audio/*" onChange={handleFileChange} />
      <button className={styles.btn} type="submit">
        UPLOAD TRACK
      </button>
    </form>
  )
}

export default UploadForm
