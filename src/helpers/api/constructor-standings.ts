import { type ConstructorStandingApiData } from "@/types/ConstructorStandings.type";
import { getConstructorColour } from "../data";
import { API_URL } from "./constants";

export const fetchConstructorStandings = async () => {
    const endpoint = `${API_URL}/2024/constructorstandings/?format=json`;
    const response = await fetch(endpoint);

    return await response.json();
};

export const mapConstructorStandings = (data: ConstructorStandingApiData) =>
    (
        data?.MRData?.StandingsTable.StandingsLists[0].ConstructorStandings ??
        []
    ).map(({ Constructor, positionText, points }, index) => {
        const isFirst = index === 0;

        return {
            id: Constructor.constructorId,
            position: positionText,
            name: Constructor.name,
            color: getConstructorColour(Constructor),
            points,
            isFirst,
        };
    }) ?? [];
