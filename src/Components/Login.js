import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "../Login.css";

const Login = () => {
  const history = useHistory();
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const storedUsername = localStorage.getItem("email");
    const storedPassword = localStorage.getItem("password");
    if (storedUsername && storedPassword) {
      setemail(storedUsername);
      setPassword(storedPassword);
      setLoggedIn(true);
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    // Perform authentication logic here
    const authenticated = true;
    if (authenticated) {
      localStorage.setItem("email", email);
      localStorage.setItem("password", password);
      setLoggedIn(true);
      history.push("/AddPost");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    setLoggedIn(false);
  };

  if (loggedIn) {
    return (
      <div>
        <p>You are logged in as {email}</p>
        <button onClick={handleLogout}>Logout</button>
      </div>
    );
  }
  return (
    <>
      <div className="relo">
        <div class="content">
          <div class="text">Login</div>
          <form onSubmit={handleLogin}>
            <div class="field">
              <label htmlFor="email" className="hello">
                Email
              </label>
              <input
                type="email"
                autoComplete="off"
                value={email}
                onChange={(e) => setemail(e.target.value)}
                id="email"
                placeholder="Email"
                required
              />
            </div>

            <div class="field">
              <label htmlFor="password" className="hello">
                password
              </label>
              <input
                type="password"
                autoComplete="off"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                name="password"
                id="password"
                placeholder="Password"
                required
              />
            </div>

            <button>Login</button>

            <div class="foot">
              <a>Already have an account?</a>
              <a href="/Registration" class="in">
                Sign Up
              </a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
