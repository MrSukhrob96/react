import React, { useState, useMemo } from "react";
import PostForm from "./components/post/PostForm";
import PostList from "./components/post/PostList";
import MyInput from "./components/UI/input/MyInput";
import MySelect from "./components/UI/select/MySelect";
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
    return sortedPosts.filter((item) => item.title.includes(searchQuery));
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

  const sortPosts = (sort) => {
    setSelectedSort(sort);
  };

  return (
    <div className="wrapper">
      <PostForm create={createPost} />
      <div style={{ padding: "20px" }}>
        {posts.length > 0 ? (
          <>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <MySelect
                options={[
                  { value: "title", name: "By title post" },
                  { value: "description", name: "By description post" },
                ]}
                defaultValue="Sort By"
                value={selectedSort}
                onChange={sortPosts}
              />
              <div style={{ width: "400px" }}>
                <MyInput
                  type="text"
                  value={searchQuery}
                  placeholder="Search...."
                  onChange={(e) =>
                    setSearchQuery((prev) => (prev = e.target.value))
                  }
                />
              </div>
            </div>
            <PostList posts={sortedAndSearchedPosts} remove={deletePost} />
          </>
        ) : (
          <h3>empty</h3>
        )}
      </div>
    </div>
  );
}
