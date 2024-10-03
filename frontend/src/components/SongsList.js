import React from "react";

const songs = [
    { rank: 1, title: "Never Gonna Give You Up", artist: "Rick Astley", image: "path/to/never_gonna_give_you_up.jpg" },
    { rank: 2, title: "Blinding Lights", artist: "The Weeknd", image: "path/to/blinding_lights.jpg" },
    { rank: 3, title: "Dance Monkey", artist: "Tones and I", image: "path/to/dance_monkey.jpg" },
    { rank: 4, title: "Circles", artist: "Post Malone", image: "path/to/circles.jpg" },
    { rank: 5, title: "Don't Start Now", artist: "Dua Lipa", image: "path/to/dont_start_now.jpg" }
];

class SongsList extends React.Component
{
    render()
    {
        return (
            <div id="songsList">
                <h2>Songs</h2>
                <div id="songs">
                    {songs.map((song, index) => (
                        <div id="song" key={index}>
                            <div style={{ display: "inline-flex" }}>
                                <p style={{ color: song.rank === 1 ? "gold" : song.rank === 2 ? "silver" : song.rank === 3 ? "#d19900" : "#00ceb2", paddingRight: "0.35rem"}}>{song.rank}.</p>
                                <p style={{ color: "#00ceb2" }}>{song.title}<br /></p>
                            </div>
                            <p style={{ paddingLeft: "1.2rem", color: "#0089b3" }}>{song.artist}</p>
                        </div>
                    ))}
                </div>
            </div>
        )
    };
}

export default SongsList