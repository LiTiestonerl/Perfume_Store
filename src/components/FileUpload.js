import React, { useState } from 'react';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { initializeApp } from 'firebase/app';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxDPWoGJYHyCP1d0tfpoM_1hLxcGCrSHM",
  authDomain: "perfum-store-a0b2c.firebaseapp.com",
  projectId: "perfum-store-a0b2c",
  storageBucket: "perfum-store-a0b2c.appspot.com",
  messagingSenderId: "1000151462979",
  appId: "1:1000151462979:web:f03a46a6c87a29d37890f6",
  measurementId: "G-BXZBXFMWXM"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const uploadToFirebase = () => {
    if (!file) {
      alert("Please select a file first!");
      return;
    }

    const storageRef = ref(storage, `uploads/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setUploadProgress(progress);
      },
      (error) => {
        console.error('Error uploading file:', error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log('File available at:', downloadURL);
        });
      }
    );
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={uploadToFirebase}>Upload File</button>
      {uploadProgress > 0 && <p>Upload Progress: {uploadProgress}%</p>}
    </div>
  );
};

export default FileUpload;
