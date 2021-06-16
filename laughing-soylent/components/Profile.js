import * as React from "react";
import { Text, View ,Button} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

function Profile() {
  return(
<Text>HI</Text>
  )
}
const Stack = createStackNavigator();
export default function EventsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component= {Profile}/>
    </Stack.Navigator>
  );
}