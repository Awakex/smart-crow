import { IImage } from "./IImage";
import { ETaskAnswerType } from "./ETaskAnswerType";

export interface ITaskAnswerClassicImage {
    answerImageBank: IImage;
    id: number;
    objectType: ETaskAnswerType.ClassicTestAnswerVariantImageBankDto;
}
