import React from "react";
import App from "../App";
import { Section } from "../components/Section";

export default function Info() {
  return (
    <App>
      <Section className="bg-[#11081f] text-white">
        <div className="mx-auto w-full md:max-w-screen-lg mt-40">
          <h2 className="mb-6">Project Info</h2>
          <p className="opacity-70">
            This is a demo site built by{" "}
            <a
              href="https://www.raymondarevalo.com"
              target="_blank"
              className="underline"
            >
              Raymond Arevalo
            </a>
            . The purpose of this test site is to replicate the design and
            development of a well established landing page. The product
            described on on this site belongs to Gatsby and can be found by{" "}
            <a
              href="https://www.gatsbyjs.com"
              target="_blank"
              className="underline"
            >
              clicking here
            </a>
            .
          </p>
        </div>
      </Section>
    </App>
  );
}
