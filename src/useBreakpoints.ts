import { useEffect, useState } from "react";
import { Breakpoints, UseBreakpointsReturnType } from "./types";

export function useBreakpoints(
  breakpoints: Breakpoints
): UseBreakpointsReturnType {
  const [width, setWidth] = useState(window.innerWidth);
  const [breakpoint, setBreakpoint] = useState<"small" | "medium" | "large">(
    "large"
  );

  function handleResize() {
    setWidth(window.innerWidth);

    if (window.innerWidth >= breakpoints.large) {
      setBreakpoint("large");
    }

    if (
      window.innerWidth > breakpoints.medium &&
      window.innerWidth <= breakpoints.large
    ) {
      setBreakpoint("medium");
    }

    if (window.innerWidth < breakpoints.medium) {
      setBreakpoint("small");
    }
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  });

  return {
    width,
    breakpoint
  };
}
