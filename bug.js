import * as React from 'react';
import { Text, View, StyleSheet, Alert } from 'react-native';
import Constants from 'expo-constants';

const App = () => {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (count >= 10) {
      Alert.alert('Count limit reached!');
    }
  }, [count]);

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        Count: {count}
      </Text>
      <Button title="Increment" onPress={() => setCount(count + 1)}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default App;