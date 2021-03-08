import React, { useState } from 'react';

import style from './FileInput.module.css';

export default function FileInput() {
  const [selectedFile, setSelectedFile] = useState();
  const [isSelected, setIsSelected] = useState(false);

  const changeHandler = (e) => {
    setSelectedFile(e.target.files[0]);
    setIsSelected(true);
  };

  return (
    <div>
      <label for="file-upload" className={style.fileInput}>
        {isSelected ? selectedFile.name : 'Choose a file...'}
      </label>
      <input
        type="file"
        name="file"
        id="file-upload"
        onChange={changeHandler}
      />
    </div>
  );
}
