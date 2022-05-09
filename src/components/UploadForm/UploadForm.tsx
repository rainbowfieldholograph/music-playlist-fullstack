import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { FormInput } from '../FormInput';
import { Button } from '../Button';
import { UploadingBlock } from '../UploadingBlock';
import { AddTrackDocument, AddTrackMutation, GetAllTracksDocument } from '../../generated';
import { InputFile } from '../InputFile';
import styles from './UploadForm.module.scss';
import type { UploadFormProps } from './UplodaForm.props';
import type { ChangeEvent, FC, FormEventHandler } from 'react';

export const UploadForm: FC<UploadFormProps> = ({ onSubmit }) => {
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
      setFile(null);
      alert('An error occurred while uploading the file to the server');
      console.log('Upload failed: ', error);
    }
  };

  if (loading) return <UploadingBlock />;

  return (
    <form className={styles.form} action="" onSubmit={onSubmitUpload}>
      <FormInput inputState={author} setInputState={setAuthor} labelText="Author" />
      <FormInput inputState={title} setInputState={setTitle} labelText="Title" />
      <InputFile
        text={file?.name ?? 'Chose Audio File'}
        className={styles.fileInput}
        required
        onChange={handleFileChange}
      />
      <Button className={styles.btn} type="submit">
        Upload
      </Button>
    </form>
  );
};
