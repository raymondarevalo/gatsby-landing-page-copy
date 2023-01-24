import React from "react";
import { Section } from "../components/Section";
import { Heading } from "../components/Heading";
import { Button } from "../components/Button";
import { JOIN } from "../constants";

export default function Join() {
  return (
    <Section className="text-center bg-[#11081f]" layout="richText">
      <Heading>{JOIN.title}</Heading>
      <p dangerouslySetInnerHTML={{ __html: JOIN.text }} />
      <div className="grid grid-flow-col gap-4 justify-center">
        {JOIN.links.map((item, index) => {
          return (
            <Button key={index} type={item.type}>
              {item.text}
            </Button>
          );
        })}
      </div>
    </Section>
  );
}
