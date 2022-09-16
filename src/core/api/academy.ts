import { Request } from "../request";
import { IAcademyBlock } from "../../types/IAcademyBlock";

export const AcademyAPI = {
    getAcademyBlocks: () => {
        return Request.get<{ content: IAcademyBlock[] }>(`academy-block?size=10000`);
    },
};
