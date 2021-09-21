import React, { useState } from "react";
import PostForm from "./components/post/PostForm";
import PostList from "./components/post/PostList";
import MySelect from "./components/UI/select/MySelect";
import "./index.css";

export default function Main() {
  const [posts, setPost] = useState([]);

  const createPost = (newPost) => {
    setPost((prev) => [...prev, newPost]);
  };

  const deletePost = (post) => {
    const newPost = posts.filter((item) => {
      return item !== post;
    });

    setPost((prev) => (prev = newPost));
  };

  return (
    <div className="wrapper">
      <PostForm create={createPost} />
      <div style={{ padding: "20px" }}>
        {posts.length > 0 ? (
          <>
            <div>
              <MySelect
                options={[
                  {
                    value: "",
                    name: "0",
                  },
                  {
                    name: "",
                    name: "1",
                  },
                ]}
                defaultValue=""
              />
            </div>
            <PostList posts={posts} remove={deletePost} />
          </>
        ) : (
          <h3>empty</h3>
        )}
      </div>
    </div>
  );
}
