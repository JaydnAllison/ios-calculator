import { useContext } from "react";
import styles from "../styles";
import { View, Text } from "react-native";
import { OperandContext } from "../../index.jsx";

export default function PrevOperand() {
    const {prevOperand, state} = useContext(OperandContext);

    return (
        <View style={styles.prevOperandContainer}>
            <Text style={styles.prevOperandContent}>{`${prevOperand} ${state ?? ''}`}</Text>
        </View>
    )
}