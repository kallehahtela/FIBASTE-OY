import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Screens
import OnboardingScreen from "../screens/Start/OnboardingScreen";
import LoginScreen from "../screens/Start/LoginScreen";
import RegisterScreen from "../screens/Start/RegisterScreen";

const Stack = createNativeStackNavigator();

const AuthStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Onboarding' component={OnboardingScreen}/>
            <Stack.Screen name='Login' component={LoginScreen}/>
            <Stack.Screen name='Register' component={RegisterScreen}/>
        </Stack.Navigator>
    );
};

export default AuthStack;