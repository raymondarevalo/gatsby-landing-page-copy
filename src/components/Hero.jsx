import React from "react";
import { hero } from "../constants/index";
import { Section } from "./Section";
import { Grid } from "./Grid";
import { Button } from "./Button";

export default function Hero() {
  return (
    <Section className="bg-[#11081f]">
      <Grid>
        <div className="grid gap-6 content-center">
          <h1 dangerouslySetInnerHTML={{ __html: hero[0].title }}></h1>
          <p dangerouslySetInnerHTML={{ __html: hero[0].text }}></p>
          <div className="grid grid-flow-col gap-4 justify-start">
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
