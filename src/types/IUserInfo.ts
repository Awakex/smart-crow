import { IAvatarImageBank } from "./IAvatarImageBank";
import { ICity } from "./ICity";
import { IClassTag } from "./IClassTag";
import { IHeaderImageBank } from "./IHeaderImageBank";
import { ISchool } from "./ISchool";
import { ITag } from "./ITag";
import { IUser } from "./IUser";

export interface IUserInfo {
    avatarImageBank: IAvatarImageBank;
    city: ICity;
    classTag: IClassTag;
    gender: string;
    headerImageBank: IHeaderImageBank;
    isStudyMode: boolean;
    region: IRegion;
    school: ISchool;
    settings: string;
    tags: ITag[];
    teacherPosition: boolean;
    updatedClassTag: Date;
    userDto: IUser;
}
