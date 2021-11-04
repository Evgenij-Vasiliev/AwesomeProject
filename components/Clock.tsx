import React, { useEffect, useState } from 'react';
import { DateTime } from 'luxon';
import { Text, View, StyleSheet } from "react-native";



function newDate() {
	return DateTime.now().toLocaleString(DateTime.TIME_24_WITH_SECONDS);
}

function Clock() {
	const [ newDateString, setNewDateString ] = useState(newDate());
	useEffect(
		() => {
			setTimeout(() => {
				setNewDateString(newDate());
			}, 1000);
		},
		[ newDateString ]
	);
	return (
		<View>
			<Text style={styles.clock}>{newDateString}</Text>
		</View>
	);
}

const styles = StyleSheet.create({    
    clock: {
        fontSize: 100,
        fontWeight: 'bold',
        color: 'red'    
    }
});
export default Clock;
