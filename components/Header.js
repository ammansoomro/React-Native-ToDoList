import { StyleSheet, Text, View, TextInput, FlatList, TouchableOpacity } from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Games to Buy</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    height: 80,
    backgroundColor: 'coral',
    paddingTop: 38,
  },
  title: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  }
});

export default Header