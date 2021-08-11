const express = require("express");
const axios = require("axios");

const app = express();

// Middleware
app.use(express.json());

// Routes
app.post("/events", async (req, res) => {
  const { type, data } = req.body;

  if (type === "CommentCreated") {
    const status = data.content.includes("orange") ? "rejected" : "approved";

    await axios.post("http://localhost:4005/events", {
      type: "CommentModerated",
      data: {
        id: data.id,
        content: data.content,
        postId: data.postId,
        status,
      },
    });
  }

  res.send({});
});

// Start server
app.listen(4003, () => {
  console.log("Listening on port 4003");
});
