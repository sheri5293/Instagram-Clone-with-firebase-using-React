import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Login.css";

const Registration = () => {
  const navigate = useNavigate();
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
    navigate("/Login");
  };

  return (
    <>
      <div className="relo">
        <div className="content">
          <h1 className="text" style={{ color: "rgb(158, 14, 115)" }}>
            Instagram
          </h1>
          <p style={{ color: "rgb(158, 14, 115)" }}>
            Sign up to see photos and videos from your friends.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="field">
              <label htmlFor="username" className="hello"></label>

              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Username , Phone Number"
              />
            </div>

            <div className="field">
              <label htmlFor="email" className="hello"></label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Email"
              />
            </div>

            <div className="field">
              <label htmlFor="password" className="hello"></label>
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
