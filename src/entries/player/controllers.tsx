import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import Tab from "../tab";
import CustomText from "../custom-text";
import { useNavigation } from "@react-navigation/native";
import CustomButton from "../custom-button";

interface IProps {
    step: number;
    totalSteps: number;
    setStep: (step: number) => void;
    isAnswerButtonEnabled: boolean;
    handleCheckAnswer: () => void;
}

const Controllers = ({
    step,
    totalSteps,
    setStep,
    isAnswerButtonEnabled,
    handleCheckAnswer,
}: IProps) => {
    const navigation = useNavigation();

    return (
        <View style={styles.controllers}>
            <View style={styles.mainControllers}>
                <CustomButton disabled={!isAnswerButtonEnabled} handleClick={handleCheckAnswer} />
            </View>

            <View style={styles.secondaryControllers}>
                <Tab
                    isActive={step > 0 && totalSteps > 1}
                    content={<CustomText text={"PREV"} />}
                    onPress={() => setStep(step - 1)}
                    wrapperStyles={styles.tab}
                />
                <View style={styles.secondaryControllersCenter}>
                    <CustomText text={`${step + 1}/${totalSteps}`} style={styles.steps} />
                    <TouchableOpacity style={styles.exitButton} onPress={() => navigation.goBack()}>
                        <CustomText text={"Exit"} style={styles.exitButton} />
                    </TouchableOpacity>
                </View>

                <Tab
                    isActive={step < totalSteps - 1 && totalSteps > 1}
                    content={<CustomText text={"NEXT"} />}
                    onPress={() => setStep(step + 1)}
                    wrapperStyles={styles.tab}
                />
            </View>
        </View>
    );
};

export default Controllers;

const styles = StyleSheet.create({
    controllers: {
        height: 80,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: "#33b5e5",
    },
    mainControllers: {
        height: 35,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 5,
    },
    secondaryControllers: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: 30,
    },
    secondaryControllersCenter: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "white",
        width: "28%",
        borderRadius: 20,
        height: 25,
    },
    tab: {
        height: 25,
        width: "28%",
    },
    steps: {
        textAlignVertical: "center",
    },
    exitButton: {
        height: 20,
        marginLeft: 10,
        color: "red",
    },
});
