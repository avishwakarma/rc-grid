import { FC } from "react";
import { RowProps } from "./types";
import { RowDiv } from "./styled";

export const Row: FC<RowProps> = ({ children, style = {} }: any) => {
  return <RowDiv style={{ ...style }}>{children}</RowDiv>;
};
