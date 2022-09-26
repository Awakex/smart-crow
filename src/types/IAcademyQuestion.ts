import { IImage } from "./IImage";
import { ITaskQuestion } from "./ITaskQuestion";
import { IAcademyLog } from "./IAcademyLog";

export interface IAcademyQuestion {
    academyBlockAvatar: IImage;
    academyBlockId: number;
    academyBlockName: string;
    academyLog: IAcademyLog;
    academySetName: string;
    id: number;
    isBuySubscription: boolean;
    position: number;
    question: ITaskQuestion;
}
