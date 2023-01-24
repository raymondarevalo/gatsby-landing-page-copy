import React from "react";
import { Section } from "../components/Section";
import { Heading } from "../components/Heading";
import { Grid } from "../components/Grid";
import { DNA } from "../constants/index";
import { webExp } from "../constants/index";
import { Link } from "react-router-dom";

export default function WebExperience() {
  return (
    <Section layout="multi" className="bg-[#11081f]">
      <Heading textColor="purple" className="text-center max-w-2xl md:w-9/10">
        {webExp.title}
      </Heading>
      <Grid
        layout="multi"
        gap="multi"
        className="justify-items-center justify-center place-content-start"
      >
        {webExp.valueProps.map((item, index) => {
          return (
            <div
              key={index}
              className="grid gap-6 text-center last:col-span-2 md:last:col-span-1 max-w-xs content-start"
            >
              <img src={item.img} className="mx-auto" />
              <Heading headingSize="h4">{item.title}</Heading>
              <p
                dangerouslySetInnerHTML={{ __html: item.text }}
                className="body-purple text-base"
              />
              <Link to="/info" className="link">
                {item.link_text}
              </Link>
            </div>
          );
        })}
      </Grid>
    </Section>
  );
}
