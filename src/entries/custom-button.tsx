import React from "react";
import CustomText from "./custom-text";
import { StyleSheet, TouchableOpacity } from "react-native";

interface IProps {
    disabled: boolean;
    handleClick: () => void;
    width?: number;
    height?: number;
}

const CustomButton = ({ disabled, handleClick, width = 150, height = 40 }: IProps) => {
    return (
        <TouchableOpacity
            style={{
                ...styles.button,
                backgroundColor: disabled ? "lightgrey" : "#3fd200",
                width,
                height,
            }}
            onPress={handleClick}
            disabled={disabled}
        >
            <CustomText text={"Ответить"} color={disabled ? "black" : "white"} />
        </TouchableOpacity>
    );
};

export default CustomButton;

const styles = StyleSheet.create({
    button: {
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 8,
    },
});
