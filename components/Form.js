import { StyleSheet, Text, View, TextInput, FlatList, TouchableOpacity } from 'react-native';
import { useState } from 'react';
const Form = ({AddGame}) => {
    const [text, setText] = useState('Apple');
    const changeHandler = (val) => {
        setText(val);
    }
    return (
        <View>
            <Text style={styles.title}>Games Form</Text>
            <View style={styles.form} >
                <TextInput
                    style={styles.input}
                    placeholder='New Game...'
                    onChangeText={changeHandler}
                />
                <TouchableOpacity style={styles.button}
                    onPress={() => AddGame(text)}
                >
                    <Text style={styles.buttonText}>Add Game</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        textAlign: 'center',
        color: 'black',
        fontSize: 19,
        fontWeight: 'bold',
    },
    form: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    input: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        padding: 10,
        margin: 10,
        width: 200,
    },
    button: {
        backgroundColor: 'coral',
        padding: 10,
        margin: 10,
    },
    buttonText: {
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold',
    }

});
export default Form