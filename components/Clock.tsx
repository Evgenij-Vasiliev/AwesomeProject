import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import { Text, View, StyleSheet } from 'react-native';

function newDate() {
  return format(new Date(), 'HH:mm:ss');
}

function Clock() {
  const [newDateString, setNewDateString] = useState(newDate());
  useEffect(() => {
    setTimeout(() => {
      setNewDateString(newDate());
    }, 1000);
  }, [newDateString]);
  return (
    <View>
      <Text style={styles.clock}>{newDateString}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  clock: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'red',
  },
});
export default Clock;
