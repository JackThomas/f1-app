import { type ApiDefaults } from "./ApiDefaults.type";
import { type Constructor } from "./Constructor.type";
import { type StandingsListDefaults } from "./StandingsList.type";
import { type StandingTableDefaults } from "./StandingsTable.type";

export type ConstructorStandingApiData = {
    MRData?: ApiDefaults & {
        StandingsTable: ConstructorStandingTable;
    };
};

export type ConstructorStandingTable = StandingTableDefaults & {
    StandingsLists: ConstructorStandingList[];
};

export type ConstructorStandingList = StandingsListDefaults & {
    ConstructorStandings: ConstructorStanding[];
};

export type ConstructorStanding = {
    Constructor: Constructor;
    position: string;
    positionText: string;
    points: string;
    wins: string;
};
