import axios from "axios";
import React, { useEffect, useState } from "react";
import CommentList from "./CommentList";
import CommentsCreate from "./CommentsCreate";

const PostList = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const res = await axios.get("http://localhost:4002/posts");

    setPosts(res.data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const renderedPosts = Object.values(posts).map((post) => {
    return (
      <div
        className="card"
        styles={{ width: "30%", marginBottom: "20px" }}
        key={posts.id}
      >
        <div className="card-body">
          <h3>{post.title}</h3>
          <CommentsCreate comments={post.comments} />
          <CommentList postId={post.id} />
        </div>
      </div>
    );
  });
  return (
    <div className="d-flex flex-row flex-wrap justify-content-between">
      {renderedPosts}
    </div>
  );
};

export default PostList;
