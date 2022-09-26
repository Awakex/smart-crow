import React from "react";
import { View } from "react-native";
import PlayerContainer from "../entries/player/player-container";
import { EPlayerMode } from "../types/EPlayerMode";

interface IProps {
    route: any;
}

const AcademyResolveSet = ({ route }: IProps) => {
    const { setId } = route.params;
    return (
        <View style={{ flex: 1 }}>
            <PlayerContainer setId={setId} mode={EPlayerMode.ACADEMY} />
        </View>
    );
};

export default AcademyResolveSet;
