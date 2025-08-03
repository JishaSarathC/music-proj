// src/api.js

const BASE_URL = "https://qtify-backend-labs.crio.do";

// Fetch top albums
export async function fetchTopAlbums() {
  try {
    const response = await fetch(`${BASE_URL}/albums/top`);
    if (!response.ok) throw new Error("Failed to fetch top albums");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching top albums:", error);
    return [];
  }
}

// Fetch new albums
export async function fetchNewAlbums() {
  try {
    const response = await fetch(`${BASE_URL}/albums/new`);
    if (!response.ok) throw new Error("Failed to fetch new albums");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching new albums:", error);
    return [];
  }
}

// Fetch all songs
export async function fetchSongs() {
  try {
    const response = await fetch(`${BASE_URL}/songs`);
    if (!response.ok) throw new Error("Failed to fetch songs");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching songs:", error);
    return [];
  }
}

// Fetch song genres
export async function fetchGenres() {
  try {
    const response = await fetch(`${BASE_URL}/genres`);
    if (!response.ok) throw new Error("Failed to fetch genres");
    const data = await response.json();
    return data.data; // note: genres are inside a `data` key
  } catch (error) {
    console.error("Error fetching genres:", error);
    return [];
  }
}
