import {
    ImageBackground,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    View,
} from "react-native";
import CustomText from "../entries/CustomText";
import { ActivityIndicator, Card, SegmentedControl } from "@ant-design/react-native";
// @ts-ignore
import Background from "../../assets/images/backgrounds/academy.png";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/redux-hooks";
import { getAcademyBlocks } from "../redux/thunks/academyThunk";
import { IAcademyBlock } from "../types/IAcademyBlock";

const AcademyScreen = ({ navigation }: any) => {
    const { academyBlocks, isAcademyLoading } = useAppSelector((state) => state.academy);
    const [blocksForShow, setBlocksForShow] = useState<IAcademyBlock[] | undefined>(undefined);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getAcademyBlocks());
    }, []);

    const [selectedClassIndex, setSelectedClassIndex] = useState<number>(1);

    useEffect(() => {
        if (!academyBlocks) {
            return;
        }

        let filteredBlocks = academyBlocks.filter(
            (block) => block.classTag.id === selectedClassIndex
        );

        setBlocksForShow(filteredBlocks);
    }, [selectedClassIndex, academyBlocks]);

    return (
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: "pink",
            }}
        >
            <ImageBackground source={Background} style={styles.backgroundImage} />
            <View
                style={{
                    flex: 1,
                }}
            >
                {isAcademyLoading ? (
                    <ActivityIndicator text={"Академия загружается..."} size={"large"} />
                ) : (
                    <View style={{ flex: 1 }}>
                        {blocksForShow ? (
                            <View
                                style={{
                                    flex: 1,
                                    backgroundColor: "rgba(25, 55, 55, 0.8)",
                                    paddingTop: 10,
                                    paddingLeft: 20,
                                    paddingRight: 20,
                                }}
                            >
                                <View>
                                    <CustomText text={"Класс"} color={"white"} />
                                    <SegmentedControl
                                        style={{ backgroundColor: "white" }}
                                        values={["1", "2", "3", "4"]}
                                        tintColor={"#33b5e5"}
                                        onValueChange={(e: any) => setSelectedClassIndex(+e)}
                                    />
                                </View>

                                <ScrollView style={{ marginTop: 20 }}>
                                    {blocksForShow.map((block) => (
                                        <View key={block.id} style={{ marginTop: 5 }}>
                                            <Card>
                                                <Card.Body>
                                                    <CustomText
                                                        text={`${block.name}`}
                                                        color={"black"}
                                                    />
                                                    <CustomText
                                                        text={`Класс: ${block.classTag.name}`}
                                                        color={"black"}
                                                    />

                                                    <TouchableOpacity
                                                        onPress={() => {
                                                            navigation.navigate("AcademyViewSets", {
                                                                blockId: block.id,
                                                            });
                                                        }}
                                                    >
                                                        <CustomText text={"Перейти"} />
                                                    </TouchableOpacity>
                                                </Card.Body>
                                            </Card>
                                        </View>
                                    ))}
                                </ScrollView>
                            </View>
                        ) : (
                            <View>
                                <CustomText text={"Данных нет"} />
                            </View>
                        )}
                    </View>
                )}
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    backgroundImage: {
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        resizeMode: "stretch",
    },
});

export default AcademyScreen;
