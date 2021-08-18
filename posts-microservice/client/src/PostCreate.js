import React, { useState } from "react";
import axios from "axios";
const PostCreate = () => {
  const [title, setTitle] = useState("");

  // Handle post submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post("http://posts.com/posts/create", { title })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    setTitle("");
  };

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            className="form-control"
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default PostCreate;
