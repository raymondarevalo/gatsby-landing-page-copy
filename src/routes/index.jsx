import React from "react";
import Hero from "../sections/Hero";
import Dna from "../sections/Dna";
import WebExperience from "../sections/WebExperience";
import ImageWithTextList from "../sections/ImageWithTextList";
import Join from "../sections/Join";
import Navbar from "../sections/Navbar";
import Testimonials from "../sections/Testimonials";
import { FeaturedImage } from "../sections/FeaturedImage";
import Footer from "../sections/Footer";
import App from "../App";

export default function Index() {
  return (
    <App>
      <Hero />
      <Dna />
      <WebExperience />
      <Testimonials />
      <FeaturedImage />
      <ImageWithTextList />
      <Join />
    </App>
  );
}
