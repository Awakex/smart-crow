import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { ETaskAnswerType } from "../../../types/ETaskAnswerType";
import { TTaskAnswerVariants } from "../../../types/TTaskAnswerVariants";
import CustomText from "../../custom-text";
import AnswersClassicText from "./answers-classic-text";
import { ITaskAnswerClassicText } from "../../../types/ITaskAnswerClassicText";
import { ITaskProperties } from "../../../types/ITaskProperties";

interface IProps {
    answers?: TTaskAnswerVariants;
    properties?: ITaskProperties;
}

const Answers = ({ answers, properties }: IProps) => {
    const renderAnswers = () => {
        if (!answers) {
            return <CustomText text={"No answers..."} />;
        }

        switch (answers[0].objectType) {
            case ETaskAnswerType.ClassicTestAnswerVariantTextDto:
                return (
                    <AnswersClassicText
                        answers={answers as ITaskAnswerClassicText[]}
                        isShort={!!properties?.isShortContainer}
                    />
                );
                break;
        }

        return <CustomText text={"Component under development..."} />;
    };

    return (
        <View style={styles.wrapper}>
            {answers?.length && <ScrollView>{renderAnswers()}</ScrollView>}
        </View>
    );
};

export default Answers;

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        paddingRight: 20,
        paddingLeft: 20,
        paddingTop: 10,
    },
});
