import React, { useState } from 'react';

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [previewURL, setPreviewURL] = useState(null);

  const handleChange = (e) => {
    const selected = e.target.files[0];
    if (selected) {
      setFile(selected);
      setPreviewURL(URL.createObjectURL(selected));
    }
  };

  const handleRemove = () => {
    setFile(null);
    setPreviewURL(null);
  };

  return (
    <div className="container mt-5 text-center">
      <h4 className="mb-4">Upload and Preview Your File</h4>
      <input
        type="file"
        accept="image/*"
        onChange={handleChange}
        className="form-control mb-3 w-50 mx-auto"
      />

      {previewURL && (
        <div className="mt-4">
          <h5>Preview:</h5>
          <img
            src={previewURL}
            alt="Preview"
            className="img-thumbnail"
            style={{ maxWidth: '300px' }}
          />
          <br />
          <button className="btn btn-danger mt-3" onClick={handleRemove}>
            Remove File
          </button>
        </div>
      )}
    </div>
  );
};

export default FileUpload;
