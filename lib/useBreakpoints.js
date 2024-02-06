import { useEffect, useState } from "react";
export function useBreakpoints(breakpoints) {
    const [width, setWidth] = useState(window.innerWidth);
    const [breakpoint, setBreakpoint] = useState("large");
    function handleResize() {
        setWidth(window.innerWidth);
        if (window.innerWidth >= breakpoints.large) {
            setBreakpoint("large");
        }
        if (window.innerWidth > breakpoints.medium &&
            window.innerWidth <= breakpoints.large) {
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
//# sourceMappingURL=useBreakpoints.js.map