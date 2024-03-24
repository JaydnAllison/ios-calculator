import { TouchableOpacity, Text } from "react-native";
import styles from "../styles";
import { Colours } from "../constants.js";
import { useContext } from "react";
import { OperandContext } from "../../index.jsx";

const ButtonTypes = {
    normal: 'normalButton',
    action: 'actionButton',
    operator: 'operatorButton'
}

export default function NormalButton({size = 'regular', type = ButtonTypes.normal, operatorType, onPressOverride, children}) {
    const {setOperand, operand, setState, setPrevOperand} = useContext(OperandContext);

    function onPress() {
        if (type === ButtonTypes.normal) {
            changeOperand();
        }
        else if (type === ButtonTypes.operator) {
            setPrevOperand(operand);
            setOperand('0');
            setState(operatorType);
        }
    }

    function changeOperand() {
        setOperand(prevOperand => {
            const newOperand = prevOperand + children;

            if (children.includes('.') && prevOperand.includes('.') || isNaN(newOperand)) return prevOperand;

            if (prevOperand === '0' && children !== '0') {
                return children;
            }
            if (prevOperand === '0') {
                return prevOperand;
            }
            
            return newOperand;
        });
    }

    return (
        <TouchableOpacity style={{...size === 'large' ? styles.largeButton : styles.normalButton, 
            backgroundColor: Colours[type]}} onPress={onPressOverride ?? onPress}>
            <Text style={styles.normalButtonText}>{children}</Text>
        </TouchableOpacity>
    )
}