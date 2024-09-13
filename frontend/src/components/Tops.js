import React from "react";
import { Link } from "react-router-dom";
import rickAstleyImage from "../../public/assets/images/Rick.png";
import billie from "../../public/assets/images/Billie.png";
import Drake from "../../public/assets/images/Drake.png";
import Hans from "../../public/assets/images/Hans.png";
import BadGuy from "../../public/assets/images/BadGuy.png";
import Indie7 from "../../public/assets/images/Indie.png";
import pop from "../../public/assets/images/pop.png";
import rock from "../../public/assets/images/rock.png";
import Interstellar from "../../public/assets/images/Interstellar.png";

const artists = [
    { rank: 1, firstName: "Rick", lastName: "Astley", topSong: "Never Gonna Give You Up", genre: "Pop", image: rickAstleyImage },
    { rank: 2, firstName: "Billie", lastName: "Ilish", topSong: "Bohemian Rhapsody", genre: "Rock", image: billie },
    { rank: 3, firstName: "Drake", lastName: "Moufoy", topSong: "Thriller", genre: "Pop", image: Drake },
    { rank: 4, firstName: "Hans", lastName: "Zimmer", topSong: "Interstellar Theme", genre: "", image: Hans }
];

const Playlists = [
    { rank: 1, name: "Top 50 Global", creator: "Spotify", image: "path/to/top_50_global.jpg", image: BadGuy },
    { rank: 2, name: "RapCaviar", creator: "Spotify", image: "path/to/rap_caviar.jpg", indie: pop },
    { rank: 3, name: "Today's Top Hits", creator: "Spotify", image: "path/to/todays_top_hits.jpg", image: rock },
    { rank: 4, name: "Rock Classics", creator: "Spotify", image: "path/to/rock_classics.jpg", image: rickAstleyImage }
];

const Songs = [
    { rank: 1, title: "Blinding Lights", artist: "The Weeknd", image: "path/to/blinding_lights.jpg", image: Indie7 },
    { rank: 2, title: "Interstellar", artist: "Hans Zimmer", image: "path/to/dance_monkey.jpg", image: Interstellar },
    { rank: 3, title: "Circles", artist: "Post Malone", image: "path/to/circles.jpg", image: rickAstleyImage },
    { rank: 4, title: "Don't Start Now", artist: "Dua Lipa", image: "path/to/dont_start_now.jpg", image: rickAstleyImage }
];

class TopArtists extends React.Component
{
    render()
    {
        return(
            <div id="Carousel">
                {artists.map((artist, index) => (
                    <div key={index}>
                        <img src={artist.image} alt={`${artist.firstName} ${artist.lastName}`} style={{ height: "8rem"}} />
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
                        <img src={playlist.image} alt={`${playlist.name} ${playlist.creator}`} style={{ height: "8rem"}} />
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
                            <img src={song.image} alt={`${song.title} ${song.artist}`} style={{ height: "8rem"}} />
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