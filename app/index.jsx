import { View } from "react-native";
import styles from "./src/styles.js";
import NormalButton from "./src/components/NormalButton.jsx";
import { Stack } from "expo-router";
import Operand from "./src/components/Operand.jsx";
import PrevOperand from "./src/components/PrevOperand.jsx";
import { createContext, useState } from "react";

export const OperandContext = createContext();

const States = {
    MULTIPLY: 'x',
    SUBTRACT: '-',
    ADD: '+',
    DIVIDE: '÷'
}

export default function Index() {
    const [operand, setOperand] = useState('0');
    const [prevOperand, setPrevOperand] = useState('');
    const [state, setState] = useState(null); 

    function clear() {
        setOperand('0');
        setPrevOperand('');
        setState(null);
    }

    function switchSign() {
        setOperand(prevOperand => (Number(prevOperand) * -1).toString());
    }

    function evaluate() {
        if (state) {
            let answer = 'Something went wrong';

            switch (state) {
                case States.MULTIPLY: 
                    answer = +prevOperand * +operand;
                    break;
                
                case States.DIVIDE: 
                    answer = +prevOperand / +operand;
                    break;
                
                case States.ADD: 
                    answer = +prevOperand + +operand;
                    break;

                case States.SUBTRACT: 
                    answer = +prevOperand - +operand;
                    break;
                
            }

            clear();
            setOperand(answer.toString());
        }
    }

    return (
        <OperandContext.Provider value={{operand, setOperand, prevOperand, setPrevOperand, state, setState}}>
            <View style={styles.mainContainer}>
                <Stack.Screen options={{
                    headerShown: false,
                }}>
                </Stack.Screen>
                
                <PrevOperand/>
                <Operand/>


                <View style={styles.buttonsContainer}>
                    <NormalButton type='actionButton' onPressOverride={clear}>AC</NormalButton>
                    <NormalButton type='actionButton' onPressOverride={switchSign}>+/-</NormalButton>
                    <NormalButton type='actionButton'>%</NormalButton>
                    <NormalButton type='operatorButton' operatorType={States.DIVIDE}>÷</NormalButton>

                    <NormalButton>7</NormalButton>
                    <NormalButton>8</NormalButton>
                    <NormalButton>9</NormalButton>
                    <NormalButton type='operatorButton' operatorType={States.MULTIPLY}>x</NormalButton>

                    <NormalButton>4</NormalButton>
                    <NormalButton>5</NormalButton>
                    <NormalButton>6</NormalButton>
                    <NormalButton type='operatorButton' operatorType={States.SUBTRACT}>-</NormalButton>

                    <NormalButton>1</NormalButton>
                    <NormalButton>2</NormalButton>
                    <NormalButton>3</NormalButton>
                    <NormalButton type='operatorButton' operatorType={States.ADD}>+</NormalButton>

                    <NormalButton size='large'>0</NormalButton>
                    <NormalButton>.</NormalButton>
                    <NormalButton type='operatorButton' onPressOverride={evaluate}>=</NormalButton>
                </View>
            </View>
        </OperandContext.Provider>
    )
}