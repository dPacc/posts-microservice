const express = require("express");
const axios = require("axios");

const app = express();

// Middlewares
app.use(express.json());

// Route
app.post("/events", (req, res) => {
  const event = req.body;

  axios.post("http://localhost:4000/events", event);
  axios.post("http://localhost:4001/events", event);
  axios.post("http://localhost:4002/events", event);

  res.send({ status: "OK" });
});

// Run the server
app.listen(4005, () => {
  console.log("Server running on port 4005");
});
