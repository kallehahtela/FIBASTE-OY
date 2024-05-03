import { View, StyleSheet, Pressable } from 'react-native';

import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons} from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';

import { GlobalStyles } from './constants/colors';
import SearchBar from './components/UI/SearchBar';
import ExploreScreen from './screens/ExploreScreen';
import FavoritesScreen from './screens/TaskScreen';
import TaskScreen from './screens/TaskScreen';
import MessageScreen from './screens/MessageScreen';
import ProfileScreen from './screens/ProfileScreen';

const BottomTabs = createBottomTabNavigator();

function TasksOverview() {
  return (
    <BottomTabs.Navigator 
      screenOptions={({ navigation }) => ({
        headerStyle: { 
          //backgroundColor: GlobalStyles.color.light_blue,
          height: 120 // Adjusted height for more space
        },
        headerTintColor: GlobalStyles.color.white,
        headerTitleContainerStyle: {
          paddingTop: 20, // Adds padding at the top inside the header
          paddingBottom: 20 // Adds padding at the bottom inside the header
        },
        tabBarStyle: { 
          //backgroundColor: GlobalStyles.color.light_blue,
          paddingBottom: 25, // Padding at the bottom of the tab bar
          paddingTop: 10,  // Padding at the top of the tab bar
        },
        tabBarActiveTintColor: GlobalStyles.color.fibasteBlue,
        headerTitle: () => <SearchBar />, // Use the SearchBar as the header title, style={styles.iconCircle}
      })}
    >
      
      <BottomTabs.Screen // Explore
        name="HomeScreen"
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
        name="ExploreScreen"
        component={FavoritesScreen}
        options={{
          title: 'Favorites',
          tabBarLabel: 'Favorites',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="heart-outline" size={size} color={color} />
          ),
        }}
      />
      <BottomTabs.Screen // Own tasks, need to create company logo
        name="TaskScreen"
        component={TaskScreen}
        options={{
          title: 'Tasks',
          tabBarLabel: 'Tasks',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome6 name="airbnb" size={size} color={color} />
          ),
        }}
        />
      <BottomTabs.Screen // Message
        name="MessageScreen"
        component={MessageScreen}
        options={{
          title: 'Message',
          tabBarLabel: 'Message',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="chatbox-outline" size={size} color={color} />
          ),
        }}
      />

      <BottomTabs.Screen // Profile
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          title: 'Profile',
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-circle-outline" size={size} color={color} />
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

const styles = StyleSheet.create({
  
});