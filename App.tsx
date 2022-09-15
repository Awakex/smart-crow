import * as React from "react";

import { Provider } from "react-redux";
import { store } from "./src/redux/store";
import { NavigationContainer } from "@react-navigation/native";
import AcademyScreen from "./src/screens/AcademyScreen";
import PlayerScreen from "./src/screens/PlayerScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import { SafeAreaView, StyleSheet, View } from "react-native";
import Tabs from "./src/entries/Tabs";
import AuthScreen from "./src/screens/AuthScreen";
// @ts-ignore
import { KeycloakProvider } from "expo-keycloak-auth";
import { keycloakConfiguration } from "./src/core/auth/keycloak-config";

const Stack = createNativeStackNavigator();

const App = () => {
    const [fontsLoaded] = useFonts({
        "Nunito-Bold": require("./assets/fonts/nunito-bold.ttf"),
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <KeycloakProvider {...keycloakConfiguration}>
            <Provider store={store}>
                <NavigationContainer>
                    <View style={styles.container}>
                        <SafeAreaView style={styles.content}>
                            <Stack.Navigator
                                initialRouteName="Auth"
                                screenOptions={{
                                    headerShown: false,
                                }}
                            >
                                <Stack.Screen name="Academy" component={AcademyScreen} />
                                <Stack.Screen name="Player" component={PlayerScreen} />
                                <Stack.Screen name="Profile" component={ProfileScreen} />
                                <Stack.Screen name="Auth" component={AuthScreen} />
                            </Stack.Navigator>
                        </SafeAreaView>

                        <Tabs />
                    </View>
                </NavigationContainer>
            </Provider>
        </KeycloakProvider>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        flex: 1,
    },
});

export default App;
