import { Heading } from "../components/Heading";
import { Section } from "../components/Section";
import React, { useState } from "react";
import { Tab } from "@headlessui/react";
import { TESTIMONIALS } from "../constants";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Testimonials() {
  return (
    <Section layout="test" className="bg-[#11081f]">
      <div className="mx-auto max-w-screen-lg w-full grid">
        <p className="text-xs uppercase font-medium text-center mb-10">
          {TESTIMONIALS.caption}
        </p>
        <Tab.Group>
          <div className="flex overflow-x-scroll w-full py-4">
            <Tab.List className="inline-flex md:flex w-full min-h-[64px] p-1 justify-between items-center">
              {TESTIMONIALS.list.map((testimonial) => (
                <Tab
                  key={testimonial.company}
                  className={({ selected }) =>
                    classNames(
                      "text-center rounded-none p-0 border-0 outline-0 ring-0",
                      selected ? "text-[#8a4baf]" : "text-white"
                    )
                  }
                >
                  <testimonial.icon className="mx-4 w-auto hover:border-0" />
                </Tab>
              ))}
            </Tab.List>
          </div>
          <Tab.Panels className="mt-10">
            {TESTIMONIALS.list.map((testimonial, idx) => (
              <Tab.Panel
                key={idx}
                className={classNames(
                  "rounded-xl bg-[#8a4baf] pt-12 pb-10 md:pt-16 md:pb-12 px-[7%] md:mx-24 flex flex-col gap-12"
                )}
              >
                <testimonial.icon className="scale-[1.4] origin-bottom-left" />

                <p className="">{testimonial.text}</p>
                <div>
                  <p className="text-lg font-bold">{testimonial.name}</p>
                  <p className="text-base">{testimonial.role}</p>
                  <p className="text-base">{testimonial.company}</p>
                </div>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </Section>
  );
}
