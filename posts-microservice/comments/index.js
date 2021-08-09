const express = require("express");
const { randomBytes } = require("crypto");
const cors = require("cors");
const axios = require("axios");

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());
// Store posts in memory instead of a database
const commentsByPostId = {};

app.get("/posts/:id/comments", (req, res) => {
  res.json(commentsByPostId[req.params.id] || []);
});

app.post("/posts/:id/comments", async (req, res) => {
  const commentId = randomBytes(4).toString("hex");
  // Save the title of post to the posts object
  const { content } = req.body;

  const comments = commentsByPostId[req.params.id] || [];

  comments.push({
    id: commentId,
    content,
  });

  commentsByPostId[req.params.id] = comments;

  // Post the comment create event to the event bus
  await axios.post("http://localhost:4005/events/", {
    type: "CommentCreated",
    data: {
      id: commentId,
      content,
      postId: req.params.id,
    },
  });

  res.json(comments);
});

app.post("/events", (req, res) => {
  console.log("Received event", req.body.type);

  res.send({});
});

app.listen(4001, () => {
  console.log("Listening on 4001");
});
