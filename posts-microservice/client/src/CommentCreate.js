import React, { useState } from "react";
import axios from "axios";

const CommentCreate = ({ postId }) => {
  const [comment, setComment] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios
      .post(`http://posts.com/posts/${postId}/comments`, {
        content: comment,
      })
      .then((res) => {
        console.log(res.data);
        setComment("");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="form-group">
          <label>New Comment</label>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="form-control"
            rows="3"
            placeholder="Comment"
          />
        </div>
        <button className="btn btn-primary" type="submit">
          Post Comment
        </button>
      </form>
    </div>
  );
};

export default CommentCreate;
