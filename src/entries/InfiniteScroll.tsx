import React from "react";
import { StyleSheet } from "react-native";
import CustomText from "./CustomText";

interface IProps {}

const InfiniteScroll = ({}: IProps) => {
    return <CustomText text={"test"} />;
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

export default InfiniteScroll;
