import { Button, View } from "react-native";
import CustomText from "../entries/CustomText";
import { useAppSelector } from "../hooks/redux-hooks";
// @ts-ignore
import { useKeycloak } from "expo-keycloak-auth";
import React from "react";

const ProfileScreen = () => {
    const { user, isUserLoading } = useAppSelector((state) => state.app);
    const { isLoggedIn, logout } = useKeycloak();

    return (
        <View
            style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            {user && (
                <View>
                    <CustomText
                        text={`Привет, ${user.userDto.firstName} ${user.userDto.lastName}!`}
                        fontSize={20}
                    />

                    <View>
                        <View
                            style={{
                                backgroundColor: "pink",
                                borderRadius: 20,
                                shadowColor: "#000",
                                shadowOffset: { width: 0, height: 1 },
                                shadowOpacity: 0.8,
                                shadowRadius: 2,
                                elevation: 5,
                                padding: 20,
                                marginBottom: 20,
                                marginTop: 20,
                            }}
                        >
                            <CustomText text={`Школа: ${user.school.shortName}`} />
                            <CustomText text={`Город: ${user.city.altName}`} />
                            <CustomText text={`Класс: ${user.classTag.name}`} />
                        </View>
                    </View>

                    {isLoggedIn && <Button onPress={logout} title={"Выход"} />}
                </View>
            )}
        </View>
    );
};

export default ProfileScreen;
