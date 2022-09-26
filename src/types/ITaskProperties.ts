import { IImage } from "./IImage";
import { INarrator } from "./INarrator";
import { EQuestionDifficult } from "./EQuestionDifficult";

export interface ITaskProperties {
    backgroundImage: IImage;
    id: number;
    isRoundedAnswer: boolean;
    isShortContainer: boolean;
    narrator: INarrator;
    questionDifficult: EQuestionDifficult;
    settings: string;
    sizeContainer: string;
    sizeImage: string;
    sizeText: number;
    sizeTitle: number;
}
