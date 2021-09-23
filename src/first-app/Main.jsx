import React, { useState, useMemo } from "react";
import PostFilter from "./components/post/PostFilter";
import PostForm from "./components/post/PostForm";
import "./index.css";

export default function Main() {
  const [posts, setPost] = useState([]);
  const [selectedSort, setSelectedSort] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const sortedPosts = useMemo(() => {
    if (selectedSort) {
      return [...posts].sort((a, b) =>
        a[selectedSort].localeCompare(b[selectedSort])
      );
    }
    return posts;
  }, [selectedSort, posts]);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter((item) =>
      item.title.toLowerCase().includes(searchQuery)
    );
  }, [searchQuery, sortedPosts]);

  const createPost = (newPost) => {
    if (!newPost.description && !newPost.title) {
      return;
    }

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
        {sortedAndSearchedPosts.length > 0 ? <PostFilter /> : <h3>empty</h3>}
      </div>
    </div>
  );
}
