import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Section from "./components/Section";
import Songs from "./components/Songs";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      {/* Other components go here */}
      <Section
        title="Top Albums"
        fetchUrl="https://qtify-backend-labs.crio.do/albums/top"
      />
      <Section
        title="New Albums"
        fetchUrl="https://qtify-backend-labs.crio.do/albums/new"
      />
      <Songs />
    </>
  );
}

export default App;
