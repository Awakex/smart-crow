import { View } from "react-native";
import CustomText from "./CustomText";

const DragAndDropZone = () => {
    return (
        <View
            style={{
                alignItems: "center",
                justifyContent: "center",
                flex: 1,
            }}
        >
            <View
                style={{
                    backgroundColor: "gray",
                    width: 588,
                    height: 450,
                    transform: [{ scale: 0.6 }],
                }}
            >
                <View>
                    {[
                        { position: 0, x: 65, y: 347, center: 113 },
                        { position: 1, x: 65, y: 137, center: 118 },
                        { position: 2, x: 231, y: 137, center: 292 },
                        { position: 3, x: 419, y: 347, center: 484 },
                        { position: 4, x: 229, y: 347, center: 295 },
                        { position: 5, x: 407, y: 137, center: 474 },
                    ].map((item) => {
                        return (
                            <View
                                key={item.position}
                                style={{
                                    justifyContent: "center",
                                    alignItems: "center",
                                    position: "absolute",
                                    left: item.x,
                                    top: item.y,
                                    backgroundColor: "pink",
                                    width: 50,
                                    height: 50,
                                }}
                            >
                                <CustomText text={item.position.toString()} fontSize={25} />
                            </View>
                        );
                    })}
                </View>
            </View>

            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    flexWrap: "wrap",
                }}
            >
                {[
                    {
                        id: 4102,
                        text: "stamp",
                    },
                    {
                        id: 4106,
                        text: "letterbox",
                    },
                    {
                        id: 4103,
                        text: "address",
                    },
                    {
                        id: 4101,
                        text: "letter",
                    },
                    {
                        id: 4105,
                        text: "postman",
                    },
                    {
                        id: 4104,
                        text: "envelope",
                    },
                ].map((answer) => (
                    <View
                        key={answer.id}
                        style={{
                            marginRight: 15,
                            marginTop: 5,
                            padding: 10,
                            backgroundColor: "lightblue",
                        }}
                    >
                        <CustomText text={answer.text} />
                    </View>
                ))}
            </View>
        </View>
    );
};

export default DragAndDropZone;
