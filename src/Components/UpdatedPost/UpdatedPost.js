import React from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";

const UpdatedPost = () => {
  const navigate = useNavigate();
  const postOfUpdate = useLoaderData();
  const handleUpdatePost = (e) => {
    e.preventDefault();
    const updatedPost = e.target.updatedPost.value;
    const postUpdated = { updatedPost };
    fetch(`http://localhost:5000/postUpdated/${postOfUpdate._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(postUpdated),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount === 1) {
          alert("Post Updated!");
          navigate("/");
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
      <div className="post">
        <form onSubmit={handleUpdatePost}>
          <h2>Update Post</h2>
          <textarea
            name="updatedPost"
            defaultValue={postOfUpdate.post}
            cols="50"
            rows="20"
          ></textarea>
          <br />
          <input type="submit" value="Update Post" />
        </form>
      </div>
    </div>
  );
};

export default UpdatedPost;
