import { StyleSheet, Text, View, TextInput, FlatList, TouchableOpacity, Alert } from 'react-native';
import { useState } from 'react';
import Form from './components/Form';
import Header from './components/Header';
export default function App() {
  const [todos, setTodos] = useState([
    { text: 'God of War: Ragnarok', key: '1' },
    { text: 'Forspoken', key: '2' },
    { text: 'Borderlands 2', key: '3' },
    { text: 'Modern Warfare II', key: '4' },
    { text: 'Modern Warfare III', key: '5' },
  ]);

  const PressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key);
    }
    );
    // Alert Game Removed
    Alert.alert('Action Successful', 'Game Removed from List', [
      { text: 'OK', onPress: () => console.log('OK Pressed') }
    ]);
  }
  const AddGame = (text) => {
    setTodos((prevTodos) => {
      return [
        { text: text, key: Math.random().toString() },
        ...prevTodos
      ];
    });
  }
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <Form 
          AddGame={AddGame}
        />
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => PressHandler(item.key)}
              >
                <Text style={styles.listItem}>{item.text}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
  },
  list: {
  },
  listItem: {
    marginTop: 5,
    padding: 20,
    width: 320,
    textAlign: 'center',
    backgroundColor: 'black',
    color: 'orange',
    fontSize: 16,
    fontWeight: 'bold',
    borderRadius: 10,
  }

});
