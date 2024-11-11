import { Driver, type DriverApiData } from "@/types/Driver.type";
import { API_URL } from "./constants";
import {
    getDriverCountryFlag,
    getDriverImagePath,
    getDriverIsWesternName,
} from "../data";

export const fetchDrivers = async () => {
    const endpoint = `${API_URL}/2024/drivers/?format=json`;
    const response = await fetch(endpoint);

    return await response.json();
};

export const fetchDriversByConstructor = async (constructorId: string) => {
    const endpoint = `${API_URL}/2024/20/constructors/${constructorId}/drivers/`;
    const response = await fetch(endpoint);

    return await response.json();
};

// export const mapDriver = (data: DriverStandingsApiData) =>
//     (data?.MRData?.StandingsTable.StandingsLists[0].DriverStandings ?? []).map(
//         ({ Constructors, Driver, positionText, points }, index) => {
//             const { driverId, givenName, familyName } = Driver;
//             const isWesternName = getDriverIsWesternName(Driver);
//             const imagePath = getDriverImagePath({
//                 givenName,
//                 familyName,
//                 isWesternName,
//             });
//             const isPrimary = index === 0;
//             const constructor = getDriversCurrentConstructor(Constructors);

//             return {
//                 id: driverId,
//                 position: positionText,
//                 imagePath,
//                 isPrimary,
//                 givenName,
//                 familyName,
//                 isWesternName,
//                 points,
//                 constructor: {
//                     name: constructor.name,
//                     color: getConstructorColour(constructor),
//                 },
//             };
//         }
//     ) ?? [];

export const mapDriversByConstructor = (data: DriverApiData) =>
    (data?.MRData?.DriverTable.Drivers ?? []).map((driver: Driver) => {
        const { driverId, givenName, familyName, nationality } = driver;
        const isWesternName = getDriverIsWesternName(driver);
        const imagePath = getDriverImagePath({
            givenName,
            familyName,
            isWesternName,
        });

        // const x = getDriverCountryFlag({ nationality });
        // console.log({ x });

        return {
            id: driverId,
            imagePath,
            givenName,
            familyName,
            isWesternName,
        };
    });
