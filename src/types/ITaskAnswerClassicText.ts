import { ETaskAnswerType } from "./ETaskAnswerType";

export interface ITaskAnswerClassicText {
    id: number;
    text: string;
    objectType: ETaskAnswerType.ClassicTestAnswerVariantTextDto;
}
