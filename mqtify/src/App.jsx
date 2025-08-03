import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import { fetchTopAlbums, fetchNewAlbums, fetchSongs } from "./api";
import "./App.css";
import Hero from "./components/Hero";

const App = () => {
  const [topAlbums, setTopAlbums] = useState([]);
  const [newAlbums, setNewAlbums] = useState([]);
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    fetchTopAlbums().then((data) => {
      setTopAlbums(data);
      console.log("Top Albums", data);
    });

    fetchNewAlbums().then((data) => {
      setNewAlbums(data);
      console.log("New Albums", data);
    });

    fetchSongs().then((data) => {
      setSongs(data);
      console.log("Songs", data);
    });
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <HomePage topAlbums={topAlbums} newAlbums={newAlbums} songs={songs} />
    </>
  );
};

export default App;
