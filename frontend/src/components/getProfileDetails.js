import React from "react";

class GetProfile extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
            username: this.props.profile.username,
            fullName: this.props.profile.fullName
        };
        this.handleUsermameChange = this.handleUsermameChange.bind(this);
        this.handleFullNameChange = this.handleFullNameChange.bind(this);
    }

    handleUsermameChange(event)
    {
        this.setState({ username: event.target.value });
    }

    handleFullNameChange(event)
    {
        this.setState({ fullName: event.target.value });
    }

    render() {
        const { profile } = this.props;

        const mostPopularPlaylist = profile.playlists.reduce((prev, current) => {
            return (prev.rank < current.rank) ? prev : current;
        }, {});

        return (
            <div id="getProfile">
                <div id="leftProfile">
                    <img src={profile.image} alt={profile.username} />
                    <div id="titles">
                        <div className="title">
                            <h3>Username: </h3>
                            <h3><input value={this.state.username} onChange={this.handleUsermameChange} /></h3>
                        </div>
                        <div className="title">
                            <h3>Full Name: </h3>
                            <h3><input value={this.state.fullName} onChange={this.handleFullNameChange} /></h3>
                        </div>
                        <div className="bio">
                            <h3>Bio</h3>
                            <h3>{profile.bio}</h3>
                        </div>
                    </div>
                    <h3>Achievements: </h3>
                        {profile.achievements.map((achievement, index) => (
                            <p key={index}>{achievement.rank}. {achievement.achievements}</p>
                        ))}
                </div>
                <div id="rightProfile">
                    <div>
                        <h2>Followers: </h2><h2>{profile.followers.username}</h2>
                        <h2>Following: </h2><h2>{profile.following.username}</h2>
                    </div>

                    <div>
                        <h1>Most Popular Playlist: </h1>
                        {mostPopularPlaylist && (
                            <>
                            <h2>{mostPopularPlaylist.name}</h2>
                            <img src={mostPopularPlaylist.image} alt={mostPopularPlaylist.name} />
                                {mostPopularPlaylist.songs.map((song, index) => (
                                    <div key={index}>
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