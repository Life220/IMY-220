import React from "react";
import "../../public/assets/css/main.css";
import Navigation from "../components/Navigation";
import { TopArtists, TopPlaylists, TopSongs } from "../components/Tops";

class Main extends React.Component
{
  render()
  {
    return (
      <div>
          <Navigation />
        <div id="searchButton">
          <h3>Search:</h3>
          <input type="text" placeholder="Rick Astley..."></input>
        </div>
        <h1>Discover</h1>
        <div id="DiscoverTops">
          <h3>Top Artists</h3>
          <TopArtists />
          <h3>Top Playlists</h3>
          <TopPlaylists />
          <h3>Top Songs</h3>
          <TopSongs />
        </div>
      </div>
    );
  }
}

export default Main;
