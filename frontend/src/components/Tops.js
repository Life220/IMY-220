import React from "react";
import { Link } from "react-router-dom";

const artists = [
    { rank: 1, firstName: "Rick", lastName: "Astley", topSong: "Never Gonna Give You Up", genre: "Pop" },
    { rank: 2, firstName: "Freddie", lastName: "Mercury", topSong: "Bohemian Rhapsody", genre: "Rock" },
    { rank: 3, firstName: "Michael", lastName: "Jackson", topSong: "Thriller", genre: "Pop" },
    { rank: 4, firstName: "Elvis", lastName: "Presley", topSong: "Can't Help Falling in Love", genre: "Rock" },
    { rank: 5, firstName: "Madonna", lastName: "", topSong: "Like a Prayer", genre: "Pop" }
];

const Playlists = [
    { rank: 1, name: "Top 50 Global", creator: "Spotify", image: "path/to/top_50_global.jpg" },
    { rank: 2, name: "RapCaviar", creator: "Spotify", image: "path/to/rap_caviar.jpg" },
    { rank: 3, name: "Today's Top Hits", creator: "Spotify", image: "path/to/todays_top_hits.jpg" },
    { rank: 4, name: "Rock Classics", creator: "Spotify", image: "path/to/rock_classics.jpg" },
    { rank: 5, name: "Chill Hits", creator: "Spotify", image: "path/to/chill_hits.jpg" }
];

const Songs = [
    { rank: 1, title: "Blinding Lights", artist: "The Weeknd", image: "path/to/blinding_lights.jpg" },
    { rank: 2, title: "Dance Monkey", artist: "Tones and I", image: "path/to/dance_monkey.jpg" },
    { rank: 3, title: "Circles", artist: "Post Malone", image: "path/to/circles.jpg" },
    { rank: 4, title: "Don't Start Now", artist: "Dua Lipa", image: "path/to/dont_start_now.jpg" },
    { rank: 5, title: "Rockstar", artist: "DaBaby", image: "path/to/rockstar.jpg" }
];

class TopArtists extends React.Component
{
    render()
    {
        return(
            <div id="Carousel">
                {artists.map((artist, index) => (
                    <div key={index}>
                        <img src={artist.image} alt={`${artist.firstName} ${artist.lastName}`} />
                        <div id="Tops">
                            <p>{artist.rank}. </p><p>{artist.firstName} </p><p>{artist.lastName}</p>
                        </div>

                    </div>
                ))}
            </div>
        )
    }
}

class TopPlaylists extends React.Component
{
    render()
    {
        return(
            <div id="Carousel">
                {Playlists.map((playlist, index) => (
                    <div key={index}>
                        <img src={playlist.image} alt={`${playlist.name} ${playlist.creator}`} />
                        <div id="Tops">
                            <p>{playlist.rank}. </p><p>{playlist.name} </p><br/><p>by:{playlist.creator}</p>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}

class TopSongs extends React.Component
{
    render()
    {
        return (
            <div id="Carousel">
                {Songs.map((song, index) => (
                    <div key={index}>
                        <Link to="/playlist">
                            <img src={song.image} alt={`${song.title} ${song.artist}`} />
                        </Link>
                        <div id="Tops">
                            <p>{song.rank}. </p><p>{song.title} </p><br/><p>by:{song.artist}</p>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}

export { TopArtists, TopPlaylists, TopSongs };
export default TopArtists;