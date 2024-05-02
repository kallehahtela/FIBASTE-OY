import { View, StyleSheet } from 'react-native';

import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons} from '@expo/vector-icons';

import { GlobalStyles } from './constants/colors';
import IconButton from './components/UI/IconButton';
import SearchBar from './components/UI/SearchBar';
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
        headerStyle: { backgroundColor: GlobalStyles.color.light_blue },
        headerTintColor: GlobalStyles.color.white,
        tabBarStyle: { backgroundColor: GlobalStyles.color.light_blue },
        tabBarActiveTintColor: GlobalStyles.color.white,
        headerTitle: () => <SearchBar />, // Use the SearchBar as the header title
        headerRight: ({ tintColor }) => (
          <View style={styles.iconCircle}>
            <IconButton
              
              icon='person'
              size={16}
              color={tintColor}
              onPress={() => {
                console.log('this is the profile icon... Do the things...')
                //navigation.navigate('')
              }}
            />
          </View>
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

const styles = StyleSheet.create({
  iconCircle: {
    borderRadius: 25, // Adjust this value to control the roundness
    backgroundColor: 'transparent', // Set the circle's color or keep it transparent'
    borderWidth: 1, // Set the border width
    borderColor: GlobalStyles.color.white, // Choose a border color that fits your design
    width: 50, // Total width of the circle
    height: 50, // Total height of the circle
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
    marginBottom: 12,
    padding: 3,
  },
});