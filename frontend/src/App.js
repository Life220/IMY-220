import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "../public/assets/css/tailwind.css";

import Main from "./pages/Main";
import Login from "./pages/Login";
import Playlist from "./pages/Playlist";
import Profile from "./pages/Profile";
import Song from "./pages/Song";
import AddSong from "./pages/AddSong"
import addplaylist from "./pages/AddPlaylist"
import PrivateRoute from "./components/PrivateRoute";

class App extends React.Component
{
  render()
  {
    const username = localStorage.getItem("username");

    return (
      <div id="Main">
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/main" element={<PrivateRoute element={Main} />} />
            <Route path="/playlist" element={<PrivateRoute element={Playlist} />} />
            <Route path="/song/:id" element={<PrivateRoute element={Song} />} />
            <Route path="/addsong" element={<PrivateRoute element={AddSong} />} />
            <Route path="/addplaylist" element={<PrivateRoute element={addplaylist} />} />
            <Route path="/profile" element={<PrivateRoute element={Profile} />} />
          </Routes>
        </Router>
        <footer>
          {username}
        </footer>
      </div>
    );
  }
}

export default App;