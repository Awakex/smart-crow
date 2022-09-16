import * as React from "react";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { keycloakConfiguration } from "./src/core/auth/keycloak-config";
import { AppContent } from "./AppContent";

// @ts-ignore
import { KeycloakProvider } from "expo-keycloak-auth";

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
                    <AppContent />
                </NavigationContainer>
            </Provider>
        </KeycloakProvider>
    );
};

export default App;
