import React from "react";
import { Section } from "../components/Section";
import { Heading } from "../components/Heading";
import { Grid } from "../components/Grid";
import { imageWithTextList } from "../constants/";

export default function ImageWithTextList() {
  return (
    <Section layout="list" className="bg-white text-[#232129]">
      <Heading textColor="purpleAlt" className="text-center">
        {imageWithTextList.title}
      </Heading>
      {imageWithTextList.listItems.map((item, index) => {
        return (
          <ImageWithText
            key={index}
            color={item.color}
            caption={item.caption}
            title={item.title}
            text={item.text}
            img={item.img}
            i={index + 1}
          />
        );
      })}
    </Section>
  );
}

function ImageWithText({ color, caption, title, text, img, i }) {
  return (
    <Grid className={i % 2 == 0 ? `even` : `odd`}>
      <img
        src={img}
        className={i % 2 == 0 ? "order-last md:order-first" : "order-last"}
      />
      <div
        className={`grid text-center md:text-left content-center gap-6 ${
          i % 2 == 0 ? "md:pl-16" : "md:pr-16"
        }`}
      >
        <div>
          <caption className={`inline ${color}`}>{caption}</caption>
          <Heading headingSize="h2" textColor={color}>
            {title}
          </Heading>
        </div>
        <p className="text-[#232129] text-base">{text}</p>
      </div>
    </Grid>
  );
}
