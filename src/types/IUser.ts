import { IImage } from "./IImage";

export interface IUser {
    firstName: string;
    id: number;
    lastName: string;
    nickName: string;
    userLogo: IImage;
    userName: string;
}
