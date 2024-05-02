import { View } from 'react-native';

import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons} from '@expo/vector-icons';

import { GlobalStyles } from './constants/colors';
import IconButton from './components/UI/IconButton';
import HomeScreen from './screens/HomeScreen';
import ExploreScreen from './screens/ExploreScreen';
import FavoritesScreen from './screens/FavoritesScreen';
import MessageScreen from './screens/MessageScreen';

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function TasksOverview() {
  return (
    <BottomTabs.Navigator 
      screenOptions={({ navigation }) => ({
        headerStyle: { backgroundColor: GlobalStyles.color.Color5 },
        headerTintColor: GlobalStyles.color.Color3,
        tabBarStyle: { backgroundColor: GlobalStyles.color.Color5 },
        tabBarActiveTintColor: GlobalStyles.color.Color2,
        headerRight: ({ tintColor }) => (
          <IconButton 
            icon='person'
            size={24}
            color={tintColor}
            onPress={() => {
              console.log('this is the profile icon... Do the things...')
              //navigation.navigate('')
            }}
          />
        ),
      })}
    >
      
      <BottomTabs.Screen // HOME
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: 'Home',
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />
      <BottomTabs.Screen // Explore
        name="ExploreScreen"
        component={ExploreScreen}
        options={{
          title: 'Explore',
          tabBarLabel: 'Explore',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="search" size={size} color={color} />
          ),
        }}
      />
      <BottomTabs.Screen // Favorites
      name="FavoritesScreen"
      component={FavoritesScreen}
      options={{
        title: 'Favorites',
        tabBarLabel: 'Favorites',
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="heart" size={size} color={color} />
        ),
      }}
      />
      <BottomTabs.Screen // message
        name="MessageScreen"
        component={MessageScreen}
        options={{
          title: 'Message',
          tabBarLabel: 'Message',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="chatbox" size={size} color={color} />
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
}

function App() {
  return (
    <>
      <StatusBar style='dark' />
      <NavigationContainer>
        <TasksOverview />
      </NavigationContainer>
    </>
  );
}

export default App;