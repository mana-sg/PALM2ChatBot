const express = require("express");
const cors = require("cors");
const colors = require("colors");
const dotenv = require("dotenv");

dotenv.config();
const app = express();
app.use(express.json());

app.use("/", (req, res) => {
  res.send("API is running");
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, console.log(`Port is running on port: ${PORT}`.yellow.bold));
