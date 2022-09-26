import React from "react";
import { StyleSheet, View } from "react-native";
import { ITaskQuestion } from "../../types/ITaskQuestion";
import { ITaskProperties } from "../../types/ITaskProperties";
import { TTaskAnswerVariants } from "../../types/TTaskAnswerVariants";
import CustomText from "../custom-text";
import Tab from "../tab";

interface IProps {
    question: ITaskQuestion;
    properties: ITaskProperties;
    answers: TTaskAnswerVariants;
    step: number;
    totalSteps: number;
    setStep: (step: number) => void;
}

const Player = ({ properties, question, answers, step, totalSteps, setStep }: IProps) => {
    return (
        <View style={styles.player}>
            <View style={styles.content}>
                <CustomText text={question.title} />
            </View>
            <View style={styles.controllers}>
                <Tab
                    isActive={step > 0 && totalSteps > 1}
                    content={<CustomText text={"PREV"} />}
                    onPress={() => setStep(step - 1)}
                />
                <CustomText text={`${step + 1}/${totalSteps}`} />
                <Tab
                    isActive={step < totalSteps - 1 && totalSteps > 1}
                    content={<CustomText text={"NEXT"} />}
                    onPress={() => setStep(step + 1)}
                />
            </View>
        </View>
    );
};

export default Player;

const styles = StyleSheet.create({
    player: {
        flex: 1,
        position: "relative",
    },
    content: {
        flex: 1,
        position: "relative",
    },
    backgroundImage: {
        position: "absolute",
    },
    controllers: {
        height: 55,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 20,
        backgroundColor: "#33b5e5",
    },
});
