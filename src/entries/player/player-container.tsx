import React, { useEffect, useState } from "react";
import { View } from "react-native";
import Player from "./player";
import { ITask } from "../../types/ITask";
import { EPlayerMode } from "../../types/EPlayerMode";
import { AcademyAPI } from "../../core/api/academy";
import { IAcademyQuestion } from "../../types/IAcademyQuestion";
import { QuestionAPI } from "../../core/api/question";
import { ETaskType } from "../../types/ETaskType";
import { useAppDispatch } from "../../hooks/redux-hooks";
import { updateIsTabsOpen } from "../../redux/slices/appSlice";
import { PlayerAPI } from "../../core/api/player";
import useNotificationQueue from "../../hooks/useNotificationQueue";
import { NotificationTaskResolve } from "../notifications/content/notification-task-resolve";

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
    const [selectedAnswers, setSelectedAnswers] = useState<undefined | number[]>(undefined);
    const { activeNotification, removeNotificationFromQueue, addNotificationInQueue } =
        useNotificationQueue();

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
        setSelectedAnswers(undefined);

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

    const handleSelectAnswer = (id: number) => {
        if (selectedAnswers?.includes(id)) {
            setSelectedAnswers((prev) => prev?.filter((answer) => answer !== id));
        } else {
            setSelectedAnswers((prev) => [...(prev || []), id]);
        }
    };

    const handleNextQuestion = () => {
        if (!tasks) {
            return;
        }

        if (step < tasks.length - 1) {
            setStep((prev) => prev + 1);
        }
    };

    const handleCheckAnswer = () => {
        if (!currentTask) {
            return;
        }

        let prefixTask = "";
        let suffixMode = "";
        let questionType: ETaskType = currentTask.question.objectType;

        switch (questionType) {
            case ETaskType.ClassicTestDto:
                prefixTask = "classic-test";
                break;
        }

        switch (mode) {
            case EPlayerMode.ACADEMY:
                suffixMode = "submit-answers-academy";
                break;
        }

        if (prefixTask && suffixMode && selectedAnswers) {
            PlayerAPI.checkAnswers(prefixTask, suffixMode, currentTask.question.id, selectedAnswers)
                .then((response) => {
                    addNotificationInQueue(
                        5,
                        <NotificationTaskResolve
                            key="task-resolve"
                            isCorrect={response.data}
                            handleNext={() => {
                                removeNotificationFromQueue(null, "task-resolve");
                                handleNextQuestion();
                            }}
                        />
                    );
                })
                .catch((e) => console.log("error check answers", e));
        }
    };

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
                handleSelectAnswer={handleSelectAnswer}
                selectedAnswers={selectedAnswers}
                handleCheckAnswer={handleCheckAnswer}
                activeNotification={activeNotification}
            />
        </View>
    );
};

export default PlayerContainer;
