import React from "react";
import "../../public/assets/css/onPages.css";
import logo from "../../public/assets/images/logo.png"
import profilePic from "../../public/assets/images/Rick.png"
import popularPic from "../../public/assets/images/popular.png"
import Navigation from "../components/Navigation";
import GetProfile from "../components/getProfileDetails";

const profile = {
    username: "Ricky117",
    fullName: "Rick Astley",
    bio: "Never gonna give you up",
    achievements: [
        { rank: "2", achievements: "Highest Rated Playlist" },
        { rank: "7", achievements: "Most Followed" }
    ],
    followers: {
        username: "JackySparrow"
    },
    following: {
        username: "JackySparrow"
    },
    playlists: [
        { rank: 1, name: "Gave You Up", image:popularPic, songs:[
            { rank: 1, title: "Never Gonna Give You Up", artist: "Rick Astley" },
            { rank: 2, title: "Blinding Lights", artist: "Justin Bieber" },
            { rank: 3, title: "Never Really Over", artist: "Katy Perry" },
        ]},
        { rank: 2, name: "RapCaviar", image: "path/to/rap_caviar.jpg" },
        { rank: 3, name: "Today's Top Hits", image: "path/to/todays_top_hits.jpg" },
        { rank: 4, name: "Rock Classics", image: "path/to/rock_classics.jpg" },
        { rank: 5, name: "Chill Hits", image: "path/to/chill_hits.jpg" }
    ],
    image: profilePic
};

class Profile extends React.Component {
    render() {
        return (
            <div id="Profile">
                <div id="profileLogo">
                    <header>
                        <Navigation />
                    </header>
                    <img src={logo} alt="logo" />
                </div>
                <img alt="Back" />
                <GetProfile profile={profile} />
            </div>
        );
    }
}

export default Profile;