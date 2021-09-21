import React from "react";
import MyButton from "../UI/button/MyButton";
import "./post.css";

export default function PostItem(props) {
  return (
    <div className="post__item item">
      <div className="post_content">
        <p>{props.posts.title}</p>
        <br />
        <i>{props.posts.description}</i>
      </div>
      <div className="post_action">
        <MyButton onClick={()=> props.remove(props.posts)}>Delete</MyButton>
      </div>
    </div>
  );
}
