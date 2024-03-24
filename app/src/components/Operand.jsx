import { View, Text } from "react-native";
import styles from "../styles";
import { useContext } from "react";
import { OperandContext } from "../../index.jsx";

export default function Operand() {
    const {operand} = useContext(OperandContext);

    return (
        <View style={styles.operandContainer}>
            <Text style={styles.operandContent}>{operand}</Text>
        </View>
    )
}