const express = require("express");
const { randomBytes } = require("crypto");
const cors = require("cors");

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());
// Store posts in memory instead of a database
const posts = {};

app.get("/posts", (req, res) => {
  res.json(posts);
});

app.post("/posts", (req, res) => {
  const id = randomBytes(4).toString("hex");
  // Save the title of post to the posts object
  const { title } = req.body;

  posts[id] = {
    id,
    title,
  };

  res.json(posts[id]);
});

app.listen(4000, () => {
  console.log("Listening on 4000");
});
