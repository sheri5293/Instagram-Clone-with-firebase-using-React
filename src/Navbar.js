import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

const Navbar = () => {
  const [click, setClick] = React.useState(false);

  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);
  return (
    <div>
      <div className={click ? "main-container" : ""} onClick={() => Close()} />
      <nav className="navbar" onClick={(e) => e.stopPropagation()}>
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            <img src="/images/instagramLogo.png" alt="" />
          </NavLink>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/AddPost"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                AddPost
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/Registration"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Registration
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/Login"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Login
              </NavLink>
            </li>
            {/* <li className="nav-item">
              <NavLink
                exact
                to="/Logout"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Logout
              </NavLink>
            </li> */}
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
