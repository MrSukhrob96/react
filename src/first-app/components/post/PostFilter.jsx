import React, { Component } from "react";
import PostList from "./components/post/PostList";
import MyInput from "./components/UI/input/MyInput";
import MySelect from "./components/UI/select/MySelect";

export default function PostFilter() {
  return (
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
            onChange={(e) => setSearchQuery((prev) => (prev = e.target.value))}
          />
        </div>
      </div>
      <PostList posts={sortedAndSearchedPosts} remove={deletePost} />
    </>
  );
}
