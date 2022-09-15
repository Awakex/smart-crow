import { View } from "react-native";
import DragAndDropZone from "../entries/DragAndDropZone";

const AcademyScreen = () => {
    return (
        <View
            style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <DragAndDropZone />
        </View>
    );
};

export default AcademyScreen;
