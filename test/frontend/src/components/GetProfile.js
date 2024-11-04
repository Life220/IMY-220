import React from "react";
import { getProfile } from "../../../backend/api";

class GetProfile extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
            username: "",
            fullName: "",
            bio: "",
            email: "",
            image: null,
            joined: Date(),
            achievements: [],
            followers: [],
            following: [],
            likedPlaylists: [],
            likedSongs: [],
            playlists: [],
            loading: true
        };

        this.handleChange = this.handleChange.bind(this);
    }

    async componentDidMount()
    {
        let fetchedUsername = localStorage.getItem("username");
        let profile = (await getProfile(fetchedUsername)).data;
        this.setState({
            username: fetchedUsername,
            fullName: profile.fullName,
            bio: profile.bio,
            email: profile.email,
            image: profile.image,
            joined: profile.joined,
            achievement: profile.achievement,
            followers: profile.followers,
            following: profile.following,
            likedPlaylists: profile.likedPlaylists,
            likedSongs: profile.likedSongs,
            loading: false
        });
    }

    handleChange(event)
    {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    render() {
        const { username, fullName, bio, email, image, joined, achievements, followers, following, likedPlaylists, likedSongs, playlists, loading } = this.state;

        const mostPopularPlaylist = playlists && playlists.length > 0 ? playlists.reduce((prev, current) => {
            return (prev.rank < current.rank) ? prev : current;
        }, playlists[0]) : {};
    
        return (
            <div id="getProfile" className="p-4">
                {loading && (
                    <div className="loading-overlay fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="loading-popup bg-white p-6 rounded-lg shadow-lg">
                        <p>Loading...</p>
                    </div>
                </div>
            )}
                <div id="leftProfile" className="flex flex-col items-center">
                    <img src={image} alt="Add profile picture" className="w-32 h-32 rounded-full mb-4" />
                    <div id="titles" className="w-full">
                        <div className="title mb-4">
                            <h3 className="text-lg font-semibold">Username: </h3>
                            <input name="username" value={username} onChange={this.handleChange} className="w-full p-2 border border-gray-300 rounded text-black" />
                        </div>
                        <div className="title mb-4">
                            <h3 className="text-lg font-semibold">Full Name: </h3>
                            <input name="fullName" value={fullName} onChange={this.handleChange} className="w-full p-2 border border-gray-300 rounded text-black" />
                        </div>
                        <div className="bio mb-4">
                            <h3 className="text-lg font-semibold">Bio</h3>
                            <textarea name="bio" value={bio} onChange={this.handleChange} className="w-full p-2 border border-gray-300 rounded text-black" />
                        </div>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Achievements: </h3>
                    {achievements && achievements.map((achievement, index) => (
                        <p key={index} className="mb-1">{achievement.rank}. {achievement.achievements}</p>
                    ))}
                </div>
                <div id="rightProfile" className="mt-8">
                    <div className="mb-4">
                        <h2 className="text-lg font-semibold">Followers: </h2><h2>{followers ? followers.length : 0}</h2>
                        <h2 className="text-lg font-semibold">Following: </h2><h2>{following ? following.length : 0}</h2>
                    </div>


                    <div>
                    <h1 className="text-xl font-bold mb-4">Most Popular Playlist: </h1>
                        {mostPopularPlaylist && mostPopularPlaylist.songs && (
                            <>
                                <h2 className="text-lg font-semibold">{mostPopularPlaylist.name}</h2>
                                <img src={mostPopularPlaylist.image} alt={mostPopularPlaylist.name} className="w-32 h-32 rounded mb-4" />
                                {mostPopularPlaylist.songs.map((song, index) => (
                                    <div key={index} className="mb-2">
                                        <p style={{ color: song.rank === 1 ? "gold" : song.rank === 2 ? "silver" : song.rank === 3 ? "#d19900" : "#00ceb2" }}>
                                            {song.rank}. {song.title} by {song.artist}
                                        </p>
                                    </div>
                                ))}
                            </>
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

export default GetProfile;