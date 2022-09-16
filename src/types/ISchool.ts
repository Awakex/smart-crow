import { ICity } from "./ICity";

export interface ISchool {
    alternateName: string;
    city: ICity;
    id: number;
    lawAddress: string;
    longName: string;
    region: IRegion;
    schoolGuid: string;
    shortName: string;
    sysGuid: string;
}
