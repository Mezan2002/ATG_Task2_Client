import React from "react";

const Login = () => {
  const handleLogIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const userName = form.userName.value;
    const userPassword = form.userPassword.value;
    console.log(userName, userPassword);
  };
  return (
    <div>
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
