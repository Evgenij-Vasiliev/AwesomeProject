import React, { ReactElement } from 'react';
import { StyleSheet, Text } from 'react-native';

function Greetings(): ReactElement {
  return <Text style={styles.content}>Hello, React Native!!!</Text>;
}

export default Greetings;

const styles = StyleSheet.create({
  content: {
    fontSize: 36,
    fontWeight: 'bold',
    color: 'blue',
  },
});
