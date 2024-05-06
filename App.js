import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import MainTabNavigator from "./navigation/MainTabNavigator";
import LoginScreen from "./screens/LoginScreen";

function App() {

  // USE CLERK FOR THE AUTH
  
  return (
    <> 
      <SafeAreaProvider>
        <StatusBar style="dark" />
        <NavigationContainer>
          <MainTabNavigator />
        </NavigationContainer>
      </SafeAreaProvider>
    </>
  );
}

export default App;