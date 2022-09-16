import { ITag } from "./ITag";

export interface IHeaderImageBank {
    fileDownloadUri: string;
    fileName: string;
    fileType: string;
    id: number;
    name: string;
    size: number;
    tags: ITag[];
}
