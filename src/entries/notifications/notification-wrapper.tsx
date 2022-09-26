import { StyleSheet, View } from "react-native";
import React from "react";

interface IProps {
    children: React.ReactNode;
}

export const NotificationWrapper = ({ children }: IProps) => {
    return <View style={styles.wrapper}>{children}</View>;
};
const styles = StyleSheet.create({
    wrapper: {
        position: "absolute",
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        zIndex: 9999,
    },
});
