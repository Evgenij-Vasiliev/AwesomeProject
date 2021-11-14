import React, { useState } from 'react';
import { SafeAreaView, TextInput, StyleSheet } from 'react-native';

const Messenger = () => {
  const [text, onChangeText] = useState('');

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="DialogFlow agent communication field"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: 'white',
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    marginTop: 300,
  },
});

export default Messenger;
