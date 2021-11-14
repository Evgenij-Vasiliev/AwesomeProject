import React, { useState, ReactElement } from 'react';
import Timer from './Timer';
import Clock from './Clock';
import { Button, View, StyleSheet } from 'react-native';
import Greetings from './Greetings';
import Messenger from './Messenger';

function HomePage(): ReactElement {
  const [changeOfClock, setChangeOfClock] = useState(false);
  const clock = changeOfClock ? <Timer /> : <Clock />;

  return (
    <View>
      <Button onPress={() => setChangeOfClock(!changeOfClock)} title="Clock" />
      <Greetings />
      <View style={styles.homePage}>{clock}</View>
      <Messenger />
    </View>
  );
}

const styles = StyleSheet.create({
  homePage: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default HomePage;
