import React from 'react';
import { StyleSheet, Text } from 'react-native';

function Greetings() {
    return <Text style={styles.content}>Hello, React Native!</Text>     
}

export default Greetings;

const styles = StyleSheet.create({    
    content: {
        fontSize: 100,
        fontWeight: 'bold',
        color: 'red'    
    }
});
