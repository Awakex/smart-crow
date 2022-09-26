import { Request } from "../request";
import { IAcademyBlock } from "../../types/IAcademyBlock";
import { IPageable } from "../../types/IPageable";
import { IAcademySet } from "../../types/IAcademySet";
import { IAcademyQuestion } from "../../types/IAcademyQuestion";

export const AcademyAPI = {
    getAcademyBlocks: () => {
        return Request.get<IPageable<IAcademyBlock[]>>(`academy-block?size=10000`);
    },
    getAcademySetsByBlockId: (blockId: number, page: number) => {
        return Request.get<IPageable<IAcademySet[]>>(
            `academy-block/${blockId}/academy-set?page=${page}&size=10`
        );
    },
    getAcademyQuestions: (setId: number) => {
        return Request.get<IAcademyQuestion[]>(`academy-set/${setId}/academy-question`);
    },
};
