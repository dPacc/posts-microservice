const express = require("express");
const cors = require("cors");

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

const posts = {};

//  Routes
app.get("/posts", (req, res) => {
  res.json(posts);
});

app.post("/events", (req, res) => {
  const { type, data } = req.body;

  if (type === "PostCreated") {
    const { id, title } = data;
    posts[id] = { id, title, comments: [] };
  }

  if (type === "CommentCreated") {
    const { id, postId, content, status } = data;
    const post = posts[postId];

    post.comments.push({ id, content, status });
  }

  console.log(posts);
  res.send({});
});

// Run the service
app.listen(4002, () => {
  console.log("Running on port 4002");
});
