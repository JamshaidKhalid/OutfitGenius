const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");
const authRoutes = require("./routes/authRoutes");
const imageRoutes = require("./routes/imageRoutes");
const connectDB = require("./connection/mongoDB");
const fs = require("fs");
const path = require("path");

require("dotenv").config();

connectDB();

// middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("uploads"));
// routes

app.get("/", (req, res) => {
  // finds the directory and stores it
  const uploadsDirectory = path.join("uploads");
  // reads the files in the directory
  fs.readdir(uploadsDirectory, (err, files) => {
    if (err) {
      return res.json({ msg: err });
    }
    if (files.length === 0) {
      return res.json({ msg: "No Images Uploaded!" });
    }
    return res.json({ files });
  });
});

app.use("/users", userRoutes);
app.use("/auth", authRoutes);
app.use("/image", imageRoutes);

app.listen(process.env.PORT, () => {
  console.log("server is running on port 3000");
});
