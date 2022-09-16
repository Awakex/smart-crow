import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import CustomText from "./CustomText";
import Tab from "./Tab";

const Tabs = () => {
    const navigation = useNavigation<any>();
    const [activeTab, setActiveTab] = useState<string>("Academy");

    return (
        <View style={styles.container}>
            <Tab
                content={<CustomText text={"Академия"} color={"black"} />}
                onPress={() => {
                    navigation.navigate("Academy");
                    setActiveTab("Academy");
                }}
                isActive={activeTab === "Academy"}
            />
            <Tab
                content={<CustomText text={"Меню?"} color={"black"} />}
                onPress={() => {
                    navigation.navigate("Player");
                    setActiveTab("Player");
                }}
                isActive={activeTab === "Player"}
            />
            <Tab
                content={<CustomText text={"Профиль"} color={"black"} />}
                onPress={() => {
                    navigation.navigate("Profile");
                    setActiveTab("Profile");
                }}
                isActive={activeTab === "Profile"}
            />
        </View>
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
