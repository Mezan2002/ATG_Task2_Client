import React from "react";
import { useNavigate } from "react-router-dom";
import "./CreatePost.css";

const CreatePost = () => {
  const navigate = useNavigate();
  const handlePost = (e) => {
    e.preventDefault();
    const post = e.target.post.value;
    const postData = { post };
    fetch("http://localhost:5000/createPost", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(postData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          navigate("/");
          alert("Posted Successfully!");
        }
      });
  };
  return (
    <div className="createPost">
      <form onSubmit={handlePost}>
        <h2>Write a post</h2>
        <textarea name="post" id="" cols="50" rows="20"></textarea>
        <br />
        <input type="submit" value="Post" />
      </form>
    </div>
  );
};

export default CreatePost;
