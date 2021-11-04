import React, { useEffect, useState } from 'react';
import { DateTime } from 'luxon';
import { View } from 'react-native';


function newDate() {
	return DateTime.now().toLocaleString(DateTime.TIME_24_WITH_SECONDS);
}

function ClockTime() {
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
			<View>{newDateString}</View>
		</View>
	);
}
export default ClockTime;
