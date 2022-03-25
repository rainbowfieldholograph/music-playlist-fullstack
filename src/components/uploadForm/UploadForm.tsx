import { ChangeEvent, FormEventHandler, useState } from 'react';
import { useMutation } from '@apollo/client';
import styles from './UploadForm.module.css';
import { FormInput } from '../formInput/FormInput';
import { UploadFormProps } from './UplodaForm.props';
import { Button } from '../button/Button';
import { UploadingBlock } from '../uploadingBlock/UploadingBlock';
import { AddTrackDocument, AddTrackMutation, GetAllTracksDocument } from '../../generated';
import { InputFile } from '../InputFile';

export const UploadForm = ({ onSubmit }: UploadFormProps) => {
  const [file, setFile] = useState<File | null>(null);
  const [title, setTitle] = useState<string>('');
  const [author, setAuthor] = useState<string>('');
  const [addTrack, { loading }] = useMutation<AddTrackMutation>(AddTrackDocument);

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
        refetchQueries: [{ query: GetAllTracksDocument }],
      });
      onSubmit();
      setAuthor('');
      setTitle('');
    } catch (error) {
      alert('An error occurred while uploading the track to the server');
      console.log('Upload failed: ', error);
    }
  };

  if (loading) return <UploadingBlock />;

  return (
    <form className={styles.form} action="" onSubmit={onSubmitUpload}>
      <h1>Upload Track</h1>
      <FormInput inputState={author} setInputState={setAuthor} labelText="Author" />
      <FormInput inputState={title} setInputState={setTitle} labelText="Title" />
      <InputFile
        text="Chose Audio File"
        className={styles.fileInput}
        required
        onChange={handleFileChange}
      />
      <Button className={styles.btn} type="submit">
        Upload Track
      </Button>
    </form>
  );
};
