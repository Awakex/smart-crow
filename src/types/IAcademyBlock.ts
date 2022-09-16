import { IImage } from "./IImage";
import { IClassTag } from "./IClassTag";

export interface IAcademyBlock {
    avatar: IImage;
    background: IImage;
    cardBackground: IImage;
    classTag: IClassTag;
    countQuestionAll: number;
    countQuestionWinByUser: number;
    id: number;
    logo: IImage;
    name: string;
    nameTwo: string;
}
