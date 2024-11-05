import { API_URL } from "./constants";

export const fetchResults = async () => {
    const endpoint = `${API_URL}/2024/results/?format=json`;
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