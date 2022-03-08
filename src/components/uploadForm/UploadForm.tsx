import { ChangeEvent, FormEventHandler, useState } from 'react';
import { useMutation } from '@apollo/client';
import styles from './UploadForm.module.css';
import { ADD_TRACK } from '../../graphql/mutations/addTrack.mutation';
import { FormInput } from '../formInput/FormInput';
import { Loading } from '../loading/Loading';
import { UploadFormProps } from './UplodaForm.props';
import { Button } from '../button/Button';
import { IAddTrack } from '../../graphql/mutations/addTrack.interface';
import { GET_ALL_TRACKS } from '../../graphql/queries/getAllTracks.query';

export const UploadForm = ({ onSubmit }: UploadFormProps) => {
  const [file, setFile] = useState<File | null>(null);
  const [title, setTitle] = useState<string>('');
  const [author, setAuthor] = useState<string>('');
  const [addTrack, { loading }] = useMutation<IAddTrack>(ADD_TRACK);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    selectedFile && selectedFile.type.includes('audio/')
      ? setFile(selectedFile)
      : alert('Select audio/mpeg file');
  };

  const onSubmitUpload: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    try {
      await addTrack({
        variables: { title: title, author: author, file: file },
        refetchQueries: [{ query: GET_ALL_TRACKS }],
      });
      onSubmit();
      setAuthor('');
      setTitle('');
    } catch (error) {
      alert('An error occurred while uploading the track to the server');
      console.log('Upload failed: ', error);
    }
  };

  if (loading)
    return (
      <>
        <p className={styles.loadingTitle}>Uploading track. Please wait.</p>
        <Loading />
      </>
    );

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
        Upload Track
      </Button>
    </form>
  );
};
