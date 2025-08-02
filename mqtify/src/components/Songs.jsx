import React, { useEffect, useState } from "react";
import axios from "axios";
import { Tabs, Tab } from "@mui/material";
import Carousel from "./Carousel"; // Reusable Swiper carousel
import Card from "./Card";
import "./Songs.css";

const Songs = () => {
  const [genres, setGenres] = useState([]);
  const [songs, setSongs] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("All");

  useEffect(() => {
    axios.get("https://qtify-backend-labs.crio.do/genres")
      .then((res) => setGenres([{ label: "All", key: "All" }, ...res.data.data]))
      .catch((err) => console.error(err));

    axios.get("https://qtify-backend-labs.crio.do/songs")
      .then((res) => setSongs(res.data))
      .catch((err) => console.error(err));
  }, []);

  const handleGenreChange = (event, newValue) => {
    setSelectedGenre(newValue);
  };

  const filteredSongs = selectedGenre === "All"
    ? songs
    : songs.filter(song => song.genre.key === selectedGenre);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Songs</h2>
      <Tabs
        value={selectedGenre}
        onChange={handleGenreChange}
        variant="scrollable"
        scrollButtons="auto"
      >
        {genres.map((genre) => (
          <Tab key={genre.key} label={genre.label} value={genre.key} />
        ))}
      </Tabs>

      <Carousel items={filteredSongs}>
        {(song) => (
          <Card
            key={song.id}
            image={song.image}
            title={song.title}
            follows={song.likes} // use likes for songs
            isSong
          />
        )}
      </Carousel>
           
    </div>
  );
};

export default Songs;
