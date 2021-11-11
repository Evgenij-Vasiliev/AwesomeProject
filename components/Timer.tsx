import { useState, useEffect } from 'react';
import React from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';

function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [timerActive, setTimerActive] = useState(false);
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let timerId: any;
    if (timerActive) {
      timerId = setInterval(() => {
        setSeconds(seconds + 1);
      }, 1000);
    } else if (timerId) {
      clearInterval(timerId);
    }

    return () => {
      clearInterval(timerId);
    };
  }, [timerActive, seconds]);

  function timerStart() {
    setTimerActive(true);
  }

  function timerStop() {
    setTimerActive(false);
  }

  function timerReset() {
    timerStop();
    setSeconds(0);
  }

  const hours: number = Math.floor(seconds / 3600);
  const hoursStr: string = hours < 10 ? `0${hours}` : `${hours}`;

  let restSeconds: number = seconds - hours * 3600;

  const minutes: number = Math.floor(restSeconds / 60);
  const minutesStr = `${minutes < 10 ? '0' : ''}${minutes}`;

  restSeconds = restSeconds - minutes * 60;

  const secondsStr: string = `${restSeconds}`.padStart(2, '0');

  return (
    <View>
      <Text style={styles.timer}>
        {hoursStr}:{minutesStr}:{secondsStr}
      </Text>
      <Button onPress={timerStart} title="Start" />
      <Button onPress={timerStop} title="Stop" />
      <Button onPress={timerReset} title="Reset" />
    </View>
  );
}

const styles = StyleSheet.create({
  timer: {
    fontSize: 36,
    fontWeight: 'bold',
    color: 'red',
  },
});

export default Timer;
