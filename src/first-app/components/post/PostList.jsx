import React from "react";
import PostItem from "./PostItem";
import "./post.css";

export default function PostList({ posts, remove}) {
  return (
    <div className="post__container container">
      <div className="post_items">
        {posts.map((item, index) => {
          return <PostItem remove={remove} posts={item} key={index} />;
        })}
      </div>
    </div>
  );
}
