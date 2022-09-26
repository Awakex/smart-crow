import { Request } from "../request";

export const PlayerAPI = {
    checkAnswers: (prefix: string, suffix: string, taskId: number, answers: number[]) => {
        return Request.post<boolean>(`${prefix}/${taskId}/${suffix}`, answers);
    },
};
