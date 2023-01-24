import React from "react";
import { Section } from "../components/Section";
import { Heading } from "../components/Heading";
import { Grid } from "../components/Grid";
import { DNA } from "../constants/index";

export default function Dna() {
  return (
    <Section layout="multi" className="bg-[#11081f]">
      <Heading textColor="purple" className="text-center">
        {DNA.title}
      </Heading>
      <Grid
        layout="multi"
        gap="multi"
        className="justify-items-center justify-center place-content-start"
      >
        {DNA.valueProps.map((item, index) => {
          return (
            <div key={index} className="last:col-span-2 md:last:col-span-1">
              <img src={item.img} className="mx-auto mb-4" />
              <Heading headingSize="h3" className="text-center">
                {item.title}
              </Heading>
            </div>
          );
        })}
      </Grid>
    </Section>
  );
}
