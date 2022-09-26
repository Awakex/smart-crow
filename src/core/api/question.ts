import { Request } from "../request";

export const QuestionAPI = {
    getQuestionByIdForAcademy: (taskId: number) => {
        return Request.get<any>(`question/${taskId}/all-for-academy`);
    },
};
