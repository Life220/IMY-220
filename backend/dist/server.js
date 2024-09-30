"use strict";

var express = require("express");
var path = require("path");
var _require = require("mongodb"),
  MongoClient = _require.MongoClient;
var app = express();
var PORT = process.env.PORT || 3000;
var connectionString = "mongodb+srv://u23526387:dhmIRGzw3g67TvfP@cluster0.edm30.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Parse JSON bodies (middleware)
app.use(express.json());

// Server static
app.use(express["static"](path.join(__dirname, "../../frontend", "public")));

// Connect to MongoDB
var db;
MongoClient.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(function (client) {
  db = client.db("RecordShare");
})["catch"](function (error) {
  return console.error(error);
});

// API

// Get user details
app.get("/api/user/:username", function (req, res) {
  var username = req.params.username;
  db.collection("user").findOne({
    username: username
  }).then(function (user) {
    if (user) {
      res.json(user);
    } else {
      res.status(404).send("Profile not found for: " + username);
    }
  })["catch"](function (error) {
    return res.status(500).send(error);
  });
});

// Get playlists
app.get("/api/playlists", function (req, res) {
  db.collection("playlists").find().toArray().then(function (playlists) {
    return res.json(playlists);
  })["catch"](function (error) {
    return res.status(500).send(error);
  });
});

// Route to frontend
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "../../frontend", "public", "index.html"));
});

// Start server
app.listen(PORT, function () {
  console.log("Server is running on http://localhost:".concat(PORT));
});