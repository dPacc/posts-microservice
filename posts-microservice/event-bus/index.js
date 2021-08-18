const express = require("express");
const axios = require("axios");

const app = express();

// Middlewares
app.use(express.json());

const events = [];

app.post("/events", (req, res) => {
  const event = req.body;

  events.push(event);

  axios.post("http://posts-clusterip-service:4000/events", event);
  axios.post("http://comments-clusterip-service:4001/events", event);
  axios.post("http://query-clusterip-service:4002/events", event);
  axios.post("http://moderation-clusterip-service:4003/events", event);

  res.send({ status: "OK" });
});

app.get("/events", (req, res) => {
  res.send(events);
});

app.listen(4005, () => {
  console.log("Listening on 4005");
});
