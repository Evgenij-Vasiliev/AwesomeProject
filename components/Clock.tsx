import React, { useState } from "react";
import Timer from './Timer';
import ClockTime from './ClockTime';
import { View } from "react-native";


function Clock() {
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
          <ClockTime />
        </View>
      </>
    );
  }

  return (
    <View>
      {clock}
      <button        
        onClick={() => setChangeOfClock(!changeOfClock)}
      >
        Clock
      </button> 
      
    </View>
  );
}
export default Clock;
