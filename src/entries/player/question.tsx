import React from "react";
import { View, StyleSheet } from "react-native";
import { INarrator } from "../../types/INarrator";
import { SvgUri } from "react-native-svg";
import { API_URL } from "../../core/url";
import CustomText from "../custom-text";

interface IProps {
    text: string;
    narrator?: INarrator;
}

const Question = ({ text, narrator }: IProps) => {
    return (
        <View style={styles.wrapper}>
            {narrator && (
                <SvgUri
                    uri={API_URL + narrator?.image.fileDownloadUri.slice(1)}
                    width={100}
                    height={100}
                />
            )}

            <CustomText text={text} style={styles.text} />
        </View>
    );
};

export default Question;

const styles = StyleSheet.create({
    wrapper: {
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        height: 100,
        paddingLeft: 20,
        paddingRight: 20,
    },
    text: {
        width: "70%",
    },
});
