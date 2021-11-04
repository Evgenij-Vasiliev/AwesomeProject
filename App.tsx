import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet , View } from 'react-native';
import HomePage from './components/HomePage';

export default function App(): JSX.Element {
  return (
    <View style={styles.container}>      
      <HomePage />      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',   
  },  
});
