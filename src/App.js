import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import AddPost from "./Components/AddPost";
import Registration from "./Components/Registration";
import Login from "./Components/Login";
import Error404 from "./Components/Error404";
import Logout from "./Components/Logout";
import "bootstrap/dist/css/bootstrap.css";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/AddPost" element={<AddPost />}></Route>
        <Route path="/Registration" element={<Registration />}></Route>
        {/* <Route path="/Logout" element={<Logout />}></Route> */}
        <Route path="/Login" element={<Login />}></Route>
      </Routes>
    </>
  );
};

export default App;
