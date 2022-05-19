import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { toast } from 'react-toastify';
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
    if (selectedFile && selectedFile.type.includes('audio/')) {
      setFile(selectedFile);
    } else {
      toast.error('Select audio/mpeg file', {
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  const onSubmitUpload: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    const addTrackPromise = addTrack({
      variables: { title: title, author: author, file: file },
      refetchQueries: [{ query: GetAllTracksDocument }],
    });
    onSubmit();
    try {
      toast.promise(addTrackPromise, {
        pending: 'Loading file',
        success: 'File loaded succesfuly',
        error: 'An error occurred while uploading the file to the server',
      });
      await addTrackPromise;
      console.log('success');
    } catch (error) {
      console.log('Upload failed: ', error);
    } finally {
      setAuthor('');
      setTitle('');
      setFile(null);
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
