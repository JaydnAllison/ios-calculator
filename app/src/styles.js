import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    mainContainer: {
        padding: 5,
        width: '100%',
        height: '100%',
        backgroundColor: 'black'
    },

    buttonsContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignContent: 'center',
        bottom: 100,
        position: 'absolute',
    },

    normalButton: {
        width: 90,
        height: 90,
        margin: 2,
        borderColor: 'black',
        borderWidth: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'grey',
        borderRadius: '100%'
    },

    largeButton: {
        width: 180,
        height: 90,
        margin: 2,
        borderColor: 'black',
        borderWidth: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'grey',
        borderRadius: '100%'
    },

    normalButtonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 40,
        width: 30,
    },

    operandContainer: {
        width: '100%',
        height: 100,
        position: 'absolute',
        top: '25%',
        display: 'flex',
        justifyContent: 'flex-end',
        flexDirection: 'row',
        alignItems: 'center',
        textAlign: 'center'
    },

    operandContent: {
        color: 'white',
        fontSize: 80,
        height: '100%'
    },

    prevOperandContainer: {
        position: 'absolute',
        width: '100%',
        height: 50,
        top: '15%', 
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },

    prevOperandContent: {
        color: 'white',
        fontSize: 40
    }
});

export default styles;