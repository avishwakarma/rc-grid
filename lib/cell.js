import { jsx as _jsx } from "react/jsx-runtime";
import { useContext } from "react";
import { CellDiv } from "./styled";
import { getResponsiveNumber } from "./helpers";
import { GridContext } from "./grid";
import { useBreakpoints } from "./useBreakpoints";
export const Cell = ({ children, span = [4, 6, 12], skip = [0, 0, 0], style = {} }) => {
    const { columns, breakpoints } = useContext(GridContext);
    const { breakpoint } = useBreakpoints(breakpoints);
    const styles = Object.keys(breakpoints).reduce((acc, cur, idx) => {
        if (getResponsiveNumber(span, idx) === 0) {
            return Object.assign(Object.assign({}, acc), { [cur]: {
                    width: "0",
                    paddingLeft: "0",
                    paddingRight: "0",
                    marginLeft: "0",
                    marginRight: "0",
                    display: "none"
                } });
        }
        return Object.assign(Object.assign({}, acc), { [cur]: {
                display: "block",
                width: `calc(${(100 / getResponsiveNumber(columns, idx)) *
                    Math.min(getResponsiveNumber(span, idx), getResponsiveNumber(columns, idx))}%)`,
                marginLeft: `calc(${(100 / getResponsiveNumber(columns, idx)) *
                    Math.min(getResponsiveNumber(skip, idx), getResponsiveNumber(columns, idx))}%)`
            } });
    }, {
        width: "100%"
    });
    const cellStyle = styles[breakpoint];
    return _jsx(CellDiv, { style: Object.assign(Object.assign({}, cellStyle), style), children: children });
};
//# sourceMappingURL=cell.js.map