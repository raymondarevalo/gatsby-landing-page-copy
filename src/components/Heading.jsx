import React from "react";
import clsx from "clsx";

export const Heading = ({
  headingSize = "h1",
  textColor = "purple",
  children,
  className,
}) => {
  const textColors = {
    purple: "head-purple",
    purpleAlt: "head-dark head-purple",
    blue: "head-blue",
    green: "head-green",
  };

  const styles = clsx(
    "max-w-screen-lg w-full mx-auto",
    textColors[textColor],
    headingSize,
    className
  );
  return (
    <div
      className={styles}
      dangerouslySetInnerHTML={{ __html: children }}
    ></div>
  );
};
