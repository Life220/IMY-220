import React from "react";

const playlist = {
    title: "Indie 7",
    creator: "DramaLlama",
    listens: 27000000,
    saves: 17000000,
    comments: [
        {username: "Laramy171", comment: "Amazing playlist.", likes: 27000},
        {username: "Jeremy99", comment: "Relaxing bliss.", likes: 20000},
        {username: "LadyBug110", comment: "Can listen to this all day.", likes: 17000},
        {username: "JackySparrow", comment: "Jar of Dirt.", likes: 15000}
    ],
    image: ""
};

class GetPlaylist extends React.Component
{
    render()
    {
        return (
            <div id="Playlist">
                <div id="topOfPlay">
                    <div>
                        <img alt={playlist.title} />
                        <h2>{playlist.title}</h2>
                        <h3>By: {playlist.creator}</h3>
                    </div>
                    <div>
                        <h4>Listens: {playlist.listens}</h4>
                        <h4>saves: {playlist.listens}</h4>
                    </div>
                </div>

                <div id="bottomOfPlay">
                    <h3>Comments</h3>
                    <div id="comments">
                        {playlist.comments.map((comment, index) => (
                            <div id="comment" key={index}>
                                <p style={{ color: "#00ceb2"}}><strong>{comment.username}:</strong></p>
                                <p id="content">{comment.comment}</p>
                                <p style={{ color: "#0089b3" }}>{comment.likes} likes</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}

export default GetPlaylist;