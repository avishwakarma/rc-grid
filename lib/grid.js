import { __rest } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import { createContext } from "react";
import { GridDiv } from "./styled";
const defaultBreakpoints = {
    small: 320,
    medium: 768,
    large: 1367
};
const defaultMaxWidth = 1400;
export const GridContext = createContext({
    columns: [4, 6, 12],
    maxWidth: defaultMaxWidth,
    breakpoints: defaultBreakpoints
});
export const Grid = (_a) => {
    var { children, columns = [4, 6, 12], maxWidth = defaultMaxWidth, style, breakpoints = defaultBreakpoints } = _a, props = __rest(_a, ["children", "columns", "maxWidth", "style", "breakpoints"]);
    return (_jsx(GridContext.Provider, { value: {
            columns,
            breakpoints,
            maxWidth
        }, children: _jsx(GridDiv, Object.assign({ style: Object.assign({ maxWidth }, style) }, props, { children: children })) }));
};
//# sourceMappingURL=grid.js.map