import { StyleSheet, TouchableOpacity, View } from "react-native";
import CustomText from "../../custom-text";

interface IProps {
    isCorrect: boolean;
    handleNext: () => void;
}

export const NotificationTaskResolve = ({ isCorrect, handleNext }: IProps) => {
    return (
        <View style={styles.wrapper}>
            <CustomText
                text={`${isCorrect ? "Правильный ответ!" : "Неправильный ответ!"}`}
                color={isCorrect ? "green" : "red"}
            />

            <TouchableOpacity onPress={handleNext}>
                <CustomText text={`NEXT`} />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        backgroundColor: "white",
        maxWidth: 300,
        maxHeight: 400,
        width: "100%",
        height: "100%",
        borderRadius: 20,
    },
});
