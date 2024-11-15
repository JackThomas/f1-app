import { Driver, type DriverApiData } from "@/types/Driver.type";
import { getDriverImagePath, getDriverIsWesternName } from "../data";
import { API_URL } from "./constants";

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

export const mapDriversByConstructor = (data: DriverApiData) =>
    (data?.MRData?.DriverTable.Drivers ?? []).map((driver: Driver) => {
        const { driverId, givenName, familyName } = driver;
        const isWesternName = getDriverIsWesternName(driver);
        const imagePath = getDriverImagePath({
            givenName,
            familyName,
            isWesternName,
        });

        return {
            id: driverId,
            imagePath,
            givenName,
            familyName,
            isWesternName,
        };
    });
