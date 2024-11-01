export const constructorColors = {
    alpine: "#4091c7",
    aston_martin: "#4b9774",
    ferrari: "#d52d2e",
    haas: "#b7babd",
    mclaren: "#ef8733",
    mercedes: "#75f0d3",
    red_bull: "#3671c6",
    rb: "#6f91f7",
    sauber: "#000000",
    williams: "#7cc2fa",
    default: "#e5e7eb",
};

export const getConstructorColour = ({ constructorId }) =>
    constructorColors[constructorId] || constructorColors.default;
