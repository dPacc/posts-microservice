const express = require("express");
const { randomBytes } = require("crypto");
const cors = require("cors");

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());
// Store posts in memory instead of a database
const commentsByPostId = {};

app.get("/posts/:id/comments", (req, res) => {
  res.json(commentsByPostId[req.params.id] || []);
});

app.post("/posts/:id/comments", (req, res) => {
  const commentId = randomBytes(4).toString("hex");
  // Save the title of post to the posts object
  const { content } = req.body;

  const comments = commentsByPostId[req.params.id] || [];

  comments.push({
    id: commentId,
    content,
  });

  commentsByPostId[req.params.id] = comments;

  res.json(comments);
});

app.listen(4001, () => {
  console.log("Listening on 4001");
});
