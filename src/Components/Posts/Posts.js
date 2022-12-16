import React from "react";
import { Link } from "react-router-dom";

const Posts = () => {
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
      <h2>Posts</h2>
      <button>Write a post</button>
    </div>
  );
};

export default Posts;
