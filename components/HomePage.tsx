import React, { useState } from "react";
import Timer from './Timer';
import Clock from './Clock';
import { Text, View, StyleSheet } from "react-native";
import Greetings from "./Greetings";


function HomePage() {
  let clock;
  const [changeOfClock, setChangeOfClock] = useState(true);
  
  if (changeOfClock) {
    clock = (
      <>
        <View>
          <Timer />
        </View>
      </>
    );
  } else {
    clock = (
      <>
        <View>
          <Clock />
        </View>
      </>
    );
  }

  return (
    <View>
      <button        
        onClick={() => setChangeOfClock(!changeOfClock)}
      >
        Clock
      </button>  
      <Greetings />
      <View style={styles.homePage}>
      {clock}
      </View>          
    </View>
  );
}
const styles = StyleSheet.create({
  homePage: {
    flex: 1,    
    alignItems: 'center',
    justifyContent: 'center',   
  },  
});
export default HomePage;
