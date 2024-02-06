import { FC, useContext } from "react";
import { CellProps } from "./types";
import { CellDiv } from "./styled";
import { getResponsiveNumber } from "./helpers";

import { GridContext } from "./grid";
import { useBreakpoints } from "./useBreakpoints";

export const Cell: FC<CellProps> = ({
  children,
  span = [4, 6, 12],
  skip = [0, 0, 0],
  style = {}
}: any) => {
  const { columns, breakpoints } = useContext(GridContext);
  const { breakpoint } = useBreakpoints(breakpoints);

  const styles: any = Object.keys(breakpoints).reduce(
    (acc, cur, idx) => {
      if (getResponsiveNumber(span, idx) === 0) {
        return {
          ...acc,
          [cur]: {
            width: "0",
            paddingLeft: "0",
            paddingRight: "0",
            marginLeft: "0",
            marginRight: "0",
            display: "none"
          }
        };
      }
      return {
        ...acc,
        [cur]: {
          display: "block",
          width: `calc(${
            (100 / getResponsiveNumber(columns, idx)) *
            Math.min(
              getResponsiveNumber(span, idx),
              getResponsiveNumber(columns, idx)
            )
          }%)`,
          marginLeft: `calc(${
            (100 / getResponsiveNumber(columns, idx)) *
            Math.min(
              getResponsiveNumber(skip, idx),
              getResponsiveNumber(columns, idx)
            )
          }%)`
        }
      };
    },
    {
      width: "100%"
    }
  );

  const cellStyle: any = styles[breakpoint];

  return <CellDiv style={{ ...cellStyle, ...style }}>{children}</CellDiv>;
};
