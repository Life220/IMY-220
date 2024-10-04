import React from "react";
import "../../public/assets/css/onPages.css";
import Navigation from "../components/Navigation";
import SongList from "../components/SongsList";
import GetPlaylist from "../components/GetPlaylist";

class Playlist extends React.Component
{
    render()
    {
        return (
            <div>
                <header>
                    <Navigation />
                </header>
                <div id="onPages">
                    <img alt="logo"/>
                    <img alt="Back" />
                    <GetPlaylist />
                    <div>
                        <SongList />
                    </div>
                </div>
            </div>
        );
    }
}

export default Playlist;