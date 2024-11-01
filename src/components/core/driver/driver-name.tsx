import { Heading } from "@chakra-ui/react";

const DriverName = ({ givenName, familyName, isWesternName }) =>
    isWesternName ? (
        <Heading size="md">
            {givenName} {familyName}
        </Heading>
    ) : (
        <Heading size="md">
            {familyName} {givenName}
        </Heading>
    );

export { DriverName };
