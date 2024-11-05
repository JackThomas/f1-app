import { type ConstructorId } from "@/types/ConstructureId.type";
import { normaliseString } from "../utils";
import { Driver } from "@/types/Driver.type";

export const constructorColors: Record<ConstructorId, string> = {
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

export const getConstructorImagePath = ({
    constructorId,
}: {
    constructorId: ConstructorId;
}) => {
    return `/constructors/${normaliseString(constructorId)}.png`;
};

export const getConstructorColour = ({
    constructorId,
}: {
    constructorId: ConstructorId;
}) => constructorColors[constructorId] || constructorColors.default;

export const getConstructorDrivers = (
    constructorId: ConstructorId,
    data: Driver[]
) => {
    console.log({ constructorId, data });

    return [
        {
            givenName: "Lewis",
            familyName: "Hamilton",
            isWesternName: true,
            isPrimary: true,
        },
        {
            givenName: "Valtteri",
            familyName: "Bottas",
            isWesternName: true,
        },
    ];
};
