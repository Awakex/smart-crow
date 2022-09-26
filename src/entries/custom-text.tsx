import { Text } from "react-native";

interface IProps {
    text: string | number;
    fontSize?: number;
    color?: string;
    style?: object;
}

const CustomText = ({ text, fontSize = 15, color = "black", style }: IProps) => {
    return <Text style={{ fontFamily: "Nunito-Bold", fontSize, color, ...style }}>{text}</Text>;
};

export default CustomText;
