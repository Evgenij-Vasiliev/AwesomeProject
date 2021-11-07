import { useState, useEffect } from "react";
import React from "react";
import { Button ,Text, View, StyleSheet } from "react-native";

function Timer() {   
    const [seconds, setSeconds] = useState(0);
    const [timerActive, setTimerActive] = useState(false);
    useEffect(() => {
        console.log("effect start");
    let timerId: any;
    if (timerActive) {
        timerId = setInterval(() => {
        setSeconds(seconds + 1); 
        console.log("setSeconds")
        }, 1000);
        } else if (timerId) {
        clearInterval(timerId);
        }

        return () => {
        clearInterval(timerId);
        console.log("end")
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
    
    let minutes,hours, secondsTime, minutesTime: any;
    
    minutes = `${Math.floor(seconds / 60)}`.padStart(2, '0');
    hours = `${Math.floor(+minutes/ 60)}`.padStart(2, '0');
    secondsTime = seconds - +minutes * 60;    
    minutesTime = +minutes - +hours * 60;    
    secondsTime = seconds - (+minutes * 60);    
    secondsTime = secondsTime < 10 ? `0${secondsTime}`: secondsTime;


    return (
        <View>
        <Text style={styles.timer}>{hours}:{minutesTime}:{secondsTime}</Text>
        <Button onPress={timerStart} title='Start' />
        <Button onPress={timerStop} title='Stop' />
        <Button onPress={timerReset} title='Reset' />
        </View>
    );
}

const styles = StyleSheet.create({    
    timer: {
        fontSize: 100,
        fontWeight: 'bold',
        color: 'red'    
    }
});

export default Timer;




