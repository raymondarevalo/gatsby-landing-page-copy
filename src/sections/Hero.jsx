import React from "react";
import { hero } from "../constants/index";
import { Section } from "../components/Section";
import { Grid } from "../components/Grid";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";

export default function Hero() {
  return (
    <Section className="bg-[#11081f]">
      <Grid className="mt-16">
        <div className="grid gap-6 content-center text-center md:text-left">
          <Heading>{hero[0].title}</Heading>
          <p
            dangerouslySetInnerHTML={{ __html: hero[0].text }}
            className="mb-6"
          ></p>
          <div className="grid grid-flow-col gap-4 justify-center md:justify-start">
            {hero[0].links.map((item, index) => {
              return (
                <Button key={index} type={item.type}>
                  {item.text}
                </Button>
              );
            })}
          </div>
        </div>
        <div>
          <img src={hero[0].img} />
        </div>
      </Grid>
    </Section>
  );
}
