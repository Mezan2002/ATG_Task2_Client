import React from "react";
import { Link } from "react-router-dom";
import "./ForgotPass.css";

const ForgotPass = () => {
  const handleRecoverPass = (e) => {
    e.preventDefault();
    const userName = e.target.userName.value;
    const newPass = e.target.newPass.value;
    const updatedPass = { newPass };
    fetch(`http://localhost:5000/matchUserName?userName=${userName}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.userName);
        if (data.userName) {
          fetch(`http://localhost:5000/recoverPass/${userName}`, {
            method: "PATCH",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(updatedPass),
          })
            .then((res) => res.json())
            .then((data) => console.log(data));
          console.log("Hello");
        }
      })
      .catch((err) => console.log(err));
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
      <div className="forgotPass">
        <div>
          <h2>Recover Password</h2>
          <form onSubmit={handleRecoverPass}>
            <input
              type="text"
              name="userName"
              placeholder="Enter Your User Name"
            />
            <br />
            <input
              type="text"
              name="newPass"
              placeholder="Enter Your New Password"
            />
            <br />
            <input type="submit" value="Recover" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPass;
