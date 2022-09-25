import React, { useState, useRef } from 'react';

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const UPLOAD_DELAY = 5000;

export const ImageUploader = () => {
  // ref for get access to hidden input element
  const inputImageRef = useRef<HTMLInputElement | null>(null);
  // ref for storing a selected file data
  const fileRef = useRef<File | null>(null);
  const [message, setMessage] = useState<string | null>('');

  // Callback function when 'Upload image' button is clicked
  const onClickText = () => {
    if (inputImageRef.current !== null) {
      inputImageRef.current.click();
    }
  };

  // Callback function called when a file is selected
  const onChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files !== null && files.length > 0) {
      fileRef.current = files[0];
    }
  };

  // Callback function called when upload button is clicked
  const onClickUpload = async () => {
    if (fileRef.current !== null) {
      // Usually, API should be called here to uplaod files to the server
      // Instead, this function just waits for a while here
      await sleep(UPLOAD_DELAY);
      // message will be updated to show the image was uploaded successfully
      setMessage(`${fileRef.current.name} has been successfully uploaded`);
    }
  };

  return (
    <div>
      <p style={{ textDecoration: 'underline' }} onClick={onClickText}>
        Upload image
      </p>
      <input
        ref={inputImageRef}
        type="file"
        accept='image/*'
        onChange={onChangeImage}
        style={{ visibility: 'hidden' }}
      />
      <br />
      <button onClick={onClickUpload}>Upload</button>
      {message !== null && <p>{message}</p>}
    </div>
  );
};