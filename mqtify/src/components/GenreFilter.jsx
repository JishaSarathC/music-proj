import React, { useEffect, useState } from "react";
import { Tabs, Tab } from "@mui/material";
import { fetchGenres } from "../api";

const GenreFilter = ({ selectedGenre, onGenreChange }) => {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    fetchGenres().then((data) => {
      setGenres(data);
    });
  }, []);

  const handleChange = (event, newValue) => {
    onGenreChange(newValue); // parent updates selectedGenre
  };

  return (
    <Tabs
  value={selectedGenre}
  onChange={handleChange}
  variant="scrollable"
  scrollButtons="auto"
  sx={{
    marginBottom: 2,
    '& .MuiTab-root': {
      color: 'white',
      textTransform: 'capitalize',
    },
    '& .Mui-selected': {
      color: '#34c94b',
      fontWeight: 'bold',
    },
    '& .MuiTabs-indicator': {
      backgroundColor: '#34c94b',
    }
  }}
>
  <Tab label="All" value="all" />
  {genres.map((genre) => (
    <Tab key={genre.key} label={genre.label} value={genre.key} />
  ))}
</Tabs>

  );
};

export default GenreFilter;
