import React from "react";

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
        { rank: 1, name: "Gave You Up", image:"path/to/top_50_global.jpg", songs:[
            { rank: 1, title: "Never Gonna Give You Up", artist: "Rick Astley" },
            { rank: 1, title: "Blinding Lights", artist: "Justin Bieber" },
            { rank: 1, title: "Never Really Over", artist: "Katy Perry" },
        ]},
        { rank: 2, name: "RapCaviar", image: "path/to/rap_caviar.jpg" },
        { rank: 3, name: "Today's Top Hits", image: "path/to/todays_top_hits.jpg" },
        { rank: 4, name: "Rock Classics", image: "path/to/rock_classics.jpg" },
        { rank: 5, name: "Chill Hits", image: "path/to/chill_hits.jpg" }
    ],
    image: ""
};

class GetProfile extends React.Component
{
    render()
    {
        let mostPopularPlaylist = profile.playlists.reduce((prev, current) => {
            return (prev.rank < current.rank) ? prev : current;
        });    

        return (
            <div>
                <div>
                    <img alt={profile.username} />
                    <h1>Username: </h1><h1>{profile.username}</h1>
                    <h1>Full Name: </h1><h1>{profile.fullName}</h1>
                    <h1>Bio: </h1><h1>{profile.bio}</h1>
                    <h1>achievements: </h1><h1>{profile.achievements}</h1>
                </div>

                <div>
                    <h1>Followers: </h1><h1>{profile.followers}</h1>
                    <h1>following: </h1><h1>{profile.following}</h1>
                    <div>
                        <h1>Most Popular Playlist</h1>
                        <h2>{mostPopularPlaylist.name}</h2>
                        <img src={mostPopularPlaylist.image} alt={mostPopularPlaylist.name}/>
                        {
                            mostPopularPlaylist.songs(song, index) => (
                                <div key={index}>

                                </div>
                            )
                            )
                        }
                    </div>
                </div>
            </div>
        )
    }
} 

export default GetProfile;