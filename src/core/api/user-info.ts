import { Request } from "../request";
import { IUserInfo } from "../../types/IUserInfo";

export const UserInfoAPI = {
    getUserInfo: () => {
        return Request.get<IUserInfo>("user-info");
    },
};
