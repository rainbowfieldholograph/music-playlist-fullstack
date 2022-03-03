import { ChangeEvent, useState } from 'react'
import { useMutation } from '@apollo/client'
import styles from './UploadForm.module.css'
import { ADD_TRACK } from '../../graphql/mutations/addTrack.mutation'
import { FormInput } from '../formInput/FormInput'
import { Loading } from '../loading/Loading'
import { UploadFormProps } from './UplodaForm.props'
import { Button } from '../button/Button'

export const UploadForm = function ({ setModal }: UploadFormProps) {
  const [file, setFile] = useState(null)
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [addTrack, { loading }] = useMutation(ADD_TRACK)

  const handleFileChange = async (event: ChangeEvent<any>) => {
    const selectedFile = await event.target.files[0]
    if (selectedFile.type.includes('audio/')) {
      setFile(selectedFile)
    } else {
      alert('select audio/mpeg file')
    }
  }

  const onSubmitUpload = async (event: any) => {
    event.preventDefault()
    try {
      const {
        data: { addTrack: newTrack },
      } = await addTrack({ variables: { title: title, author: author, file: file } })
      // addToTracks(newTrack)
      console.log(newTrack)
      setModal(false)
      setAuthor('')
      setTitle('')
    } catch (error) {
      alert('Failed to upload track to server')
      console.log('Upload failed: ', error)
    }
  }

  if (loading)
    return (
      <>
        <p className={styles.loadingTitle}>Uploading track. Please wait.</p>
        <Loading />
      </>
    )

  return (
    <form className={styles.form} action="" onSubmit={onSubmitUpload}>
      <h1>Upload Track</h1>
      <FormInput inputState={author} setInputState={setAuthor} labelText="Author" />
      <FormInput inputState={title} setInputState={setTitle} labelText="Title" />
      <label>
        <h1 className={styles.uploadTitle}>Upload audio File</h1>
        <input required type="file" accept="audio/*" onChange={handleFileChange} />
      </label>
      <Button className={styles.btn} type="submit">
        UPLOAD TRACK
      </Button>
    </form>
  )
}
