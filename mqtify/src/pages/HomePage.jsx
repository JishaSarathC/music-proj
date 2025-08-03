import React, { useState } from "react";
import Carousel from "../components/Carousel";
import GenreFilter from "../components/GenreFilter";
import "./HomePage.css";
import Card from "../components/Card";

const HomePage = ({ topAlbums, newAlbums, songs }) => {
  const [selectedGenre, setSelectedGenre] = useState("all");

  const filteredSongs =
    selectedGenre === "all"
      ? songs
      : songs.filter((song) => song.genre.key === selectedGenre);

  return (
    <div className="home-page">
      

      <section className="section top-albums">
        <h2 className="title">Top Albums</h2>
       <Carousel items={topAlbums}>
  {(album) => (
    <Card image={album.image} title={album.title} follows={album.follows} />
  )}
</Carousel>

      </section>

      <section className="section new-albums">
        <h2 className="title">New Albums</h2>
        <Carousel items={newAlbums}>
  {(album) => (
    <Card image={album.image} title={album.title} follows={album.follows} />
  )}
</Carousel>
      </section>

      <section className="section songs">
        <h2 className="title">Songs</h2>
        <GenreFilter
          selectedGenre={selectedGenre}
          onGenreChange={setSelectedGenre}
        />
        <Carousel items={filteredSongs}>
  {(song) => (
    <Card image={song.image} title={song.title} likes={song.likes} />
  )}
</Carousel>
      </section>
    </div>
  );
};

export default HomePage;
