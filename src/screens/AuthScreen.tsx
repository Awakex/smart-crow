import React from "react";
import { ActivityIndicator, Button, Text, TextInput, View } from "react-native";

// @ts-ignore
import { useKeycloak } from "expo-keycloak-auth";

const AuthScreen = () => {
    const { ready, login, isLoggedIn, token, logout } = useKeycloak();

    if (!ready) return <ActivityIndicator />;

    if (!isLoggedIn)
        return (
            <View style={{ margin: 24 }}>
                <Button onPress={() => login()} title="Login" />
            </View>
        );

    return (
        <View style={{ margin: 24 }}>
            <Text style={{ fontSize: 17, marginBottom: 24 }}>Logged in!</Text>
            <Text>Your Access Token</Text>
            <TextInput value={token}></TextInput>
            <Button onPress={logout} title={"Logout"} />
        </View>
    );
};

export default AuthScreen;
