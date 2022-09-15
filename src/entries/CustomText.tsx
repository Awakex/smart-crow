import { Text } from "react-native";

interface IProps {
    text: string;
    fontSize?: number;
}

const CustomText = ({ text, fontSize = 15 }: IProps) => {
    return <Text style={{ fontFamily: "Nunito-Bold", fontSize }}>{text}</Text>;
};

export default CustomText;
