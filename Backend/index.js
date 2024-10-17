const express = require("express");
const app = express();
const config = require('config');
const mongoose = require('mongoose');

mongoose.connect(config.get('MONGODB_URI'));
app.use(express.json());
require("dotenv").config();
const PORT = process.env.PORT || 3000;
const cors = require("cors");
app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);


app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
