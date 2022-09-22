import { Text } from "react-native";

interface IProps {
    text: string | number;
    fontSize?: number;
    color?: string;
}

const CustomText = ({ text, fontSize = 15, color = "black" }: IProps) => {
    return <Text style={{ fontFamily: "Nunito-Bold", fontSize, color }}>{text}</Text>;
};

export default CustomText;
