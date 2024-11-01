import { type ApiDefaults } from "./ApiDefaults.type";
import { type Constructor } from "./Constructor.type";
import { type Driver } from "./Driver.type";
import { type StandingsListDefaults } from "./StandingsList.type";
import { type StandingTableDefaults } from "./StandingsTable.type";

export type DriverStandingsApiData = {
    MRData?: ApiDefaults & {
        StandingsTable: DriverStandingTable;
    };
};

export type DriverStandingTable = StandingTableDefaults & {
    StandingsLists: DriverStandingList[];
};

export type DriverStandingList = StandingsListDefaults & {
    DriverStandings: DriverStanding[];
};

export type DriverStanding = {
    Constructors: Constructor[];
    Driver: Driver;
    position: string;
    positionText: string;
    points: string;
    wins: string;
};
