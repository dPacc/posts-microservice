const express = require("express");
const axios = require("axios");

const app = express();

// Middlewares
app.use(express.json());

// Run the server
app.listen(4003, () => {
  console.log("Server running on port 4003");
});
