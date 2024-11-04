import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSong } from "../../../backend/api";

const Song = () => {
  const { id } = useParams();
  const [song, setSong] = useState(null);

  useEffect(() => {
    const fetchSong = async () => {
      const response = await getSong(id);
      setSong(response.data);
      console.log(response);
      console.log(id);
    };

    fetchSong();
  }, [id]);

  if (!song) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{song.title}</h1>
      <p>{song.artist}</p>
      <img src={song.image} alt={song.title} />
    </div>
  );
};

export default Song;