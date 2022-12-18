import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Posts.css";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://atg-server-tau.vercel.app/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);
  const handleLike = (id) => {
    const likeComment = { like: "Liked", comment: "Commneted", id };
    fetch(`https://atg-server-tau.vercel.app/like&comment`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(likeComment),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  const handleDelete = (id) => {
    const proceed = window.confirm("Are you want to delete this post?");
    if (proceed) {
      fetch(`https://atg-server-tau.vercel.app/delete/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
        });
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
      <div className="postHome">
        <div>
          <button>
            <Link to="/createPost">Write a post</Link>
          </button>
          <h2>Posts</h2>
          <div>
            {posts.map((post) => (
              <div key={post._id} className="postCard">
                <h5>{post.post}</h5>
                <div>
                  {post.like === "liked&commented" ? (
                    <button disabled className="likedBtn">
                      Liked & Commented
                    </button>
                  ) : (
                    <button onClick={() => handleLike(post._id)}>
                      Like & Comment
                    </button>
                  )}
                  <button>
                    <Link to={`/updatePost/${post._id}`}>Edit</Link>
                  </button>
                  <button onClick={() => handleDelete(post._id)}>Delete</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Posts;
