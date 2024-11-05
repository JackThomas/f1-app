import { type ConstructorStandingApiData } from "@/types/ConstructorStandings.type";
import { getConstructorColour, getConstructorImagePath } from "../data";
import { API_URL } from "./constants";

export const fetchConstructorStandings = async () => {
    const endpoint = `${API_URL}/2024/constructorstandings/?format=json`;
    const response = await fetch(endpoint);

    return await response.json();
};

export const mapConstructorStandings = (data: ConstructorStandingApiData) => {
    return (
        (
            data?.MRData?.StandingsTable.StandingsLists[0]
                .ConstructorStandings ?? []
        ).map(({ Constructor, positionText, points }, index) => {
            const { constructorId } = Constructor;
            const isPrimary = index === 0;
            const imagePath = getConstructorImagePath({
                constructorId,
            });
            return {
                id: constructorId,
                position: positionText,
                imagePath,
                name: Constructor.name,
                color: getConstructorColour(Constructor),
                points,
                isPrimary,
            };
        }) ?? []
    );
};
