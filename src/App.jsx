import React from "react";
import Hero from "./sections/Hero";
import Dna from "./sections/Dna";
import WebExperience from "./sections/WebExperience";
import ImageWithTextList from "./sections/ImageWithTextList";
import Join from "./sections/Join";
import Navbar from "./sections/Navbar";
import Testimonials from "./sections/Testimonials";
import { FeaturedImage } from "./sections/FeaturedImage";
import Footer from "./sections/Footer";

const App = ({ children }) => {
  return (
    <div className="w-screen min-h-screen bg-[#11081f]">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default App;
