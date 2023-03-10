import React from "react";
import { Link } from "react-router-dom";
import "./Register.css";

const Register = () => {
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const userName = form.userName.value;
    const userEmail = form.userEmail.value;
    const userPassword = form.userPassword.value;

    const userData = {
      userName,
      userEmail,
      userPassword,
    };
    fetch("https://atg-server-tau.vercel.app/registerUser", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          alert("User Created Successfully!");
        }
      });
  };
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/logIn">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </ul>
      </nav>
      <div className="register">
        <div>
          <h2>Register</h2>
          <form onSubmit={handleRegister}>
            <input type="text" name="userName" placeholder="User Name" />
            <br />
            <input type="email" name="userEmail" placeholder="User Email" />
            <br />
            <input
              type="password"
              name="userPassword"
              placeholder="User Password"
            />
            <br />
            <input type="submit" value="Register" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
