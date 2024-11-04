import React from "react";
import "../../public/assets/css/main.css";
import Navigation from "../components/Navigation";
import { TopPlaylists, TopSongs } from "../components/Tops";

class Main extends React.Component
{
  render()
  {
    return (
      <div>
        <header>
          <Navigation />
        </header>
        
        <div className="text-center my-8">
          <h3 className="text-lg text-text">Search:</h3>
          <input
            type="text"
            placeholder="Rick Astley..."
            className="mt-2 p-2 w-4/5 max-w-md border border-highlight rounded"
          />
        </div>

        <h1 className="text-center text-2xl font-bold text-text mb-8">Discover</h1>
        <div className="flex flex-col justify-around items-start mx-4 p-4 bg-black bg-opacity-75 rounded-lg shadow">
          <div className="flex-1 mx-2 text-center">
            <h3 className="text-xl font-semibold mb-4 text-accent">Top Playlists</h3>
            <TopPlaylists />
          </div>
          <div className="flex-1 mx-2 text-center">
            <h3 className="text-xl font-semibold mb-4 text-accent">Top Songs</h3>
            <TopSongs />
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
