import { React, useState } from "react";
import { useHistory } from "react-router-dom";
import "../Login.css";

const Registration = () => {
  const history = useHistory();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { name, email, password };

    localStorage.setItem("user", JSON.stringify(user));
    setName("");
    setEmail("");
    setPassword("");
    history.push("/Login");
  };

  return (
    <>
      <div className="relo">
        <div className="content">
          <div className="text">Sign Up</div>
          <form onSubmit={handleSubmit}>
            <div className="field">
              <label htmlFor="username" className="hello">
                Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Name"
              />
            </div>

            <div className="field">
              <label htmlFor="email" className="hello">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Email"
              />
            </div>

            <div className="field">
              <label htmlFor="password" className="hello">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="password"
              />
            </div>

            <button>Sign Up</button>

            <div className="foot">
              <a>Already have an account?</a>
              <a href="./Login" className="in">
                Sign In
              </a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Registration;
