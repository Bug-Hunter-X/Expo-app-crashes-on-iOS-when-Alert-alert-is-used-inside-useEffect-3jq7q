import * as React from 'react';
import { Text, View, StyleSheet, Alert } from 'react-native';
import Constants from 'expo-constants';

const App = () => {
  const [count, setCount] = React.useState(0);
  const [isMounted, setIsMounted] = React.useState(true);

  React.useEffect(() => {
    let isCurrent = true;
    setIsMounted(true);
    if (count >= 10 && isCurrent) {
      Alert.alert('Count limit reached!');
    }
    return () => { isCurrent = false; setIsMounted(false); };
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