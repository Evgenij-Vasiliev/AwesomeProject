import { StatusBar } from 'expo-status-bar';
import React, { ReactElement } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import HomePage from './components/HomePage';

export default function App(): ReactElement {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <HomePage />
    </SafeAreaView>
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
