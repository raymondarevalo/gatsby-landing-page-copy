import React from "react";
import { Heading } from "../components/Heading";
import Featured from "../assets/how_gatsby_works.png";
import { Section } from "../components/Section";
import { featuredImage } from "../constants";

export const FeaturedImage = () => {
  return (
    <Section className="bg-[#11081f]">
      <div className="mx-auto w-9/10 md:max-w-[52rem] text-center">
        <Heading className="mb-4">{featuredImage.title}</Heading>
        <img src={featuredImage.img} className="w-max" />
      </div>
    </Section>
  );
};
