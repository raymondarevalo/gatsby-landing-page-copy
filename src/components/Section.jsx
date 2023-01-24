import React from "react";
import clsx from "clsx";

export const Section = ({
  layout = "default",
  display = "grid",
  children,
  className,
}) => {
  const layouts = {
    default: "px-6 pb-20 gap-12",
    list: "px-6 pt-32 pb-[15rem] gap-24",
    richText: "px-6 py-[9rem] gap-6",
    multi: "px-6 pt-12 pb-20 md:pb-[9rem] gap-12",
    x: "px-6 gap-12",
    y: "py-6 gap-12",
    test: "px-6 sm:px-20 pt-12 pb-20 md:pb-[9rem]",
  };
  const displays = {
    flex: "flex",
    grid: "grid",
  };
  const styles = clsx(layouts[layout], displays[display], className);
  return <section className={styles}>{children}</section>;
};
