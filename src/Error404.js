import React from "react";
import notfound from "../Images/1-10.png";
const Error404 = () => {
  return (
    <img
      src={notfound}
      alt="error"
      style={{
        width: "50%",
        margin: "90px 0 0 30%",
        height: "400%",
      }}
    /> //top bottom left right//
  );
};

export default Error404;
