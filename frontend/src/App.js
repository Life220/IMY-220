import React from "react";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter as Router, Link } from "react-router-dom";

import Main from "./pages/Main";
import Login from "./pages/Login";
import Playlist from "./pages/Playlist";
import Profile from "./pages/Profile";

class App extends React.Component
{
  render()
  {
    return (
      <div id="Main">
        <Router>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/login" element={<Login />} />
            <Route path="/playlist" element={<Playlist />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </Router>
        <footer>
          Pause/Play
        </footer>
      </div>
    );
  }
}

export default App;