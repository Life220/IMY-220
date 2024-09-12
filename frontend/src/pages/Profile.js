import React from "react";
import "../../public/assets/css/onPages.css";
import Navigation from "../components/Navigation";
import SongList from "../components/songsList";
import GetPlaylist from "../components/getPlaylist";

class Profile extends React.Component
{
    render()
    {
        return (
            <div>
                <Navigation />
                <div id="onPages">
                    <img alt="logo"/>
                    <img alt="Back" />
                    <GetProfile />
                    <div>
                        <GetPlaylists />
                    </div>
                </div>
            </div>
        );
    }
}

export default Profile;