import React, { useState } from "react";
import { NavLink, Row } from "react-bootstrap";

const FileUpload = () => {
  const [selectedImages, setSelectedImages] = useState([]);
  const onSelectFile = (e) => {
    const selectedFiles = e.target.files;
    const selectedFilesArray = Array.from(selectedFiles);
    const imageArray = selectedFilesArray.map((file) => {
      return URL.createObjectURL(file);
    });
    setSelectedImages(imageArray);
  };
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <label></label>

      <input
        type="file"
        name="images"
        onChange={onSelectFile}
        multiple
        accept="image/png , image/jpeg"
      />
      <div className="upload-image ">
        {selectedImages &&
          selectedImages.map((image, index) => {
            return (
              <div key={image} className="p-2">
                <Row>
                  <img src={image} alt="images" className="w-100" />
                  <br />
                </Row>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default FileUpload;
