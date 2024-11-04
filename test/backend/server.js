const express = require("express");
const path = require("path");
const bcrypt = require("bcrypt");
const multer = require("multer");
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

// Login endpoint
app.post("/api/login", async (req, res) => {
  const { username, password } = req.body;

  try
  {
    const user = await db.collection("user").findOne({ username: username });
    if (user)
    {
      if (await bcrypt.compare(password, user.password))
        res.json({ message: "Login successful", userId: user._id });
      else
        res.json("Incorrect password");
    }
    else
    {
      res.json("Username not found");
    }
  }
  catch (error)
  {
    res.status(500).send(error);
  }
});

// Register endpoint
app.post("/api/register", async (req, res) => {
  const { username, password, bio, email } = req.body;
  const image = req.file;

  try
  {
    const encryptedPass = await bcrypt.hash(password, 10);

    const newUser = {
      username,
      password: encryptedPass,
      bio,
      image: image ? image.path : "",
      email: email,
      joined: new Date(),
      achievements: [],
      followers: [],
      following: [],
      "liked-playlists": [],
      "liked-songs": []
    };

    await db.collection("user").insertOne(newUser);

    res.json({ message: "Registration successful" });
  }
  catch (error)
  {
    res.status(500).send(error);
  }
});

// Get user details
app.get("/api/user/:username", (req, res) => {
  const username = req.params.username;

  db.collection("user").findOne({ username: username })
    .then(user => {
      if (user)
      {
        res.json(user);
      }
      else
      {
        res.json("User not found");
      }
    })
    .catch(error => res.status(500).send(error));
})

// Get song
app.get("/api/song/:songID", (req, res) => {
  const songID = req.params.songID;

  db.collection("Song").findOne({ _id: songID })
    .then(song => {
      if (song)
      {
        res.json(song);
      }
      else
      {
        res.json("Song not found");
      }
    })
    .catch(error => res.status(500).send(error));
})

// Get all songs
app.get("/api/songs", (req, res) => {
  db.collection("Song").find().toArray()
    .then(songs => res.json(songs))
    .catch(error => res.status(500).send(error));
});

// Get playlists
app.get("/api/playlists", (req, res) => {
  db.collection("playlists").find().toArray()
    .then(playlists => res.json(playlists))
    .catch(error => res.status(500).send(error));
});

// Add song
app.post("/api/addsong", async (req, res) => {
  const { title, creator, realeaseDate, lyrics } = req.body;
  const image = req.file;

  try
  {
    const newSong = {
      title,
      creator,
      realeaseDate,
      lyrics,
      likes: 0,
      image: image ? image.path : "",
      achievements: [],
      comments: [],
      playlists: []
    };

    await db.collection("Song").insertOne(newSong);

    res.json({ message: "New song addition successful" });
  }
  catch (error)
  {
    res.status(500).send(error);
  }
});

// Add playlist
app.post("/api/addplaylist", async (req, res) => {
  const { title, creator, created, description, songs } = req.body;
  const image = req.file;

  try
  {
    const newplaylist = {
      title,
      creator,
      created,
      likes: 0,
      image: image ? image.path : "",
      achievements: [],
      comments: [],
      description
    };

    await db.collection("playlist").insertOne(newplaylist);

    res.json({ message: "New playlist addition successful" });
  }
  catch (error)
  {
    res.status(500).send(error);
  }
});

// Search songs
app.get("/api/searchsongs", async (req, res) => {
  const { query } = req.query;

  try
  {
    const songs = await db.collection("Song").find({ title: { $regex: query, $options: "i" } }).toArray();
    res.json({ songs });
  }
  catch (error)
  {
    console.error("There was a problem with searching for songs: ", error);
    res.status(500).send({ error: "Failed to search for songs" });
  }
});

// Route to frontend
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../../frontend", "public", "index.html"));
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
