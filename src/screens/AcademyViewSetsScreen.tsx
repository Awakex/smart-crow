import React, { useEffect, useState } from "react";
import { FlatList, TouchableOpacity, View } from "react-native";
import CustomText from "../entries/custom-text";
import { AcademyAPI } from "../core/api/academy";
import { IPageable } from "../types/IPageable";
import { IAcademySet } from "../types/IAcademySet";

interface IProps {
    route: any;
    navigation: any;
}

const AcademyViewSetsScreen = ({ route, navigation }: IProps) => {
    const { blockId } = route.params;
    const [academySets, setAcademySets] = useState<IPageable<IAcademySet[]> | null>(null);
    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);

    const getAcademySets = () => {
        setIsLoading(true);
        AcademyAPI.getAcademySetsByBlockId(blockId, page)
            .then((response) => {
                if (!academySets) {
                    setAcademySets(response.data);
                } else {
                    setAcademySets({
                        ...response.data,
                        content: [...academySets.content, ...response.data.content],
                    });
                }
            })
            .finally(() => setIsLoading(false));
    };

    const renderItem = ({ item }: any) => {
        return (
            <View
                style={{
                    padding: 20,
                    backgroundColor: "lightblue",
                    marginBottom: 20,
                }}
            >
                <CustomText text={`${item.name} ${item.id}`} />
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate("AcademyResolveSet", {
                            setId: item.id,
                        });
                    }}
                >
                    <CustomText text={"Перейти"} />
                </TouchableOpacity>
            </View>
        );
    };

    const renderLoader = () => {
        return isLoading ? <CustomText text={"Загрузка..."} /> : null;
    };

    const loadMoreItem = () => {
        setPage((prev) => prev + 1);
    };

    useEffect(() => {
        getAcademySets();
    }, [blockId]);

    useEffect(() => {
        if (academySets && academySets.totalPages > page && page > 1) {
            getAcademySets();
        }
    }, [page]);

    return (
        <View style={{ flex: 1, marginTop: 50, marginBottom: 15 }}>
            <FlatList
                data={academySets?.content}
                renderItem={renderItem}
                keyExtractor={(item: any) => item.id}
                ListFooterComponent={renderLoader}
                onEndReached={loadMoreItem}
                onEndReachedThreshold={0.5}
            />
        </View>
    );
};

export default AcademyViewSetsScreen;
