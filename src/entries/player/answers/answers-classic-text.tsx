import React from "react";
import { StyleSheet, View } from "react-native";
import { TTaskAnswerVariants } from "../../../types/TTaskAnswerVariants";
import { ITaskAnswerClassicText } from "../../../types/ITaskAnswerClassicText";
import CustomText from "../../custom-text";

interface IProps {
    answers: ITaskAnswerClassicText[];
    isShort: boolean;
}

const AnswersClassicText = ({ answers, isShort }: IProps) => {
    return (
        <View
            style={{
                ...styles.wrapper,
                flexDirection: isShort ? "row" : "column",
                justifyContent: "space-between",
                flexWrap: "wrap",
            }}
        >
            {answers.map((answer) => (
                <View
                    key={answer.id}
                    style={{
                        ...styles.answer,
                        width: isShort ? "48%" : "100%",
                    }}
                >
                    <CustomText text={answer.text} style={styles.text} />
                </View>
            ))}
        </View>
    );
};

export default AnswersClassicText;

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        width: "100%",
    },
    answer: {
        backgroundColor: "white",
        width: "100%",
        minHeight: 40,
        borderRadius: 8,
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 10,
        padding: 10,
    },
    text: {
        textAlign: "center",
    },
});
