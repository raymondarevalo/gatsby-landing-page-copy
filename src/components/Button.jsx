import React, { Component } from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";

export const Button = ({
  as: Component = "a",
  type = "button",
  size = "big",
  children,
}) => {
  const types = {
    button:
      "min-w-[3rem] bg-[#7026b9] hover:bg-[#50218B] text-white hover:text-white leading-none",
    link: "text-[#a456f0] hover:text-[#ceb8f9] underline underline-offset-2 hover:decoration-white",
    outline: "min-w-[3rem] ring-1 ring-[#50218B] text-white  leading-none",
  };

  const sizes = {
    small: "h-8 text-sm font-semibold rounded px-4",
    big: "h-12 p font-semibold rounded-lg px-5",
  };

  const styles = clsx(
    "flex items-center justify-center capitalize text-center ease-in duration-200 md:text-left",
    sizes[size],
    types[type]
  );

  return (
    <Link className={styles} to="/info">
      {children}
    </Link>
  );
};
