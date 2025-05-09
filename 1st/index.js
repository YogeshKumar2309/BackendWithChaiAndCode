const express = require("express");
const { DB_NAME } = require("./constants.js");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    console.log("Connected to MongoDB");
    app.on("error", (err) => {
      console.error("Error occurred:", err);
    });
    app.listen(process.env.PORT, () => {
      console.log(
        `Server is running on port: http://localhost:${process.env.PORT}`
      );
    });
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
})();
