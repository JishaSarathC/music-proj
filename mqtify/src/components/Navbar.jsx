import React from "react";
import logo from "../assets/logo.svg";
import "./Navbar.css";

import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";

const Navbar = () => {
  const handleSearchClick = () => {
    console.log("Search clicked");
  };

  return (
    <nav className="navbar">
      <img src={logo} alt="Qtify Logo" className="logo" />

      <div className="search-container">
        <input
          type="text"
          placeholder="Search songs or albums..."
          className="search-bar"
        />
        <IconButton onClick={handleSearchClick} className="search-icon">
          <SearchIcon />
        </IconButton>
      </div>

      <button className="feedback-btn">Give Feedback</button>
    </nav>
  );
};

export default Navbar;
