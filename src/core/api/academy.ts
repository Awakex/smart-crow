import { Request } from "../request";
import { IAcademyBlock } from "../../types/IAcademyBlock";
import { IPageable } from "../../types/IPageable";
import { IAcademySet } from "../../types/IAcademySet";

export const AcademyAPI = {
    getAcademyBlocks: () => {
        return Request.get<IPageable<IAcademyBlock[]>>(`academy-block?size=10000`);
    },
    getAcademySetsByBlockId: (blockId: number, page: number) => {
        return Request.get<IPageable<IAcademySet[]>>(
            `academy-block/${blockId}/academy-set?page=${page}&size=10`
        );
    },
};
