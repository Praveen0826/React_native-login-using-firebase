import { Stack } from "expo-router";
import Registerscreen from "../Screens/Registerscreen";
import Loginscreen from "../Screens/Loginscreen";
import Dashboard from "../Screens/Dashboard";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

export default function RootLayout() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="login">
      <Stack.Screen name="login" component={Loginscreen} />
      <Stack.Screen name="Register" component={Registerscreen} />
      <Stack.Screen name="Dashboard" component={Dashboard} />
    </Stack.Navigator>
  </NavigationContainer>

  )
  ;
}
