import { IAudio } from "./IAudio";
import { ELevelAccess } from "./ELevelAccess";
import { ITag } from "./ITag";
import { IUser } from "./IUser";
import { ETaskType } from "./ETaskType";
import { IImage } from "./IImage";

export interface ITaskQuestion {
    audio: IAudio;
    hidden: boolean;
    id: number;
    isFree: boolean;
    isOpen: boolean;
    levelAccess: ELevelAccess;
    limitMilliSec: number;
    objectType: ETaskType;
    imageQuestion: IImage;
    tags: ITag[];
    title: string;
    questionText: string;
    minLength: number;
    maxLength: number;
    user: IUser;
}
