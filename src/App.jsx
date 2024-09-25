import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Listing from "./components/Listing";
import db from "../db.json";
import Image from "../Image.json";
const App = () => {
  const [data, setData] = useState([]);
  const [image, setImage] = useState([]);

  useEffect(() => {
    setData(db);
  }, []);

  useEffect(() => {
    setImage(Image);
  }, []);

  return (
    <>
      <Navbar />
      <Header />
      <Hero />
      <Listing
        title="We've got what everyone's listening to"
        description="Best sellers. New releases. That story you've been waiting for."
        data={data}
      />

      <Listing
        title="Only from Audible"
        description="Groundbreaking Originals and exclusives from A-list celebs and emerging talent."
        data={image}
      />

      <Listing
        title="The listening never has to stop"
        description="Thousands of included titles in the Plus Catalogue. No cap on listening time."
        data={data}
      />
    </>
  );
};

export default App;
