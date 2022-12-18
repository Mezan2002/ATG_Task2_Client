import React from "react";
import { Link } from "react-router-dom";
import "./ForgotPass.css";

const ForgotPass = () => {
  const handleRecoverPass = (e) => {
    e.preventDefault();
    const userName = e.target.userName.value;
    const newPass = e.target.newPass.value;
    const updatedPass = { newPass };
    fetch(
      `https://atg-server-tau.vercel.app/matchUserName?userName=${userName}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.userName) {
          fetch(`https://atg-server-tau.vercel.app/recoverPass/${userName}`, {
            method: "PATCH",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(updatedPass),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.modifiedCount === 1) {
                alert("Password Updated Successfully!");
              }
            });
        }
      })
      .catch((err) => {
        alert("Sorry Wrong User Name!");
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
