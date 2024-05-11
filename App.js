import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//import { SafeAreaProvider } from "react-native-safe-area-context";

//import MainTabNavigator from "./navigation/MainTabNavigator";
//import AuthStack from "./navigation/AuthStack";

import OnboardingScreen from "./screens/Start/OnboardingScreen";
import LoginScreen from "./screens/Start/LoginScreen";
import RegisterScreen from "./screens/Start/RegisterScreen";

const Stack = createNativeStackNavigator();

function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Register'>
            <Stack.Screen name='Register' component={RegisterScreen} />
            <Stack.Screen name='Onboarding' component={OnboardingScreen} />
            <Stack.Screen name='Login' component={LoginScreen} />
        </Stack.Navigator>
      </NavigationContainer>

    /*<>
      <SafeAreaProvider>
        <StatusBar style="dark" />
        <NavigationContainer>
          <MainTabNavigator />
        </NavigationContainer>
      </SafeAreaProvider>
    </>*/

  );
}

export default App;