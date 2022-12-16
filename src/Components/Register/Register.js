import React from "react";

const Register = () => {
  return (
    <div>
      <h2>Register</h2>
      <input type="text" placeholder="User Name" />
      <br />
      <input type="email" placeholder="User Email" />
      <br />
      <input type="password" placeholder="User Password" />
      <br />
      <input type="submit" value="Register" />
    </div>
  );
};

export default Register;
