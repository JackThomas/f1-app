import { API_URL } from "./constants";

export const fetchResults = async () => {
    const year = "current";
    const round = "last";
    const endpoint = `${API_URL}/${year}/${round}/results/?format=json`;
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
