import { FC, createContext } from "react";
import { GridProps, GridContextType, Breakpoints } from "./types";
import { GridDiv } from "./styled";

const defaultBreakpoints: Breakpoints = {
  small: 320,
  medium: 768,
  large: 1367
};

const defaultMaxWidth = 1400;

export const GridContext = createContext<GridContextType>({
  columns: [4, 6, 12],
  maxWidth: defaultMaxWidth,
  breakpoints: defaultBreakpoints
});

export const Grid: FC<GridProps> = ({
  children,
  columns = [4, 6, 12],
  maxWidth = defaultMaxWidth,
  style,
  breakpoints = defaultBreakpoints,
  ...props
}: GridProps) => {
  return (
    <GridContext.Provider
      value={{
        columns,
        breakpoints,
        maxWidth
      }}
    >
      <GridDiv style={{ maxWidth, ...style }} {...props}>
        {children}
      </GridDiv>
    </GridContext.Provider>
  );
};
