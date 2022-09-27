import React from "react";
import { StyleSheet, View } from "react-native";
import { ITaskQuestion } from "../../types/ITaskQuestion";
import { ITaskProperties } from "../../types/ITaskProperties";
import { TTaskAnswerVariants } from "../../types/TTaskAnswerVariants";
import { API_URL } from "../../core/url";
import Question from "./question";
import QuestionImage from "./question-image";
import Controllers from "./controllers";
import Answers from "./answers/answers";
import { NotificationWrapper } from "../notifications/notification-wrapper";

interface IProps {
    question?: ITaskQuestion;
    properties?: ITaskProperties;
    answers?: TTaskAnswerVariants;
    step: number;
    totalSteps: number;
    selectedAnswers?: number[];
    setStep: (step: number) => void;
    handleSelectAnswer: (answerId: number) => void;
    handleCheckAnswer: () => void;
    activeNotification: React.ReactNode;
}

const Player = ({
    properties,
    question,
    answers,
    step,
    totalSteps,
    setStep,
    handleSelectAnswer,
    selectedAnswers,
    handleCheckAnswer,
    activeNotification,
}: IProps) => {
    return (
        <React.Fragment>
            <View style={styles.player}>
                <View style={styles.content}>
                    <Question
                        text={question?.questionText || "Нет вопроса"}
                        narrator={properties?.narrator}
                    />

                    {question?.imageQuestion && (
                        <QuestionImage
                            imageURL={API_URL + question.imageQuestion.fileDownloadUri.slice(1)}
                        />
                    )}

                    {answers?.length && (
                        <Answers
                            answers={answers}
                            properties={properties}
                            selectedAnswers={selectedAnswers}
                            handleSelectAnswer={handleSelectAnswer}
                        />
                    )}
                </View>

                <Controllers
                    step={step}
                    totalSteps={totalSteps}
                    setStep={setStep}
                    isAnswerButtonEnabled={!!selectedAnswers?.length}
                    handleCheckAnswer={handleCheckAnswer}
                />
            </View>

            <NotificationWrapper>{activeNotification}</NotificationWrapper>
        </React.Fragment>
    );
};

export default Player;

const styles = StyleSheet.create({
    player: {
        flex: 1,
        position: "relative",
        backgroundColor: "#97dffc",
    },
    content: {
        flex: 1,
        position: "relative",
    },
    backgroundImage: {
        position: "absolute",
    },
});
