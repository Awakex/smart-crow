import React from "react";
import { Image, StyleSheet, View } from "react-native";

interface IProps {
    imageURL: string;
}

const QuestionImage = ({ imageURL }: IProps) => {
    return (
        <View style={styles.wrapper}>
            <Image
                source={{
                    uri: imageURL,
                }}
                style={{ ...styles.image }}
            />
        </View>
    );
};

export default QuestionImage;

const styles = StyleSheet.create({
    wrapper: {
        height: 250,
        paddingRight: 20,
        paddingLeft: 20,
    },
    image: {
        width: "100%",
        height: "100%",
        borderRadius: 8,
        borderWidth: 1,
    },
});
