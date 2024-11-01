import { normaliseString } from "../utils";

export const getDriverImagePath = ({
    givenName,
    familyName,
    isWesternName,
}) => {
    const strings = [givenName, familyName];
    if (!isWesternName) {
        strings.reverse();
    }
    return `/drivers/${normaliseString(strings[0])}_${normaliseString(
        strings[1]
    )}.png`;
};

export const getDriverIsWesternName = ({ nationality }) =>
    nationality !== "Chinese";

export const getDriversCurrentConstructor = (constructors) => {
    return constructors[constructors.length - 1];
};
