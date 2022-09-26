import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

interface IProps {
    onPress: () => void;
    content: React.ReactNode;
    isActive: boolean;
}

const Tab = ({ content, onPress, isActive }: IProps) => {
    return (
        <TouchableOpacity
            style={{ ...styles.tab, backgroundColor: isActive ? "white" : "lightgrey" }}
            onPress={onPress}
            disabled={!isActive}
        >
            {content}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    tab: {
        justifyContent: "center",
        alignItems: "center",
        height: 35,
        width: 100,
        backgroundColor: "white",
        borderRadius: 20,
    },
});

export default Tab;
