import React from "react";
import Hero from "../components/hero";
import FeaturedDestination from "../components/FeaturedDestination.jsx";
import ExclusiveOffers from "../components/ExclusiveOffers.jsx";
import Testimonial from "../components/Testimonial.jsx";
import NewsLetter from "../components/NewsLetter.jsx";
import Footer from "../components/Footer.jsx";
import RecommendedHotels from "../components/RecommendedHotels.jsx";

const Home = () =>{
  return(
    <>
      <Hero />
      <RecommendedHotels />
      <FeaturedDestination />
      < ExclusiveOffers />
      < Testimonial />
      <NewsLetter />
    </>
  )
}

export default Home;