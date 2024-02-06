export function getResponsiveNumber(responsive, i) {
    const res = getResponsiveValue(responsive, i);
    return typeof res === "number" ? res : 0;
}
function getResponsiveValue(responsive, i) {
    if (!responsive) {
        return null;
    }
    if (!Array.isArray(responsive)) {
        return responsive;
    }
    if (typeof responsive[i] === "undefined") {
        return responsive[responsive.length - 1];
    }
    return responsive[i];
}
//# sourceMappingURL=helpers.js.map