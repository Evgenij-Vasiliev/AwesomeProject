import React, { useState } from "react";
import Timer from './Timer';
import Clock from './Clock';
import { Button, View, StyleSheet } from "react-native";
import Greetings from "./Greetings";


function HomePage() {
  let clock;
  const [changeOfClock, setChangeOfClock] = useState(false);
  
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
      <Button        
        onPress={() => setChangeOfClock(!changeOfClock)}
        title='Clock'
      />        
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
