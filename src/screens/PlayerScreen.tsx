import { View } from "react-native";
import CustomText from "../entries/CustomText";

const PlayerScreen = () => {
    return (
        <View
            style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <CustomText text="PlayerScreen" fontSize={25} />
        </View>
    );
};

export default PlayerScreen;
