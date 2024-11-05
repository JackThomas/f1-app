import { ApiDefaults } from "./ApiDefaults.type";
import { Race } from "./Race.type";
import { StandingTableDefaults } from "./StandingsTable.type";

export type ResultApiData = {
    MRData?: ApiDefaults & {
        RaceTable: RaceTable;
    };
};

export type RaceTable = StandingTableDefaults & {
    season: string;
    Races: Race[];
};
