import { ITaskQuestion } from "./ITaskQuestion";
import { ITaskProperties } from "./ITaskProperties";
import { TTaskAnswerVariants } from "./TTaskAnswerVariants";

export interface ITask {
    question: ITaskQuestion;
    answers: TTaskAnswerVariants;
    properties: ITaskProperties;
}
