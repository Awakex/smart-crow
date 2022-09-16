import { SafeAreaView, StyleSheet, View } from "react-native";
import AcademyScreen from "./src/screens/AcademyScreen";
import PlayerScreen from "./src/screens/PlayerScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import AuthScreen from "./src/screens/AuthScreen";
import Tabs from "./src/entries/Tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ActivityIndicator } from "@ant-design/react-native";
import { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

// @ts-ignore
import { useKeycloak } from "expo-keycloak-auth";
import { useAppDispatch, useAppSelector } from "./src/hooks/redux-hooks";
import { getUserInfo } from "./src/redux/thunks/appThunk";

const Stack = createNativeStackNavigator();

export const AppContent = () => {
    const { ready, isLoggedIn, token } = useKeycloak();
    const { user } = useAppSelector((state) => state.app);
    const dispatch = useAppDispatch();

    const saveTokenInStorage = async (token: string) => {
        try {
            await AsyncStorage.setItem("token", token);
        } catch (e) {
            console.log("Error when saving token", e);
        }
    };

    const removeTokenFromStorage = async () => {
        try {
            await AsyncStorage.removeItem("token");
        } catch (e) {
            console.log("Error when removing token", e);
        }
    };

    useEffect(() => {
        if (token) {
            saveTokenInStorage(token);
        } else {
            removeTokenFromStorage();
        }
    }, [token, ready, isLoggedIn]);

    useEffect(() => {
        if (isLoggedIn && !user) {
            dispatch(getUserInfo());
        }
    }, [isLoggedIn]);

    if (!ready) {
        return (
            <View style={styles.loader}>
                <ActivityIndicator size={"large"} text={"Умная Ворона загружается..."} />
            </View>
        );
    }

    if (!isLoggedIn) {
        return <AuthScreen />;
    }

    return (
        <View style={styles.container}>
            <SafeAreaView style={styles.content}>
                <Stack.Navigator
                    initialRouteName="Academy"
                    screenOptions={{
                        headerShown: false,
                    }}
                >
                    <Stack.Screen name="Academy" component={AcademyScreen} />
                    <Stack.Screen name="Player" component={PlayerScreen} />
                    <Stack.Screen name="Profile" component={ProfileScreen} />
                </Stack.Navigator>
            </SafeAreaView>

            <Tabs />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        flex: 1,
    },
    loader: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});
