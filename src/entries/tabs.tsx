import { useNavigation } from "@react-navigation/native";
import { useEffect, useRef, useState } from "react";
import { Animated, StyleSheet } from "react-native";
import CustomText from "./custom-text";
import Tab from "./tab";

const Tabs = () => {
    const navigation = useNavigation<any>();
    const [activeTab, setActiveTab] = useState<string>("Academy");

    const appear = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(appear, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
        }).start();
    }, [appear]);

    return (
        <Animated.View
            style={{
                ...styles.container,
                opacity: appear,
                transform: [
                    {
                        translateX: appear.interpolate({
                            inputRange: [0, 1],
                            outputRange: [-500, 0],
                        }),
                    },
                ],
            }}
        >
            <Tab
                content={<CustomText text={"Академия"} color={"black"} />}
                onPress={() => {
                    navigation.navigate("Academy");
                    setActiveTab("Academy");
                }}
                isActive={true}
            />
            <Tab
                content={<CustomText text={"Меню?"} color={"black"} />}
                onPress={() => {
                    navigation.navigate("Player");
                    setActiveTab("Player");
                }}
                isActive={true}
            />
            <Tab
                content={<CustomText text={"Профиль"} color={"black"} />}
                onPress={() => {
                    navigation.navigate("Profile");
                    setActiveTab("Profile");
                }}
                isActive={true}
            />
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        paddingLeft: 20,
        paddingRight: 20,
        height: 55,
    },
});

export default Tabs;
