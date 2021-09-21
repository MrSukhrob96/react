import React, { useState } from "react";
import MyInput from "../UI/input/MyInput";
import MyButton from "../UI/button/MyButton";

const PostForm = ({ create }) => {
  const [post, setPost] = useState({ title: "", description: "" });

  const addNewPostHandle = (e) => {
    e.preventDefault();
    create(post)
    setPost({ title: "", description: "" });
  };

  return (
    <form className="post__form" onSubmit={addNewPostHandle}>
      <div className="post__form_content">
        <div className="form__content_item">
          <MyInput
            type="text"
            placeholder="Title post"
            value={post.title}
            onChange={(e) =>
              setPost((prev) => ({ ...prev, title: e.target.value }))
            }
          />
        </div>
        <div className="form__content_item">
          <MyInput
            type="text"
            placeholder="Description post"
            value={post.description}
            onChange={(e) =>
              setPost((prev) => ({ ...prev, description: e.target.value }))
            }
          />
        </div>
        <div className="form__content_item">
          <MyButton>Create Post</MyButton>
        </div>
      </div>
    </form>
  );
};

export default PostForm;
