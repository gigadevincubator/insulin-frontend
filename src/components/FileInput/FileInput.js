import React, { useState, useRef } from 'react';

import style from './FileInput.module.css';

export default function FileInput() {
  const [selectedFile, setSelectedFile] = useState();
  const [isSelected, setIsSelected] = useState(false);
  const fileRef = useRef(null);

  const changeHandler = (e) => {
    if (e.target.files.length !== 0) {
      const imageType = e.target.files[0].type;
      if (
        imageType.includes('png') ||
        imageType.includes('jpg') ||
        imageType.includes('jpeg')
      ) {
        setSelectedFile(e.target.files[0]);
        setIsSelected(true);
        fileRef.current.style.border = '1px solid #000';
      } else fileRef.current.style.border = '1px solid red';
    }
  };

  return (
    <div>
      <label htmlFor="file-upload" className={style.fileInput} ref={fileRef}>
        {isSelected && selectedFile ? selectedFile.name : 'Choose a file...'}
      </label>
      <input
        type="file"
        name="file"
        id="file-upload"
        accept=".png,.jpg,.jpeg"
        onChange={changeHandler}
      />
    </div>
  );
}
