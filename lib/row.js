import { jsx as _jsx } from "react/jsx-runtime";
import { RowDiv } from "./styled";
export const Row = ({ children, style = {} }) => {
    return _jsx(RowDiv, { style: Object.assign({}, style), children: children });
};
//# sourceMappingURL=row.js.map