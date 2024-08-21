// In a file like AddPostForm.jsx
import React, { useState } from "react";
import axios from "axios";
import { URL } from "../url"; // Adjust the URL import

const AddPostForm = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [photo, setPhoto] = useState("");
  const [username, setUsername] = useState("");
  const [userId, setUserId] = useState("");
  const [categories, setCategories] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(URL + "/api/posts/", {
        title,
        desc,
        photo,
        username,
        userId,
        categories,
      });
      // Reset form or provide feedback
      setTitle("");
      setDesc("");
      setPhoto("");
      setUsername("");
      setUserId("");
      setCategories([]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Description"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      />
      <input
        type="text"
        placeholder="Image URL"
        value={photo}
        onChange={(e) => setPhoto(e.target.value)}
      />
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="text"
        placeholder="User ID"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />
      <input
        type="text"
        placeholder="Categories (comma separated)"
        value={categories}
        onChange={(e) => setCategories(e.target.value.split(","))}
      />
      <button type="submit">Add Post</button>
    </form>
  );
};

export default AddPostForm;
