import { View } from "react-native";
import CustomText from "../entries/CustomText";

const ProfileScreen = () => {
    return (
        <View
            style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <CustomText text="ProfileScreen" fontSize={25} />
        </View>
    );
};

export default ProfileScreen;
