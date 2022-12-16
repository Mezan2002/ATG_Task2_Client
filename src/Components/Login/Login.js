import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const handleLogIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const userName = form.userName.value;
    const userPassword = form.userPassword.value;
    fetch(
      `http://localhost:5000/loggedInUser?userName=${userName}&userPassword=${userPassword}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data._id) {
          alert("Login Successfull!");
        }
      })
      .then((err) => {
        alert("Login Failed!");
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
      <h2>Login</h2>
      <form onSubmit={handleLogIn}>
        <input type="text" name="userName" placeholder="User Name" />
        <br />
        <input
          type="password"
          name="userPassword"
          placeholder="User Password"
        />
        <br />
        <input type="submit" value="Log In" />
      </form>
    </div>
  );
};

export default Login;
