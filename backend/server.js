const express = require("express");
const path = require("path");
const { MongoClient } = require("mongodb");
const app = express();
const PORT = process.env.PORT || 3000;

const connectionString = "mongodb+srv://u23526387:dhmIRGzw3g67TvfP@cluster0.edm30.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Parse JSON bodies (middleware)
app.use(express.json());

// Server static
app.use(express.static(path.join(__dirname, "../../frontend", "public")));

// Connect to MongoDB
let db;

MongoClient.connect(connectionString, {useNewUrlParser: true, useUnifiedTopology: true })
  .then(client => {
    db = client.db("RecordShare");
  })
  .catch(error => console.error(error));

// API

// Get user details
app.get("/api/user/:username", (req, res) => {
  const username = req.params.username;
  db.collection("user").findOne({ username: username })
    .then(user => {
      if (user) {
        res.json(user);
      } else {
        res.status(404).send("Profile not found for: " + username);
      }
    })
    .catch(error => res.status(500).send(error));
})

// Get playlists
app.get("/api/playlists", (req, res) => {
  db.collection("playlists").find().toArray()
    .then(playlists => res.json(playlists))
    .catch(error => res.status(500).send(error));
});

// Route to frontend
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../../frontend", "public", "index.html"));
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
