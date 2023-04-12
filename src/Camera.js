import React, { useRef, useState } from "react";
import Webcam from "react-webcam";

const Camera = () => {
  const webcamRef = useRef(null);
  const [image, setImage] = useState(false);

  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    localStorage.setItem("imageData", image);
    setImage(imageSrc);
  };

  // const storeImage = () => {
  //   localStorage.setItem("imageData", image);
  // };
  return (
    <>
      <div>
        <div>
          {image ? (
            <img src={image} />
          ) : (
            <i className="fas fa-camera fa-2x" onClick={capture} />
          )}
        </div>
        <div>
          <Webcam
            audio={false}
            mirrored={true}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            style={{ width: "30%", height: "20%" }}
          />
        </div>
      </div>
    </>
  );
};

export default Camera;
