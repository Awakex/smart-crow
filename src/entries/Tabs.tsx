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
                content={<CustomText text={"Academy"} />}
                onPress={() => {
                    navigation.navigate("Academy");
                    setActiveTab("Academy");
                }}
                isActive={activeTab === "Academy"}
            />
            <Tab
                content={<CustomText text={"Player"} />}
                onPress={() => {
                    navigation.navigate("Player");
                    setActiveTab("Player");
                }}
                isActive={activeTab === "Player"}
            />
            <Tab
                content={<CustomText text={"Profile"} />}
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
        flexDirection: "row",
        paddingLeft: 20,
        paddingRight: 20,
        height: 70,
        backgroundColor: "white",
    },
});

export default Tabs;
