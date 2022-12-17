import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Posts.css";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);
  const handleLike = (id) => {
    fetch(`http://localhost:5000/like/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  const handleDelete = (id) => {
    const proceed = window.confirm("Are you want to delete this post?");
    if (proceed) {
      fetch(`http://localhost:5000/delete/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {});
    }
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
      <button>
        <Link to="/createPost">Write a post</Link>
      </button>
      <h2>Posts</h2>
      <div>
        {posts.map((post) => (
          <div key={post._id} className="postCard">
            <h5>{post.post}</h5>
            <button onClick={() => handleLike(post._id)}>
              {post.like === "liked" ? (
                <span className="likeBtn">Liked</span>
              ) : (
                <span>Like</span>
              )}
            </button>
            <button>Comment</button>
            <button>Edit</button>
            <button onClick={() => handleDelete(post._id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;
