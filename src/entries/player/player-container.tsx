import React, { useEffect, useState } from "react";
import { View } from "react-native";
import Player from "./player";
import { ITask } from "../../types/ITask";
import CustomText from "../custom-text";
import { EPlayerMode } from "../../types/EPlayerMode";
import { AcademyAPI } from "../../core/api/academy";
import { IAcademyQuestion } from "../../types/IAcademyQuestion";
import { QuestionAPI } from "../../core/api/question";
import { ETaskType } from "../../types/ETaskType";
import { useAppDispatch } from "../../hooks/redux-hooks";
import { updateIsTabsOpen } from "../../redux/slices/appSlice";

interface IProps {
    setId?: number;
    taskId?: number;
    mode: EPlayerMode;
}

const PlayerContainer = ({ taskId, setId, mode }: IProps) => {
    const dispatch = useAppDispatch();
    const [currentTask, setCurrentTask] = useState<undefined | ITask>(undefined);
    const [tasks, setTasks] = useState<IAcademyQuestion[] | undefined>(undefined);
    const [loadedTasks, setLoadedTasks] = useState<ITask[] | []>([]);
    const [step, setStep] = useState(0);

    useEffect(() => {
        dispatch(updateIsTabsOpen(false));
        return () => {
            dispatch(updateIsTabsOpen(true));
        };
    }, []);

    useEffect(() => {
        if (setId) {
            loadSet();
            return;
        }
    }, [taskId, setId]);

    useEffect(() => {
        if (!tasks) {
            setCurrentTask(undefined);
            setStep(0);
            return;
        }

        if (tasks.length) {
            let task = tasks[step];
            getTask(task.question.id, task.question.objectType);
        }
    }, [tasks, step]);

    const loadSet = () => {
        if (!setId) {
            console.log("Set ID not defined");
            return;
        }

        let API;
        switch (mode) {
            case EPlayerMode.ACADEMY:
                API = AcademyAPI.getAcademyQuestions(setId);
                break;
        }

        if (!API) {
            console.log("API not defined");
            return;
        }

        API.then((response) => {
            let setForSave = response.data.sort((a, b) => (a.position > b.position && 1) || -1);
            setTasks(setForSave);
        });
    };

    const getTask = (taskIdForLoad: number, taskType: ETaskType) => {
        let existedTask = loadedTasks?.find((task) => task.question.id === taskIdForLoad);

        if (existedTask) {
            setCurrentTask(existedTask);
            return;
        }

        let API;

        switch (mode) {
            case EPlayerMode.ACADEMY:
                API = QuestionAPI.getQuestionByIdForAcademy(taskIdForLoad);
                break;
        }

        API.then((response) => {
            let task = response.data;
            let taskForSave: ITask;
            switch (taskType) {
                case ETaskType.ClassicTestDto:
                    taskForSave = {
                        answers: task.classicTestAnswerVariants,
                        properties: task.questionProperties,
                        question: task.classicTest,
                    };
                    break;
            }

            if (taskForSave) {
                setLoadedTasks((prev) => [...prev, taskForSave]);
                setCurrentTask(taskForSave);
            } else {
                setCurrentTask(undefined);
            }
        });
    };

    return (
        <View style={{ flex: 1 }}>
            <Player
                question={currentTask?.question}
                properties={currentTask?.properties}
                answers={currentTask?.answers}
                step={step}
                setStep={setStep}
                totalSteps={tasks?.length || 1}
            />
        </View>
    );
};

export default PlayerContainer;
