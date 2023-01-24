import React from "react";
import clsx from "clsx";

export const Grid = ({
  children,
  className,
  flow = "row",
  gap = "default",
  layout = "default",
}) => {
  const layouts = {
    default:
      "max-w-[40rem] md:max-w-screen-lg w-9/10 grid-cols-1 md:grid-cols-2",
    multi: "max-w-2xl md:max-w-screen-lg md:w-9/10 grid-cols-2 md:grid-cols-3",
    footer: "grid-cols-[repeat(auto-fill,_minmax(10rem,_1fr))]",
  };
  const gaps = {
    default: "grid gap-x-2 gap-y-6 md:gap-x-12 md:gap-y-12",
    multi: "grid gap-x-16 gap-y-16",
    footer: "grid gap-10",
  };
  const flows = {
    row: "grid-flow-row",
    col: "grid-flow-col",
  };

  const styles = clsx(
    "w-full mx-auto content-center justify-center",
    flows[flow],
    gaps[gap],
    layouts[layout],
    className
  );

  return <div className={styles}>{children}</div>;
};
