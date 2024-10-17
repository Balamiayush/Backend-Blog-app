const mongoose = require("mongoose");
const config = require("config");
// const dbgr = require('debug')("development:mongoose")
let MONGODB_URI = config.get("MONGODB_URI");

mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    dbgr("Connected to MongoDB");
  })
  .catch((err) => {
    dbgr("Failed to connect to MongoDB:", err);
  });

module.exports = mongoose.connection;