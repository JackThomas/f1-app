import { Constructor } from "@/types/Constructor.type";
import { normaliseString } from "../utils";

export const getDriverImagePath = ({
    givenName,
    familyName,
    isWesternName,
}: {
    givenName: string;
    familyName: string;
    isWesternName: boolean;
}) => {
    const strings = [givenName, familyName];
    if (!isWesternName) {
        strings.reverse();
    }
    return `/drivers/${normaliseString(strings[0])}_${normaliseString(
        strings[1]
    )}.png`;
};

export const getDriverIsWesternName = ({
    nationality: demonym,
}: {
    nationality: string;
}) => demonym !== "Chinese";

export const getDriversCurrentConstructor = (constructors: Constructor[]) => {
    return constructors[constructors.length - 1];
};
