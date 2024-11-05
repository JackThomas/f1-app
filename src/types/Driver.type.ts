import { ApiDefaults } from "./ApiDefaults.type";
import { StandingTableDefaults } from "./StandingsTable.type";

export type DriverApiData = {
    MRData?: ApiDefaults & {
        DriverTable: DriverTable;
    };
};

export type DriverTable = StandingTableDefaults & {
    season: string;
    Drivers: Driver[];
};

export type Driver = {
    driverId: string;
    permanentNumber: string;
    code: string;
    url: string;
    givenName: string;
    familyName: string;
    dateOfBirth: string;
    nationality: string;
};
