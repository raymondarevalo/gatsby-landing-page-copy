import React from "react";
import { Section } from "../components/Section";
import { footerMenuItems } from "../constants";
import { Grid } from "../components/Grid";
import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <Section layout="x" className="bg-[#11081f]">
        <div className="mx-auto md:max-w-screen-lg w-full grid mt-24">
          {/* Community Section */}
          <div className="flex flex-col sm:flex-row justify-between mb-5 sm:mb-16 gap-y-4">
            <div>
              <img
                src={footerMenuItems.community.icon}
                className="mx-auto sm:mx-0"
              />
              <p
                className="text-xs mt-5 opacity-70 text-center sm:text-left"
                dangerouslySetInnerHTML={{
                  __html: footerMenuItems.community.text,
                }}
              />
            </div>
            <ul className="flex gap-1 justify-center">
              {footerMenuItems.community.socials.map((item, index) => (
                <li key={`social-${index}`}>
                  <Link
                    to="/info"
                    className="flex justify-center h-10 w-10 items-center rounded-full hover:bg-[#663399] ease-in duration-300"
                  >
                    <item.icon className="text-white opacity-70" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Navigation Section */}
          <div className="mb-10 order-first sm:order-2">
            {/* Desktop view */}
            <Grid layout="footer" gap="footer" className="hidden sm:grid">
              {footerMenuItems.nav.map((list) => (
                <div key={`footer-${list.title}`}>
                  <p className="text-xs uppercase font-bold text-[#d9bae8]">
                    {list.title}
                  </p>
                  <ul className="my-5">
                    {list.links.map((item, index) => (
                      <li key={`${list.title}-${index}`} className="mb-1">
                        <Link
                          to="/info"
                          className="text-sm opacity-70 hover:opacity-100 ease-in duration-200"
                        >
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </Grid>
            {/* Mobile View */}
            <div className="sm:hidden border-t border-[#221140]">
              {footerMenuItems.nav.map((list) => (
                <div className="border-[#221140] border-b">
                  <Disclosure key={`footer-${list.title}`}>
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="py-[12px] px-0 w-full flex justify-between items-center border-0 rounded-none">
                          <p className="text-xs uppercase font-bold text-[#d9bae8]">
                            {list.title}
                          </p>
                          <ChevronDownIcon
                            className={`h-6 w-6 ease-in duration-300 ${
                              open ? "rotate-180 transform" : ""
                            }`}
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className="pt-1 pb-6">
                          <ul>
                            {list.links.map((item, index) => (
                              <li
                                key={`${list.title}-${index}`}
                                className="mb-1"
                              >
                                <Link
                                  to="/info"
                                  className="text-sm opacity-70 hover:opacity-100 ease-in duration-200"
                                >
                                  {item}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                </div>
              ))}
            </div>
          </div>
          {/* Footer Section */}
          <div className="order-last mt-6 mb-12 sm:pt-12 sm:border-t border-[#221140] flex flex-col sm:flex-row justify-between gap-y-2 text-sm">
            <p className="order-last sm:order-first text-center text-xs opacity-70 mt-2 sm:mt-0">
              © 2023 Gatsby, Inc.
            </p>
            <div className="flex gap-4 justify-center">
              <Link className="opacity-70 hover:opacity-100" to="/info">
                {" "}
                Accessibility Statement
              </Link>
              <Link className="opacity-70 hover:opacity-100" to="/info">
                Brand Guidelines
              </Link>
            </div>
            <div className="flex gap-4 justify-center">
              <Link className="opacity-70 hover:opacity-100" to="/info">
                Terms of Use
              </Link>
              <Link className="opacity-70 hover:opacity-100" to="/info">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </footer>
  );
}
