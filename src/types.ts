import { ReactNode, CSSProperties, FC } from "react";

export type Breakpoints = {
  small: number;
  medium: number;
  large: number;
};

export type Responsive<T> = T | Array<T>;

export type CellProps = {
  children: ReactNode;
  span?: [number, number, number] | number;
  skip?: [number, number, number] | number;
  style?: CSSProperties;
};

export type RowProps = {
  children: ReactNode;
  style?: CSSProperties;
};

export type GridProps = {
  children: ReactNode;
  columns?: [number, number, number];
  style?: CSSProperties;
  breakpoints?: Breakpoints;
  maxWidth?: number;
};

export type GridContextType = {
  columns: [number, number, number];
  breakpoints: Breakpoints;
  maxWidth?: number;
};

export type UseBreakpointsReturnType = {
  width: number;
  breakpoint: "small" | "medium" | "large";
};
