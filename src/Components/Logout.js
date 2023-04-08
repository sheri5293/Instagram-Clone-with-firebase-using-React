import React from "react";
import { useHistory } from "react-router-dom";

const Logout = () => {
  const history = useHistory();

  history.push("/Login");

  return (
    <>
      <h1>hello </h1>
    </>
  );
};

export default Logout;
