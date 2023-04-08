import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
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
      <Switch>
        <Route exact path="/">
          <AddPost />
        </Route>
        <Route path="/registration">
          <Registration />
        </Route>
        <Route path="/Logout">
          <Logout />
        </Route>
        <Route path="/Login">
          <Login />
        </Route>

        <Route>
          <Error404 />
        </Route>
      </Switch>
    </>
  );
};

export default App;
