import { IAudio } from "./IAudio";
import { ELevelAccess } from "./ELevelAccess";
import { ITag } from "./ITag";
import { IUser } from "./IUser";
import { ETaskType } from "./ETaskType";

export interface ITaskQuestion {
    audio: IAudio;
    hidden: boolean;
    id: number;
    isFree: boolean;
    isOpen: boolean;
    levelAccess: ELevelAccess;
    limitMilliSec: number;
    objectType: ETaskType;
    tags: ITag[];
    title: string;
    minLength: number;
    maxLength: number;
    user: IUser;
}
