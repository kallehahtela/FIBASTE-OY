import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons'; // Correct FontAwesome6 to FontAwesome5
import { Platform } from 'react-native';

import { GlobalStyles } from '../constants/colors'; // Ensure your GlobalStyles accurately define these properties
import SearchBar from '../components/UI/SearchBar'; // Assuming SearchBar is correctly implemented
import ExploreScreen from '../screens/ExploreScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import TaskScreen from '../screens/TaskScreen';
import MessageScreen from '../screens/MessageScreen';
import ProfileScreen from '../screens/ProfileScreen';

const BottomTabs = createBottomTabNavigator();

function MainTabNavigator() {
  const insets = useSafeAreaInsets();

  return (
    <BottomTabs.Navigator 
      screenOptions={{
        headerStyle: {
          backgroundColor: GlobalStyles.color.white,
          height: 130,
          borderRadius: 10,
        },
        headerTintColor: GlobalStyles.color.white,
        headerTitleContainerStyle: {
          paddingTop: 20,
          paddingBottom: 20
        },
        tabBarStyle: {
          maxHeight: 70,
          minHeight: 60,
          backgroundColor: GlobalStyles.color.white,
          paddingBottom: Platform.OS === 'android' ? 10 : insets.bottom - 10,
          paddingTop: 5,
          borderRadius: 10,
        },
        tabBarActiveTintColor: GlobalStyles.color.fibasteBlue, // Ensure this color is defined in your GlobalStyles
        headerTitle: () => <SearchBar />
      }}
    >
      <BottomTabs.Screen name="Explore" component={ExploreScreen} options={{
        tabBarIcon: ({ color, size }) => <Ionicons name="search" size={24} color={color} />
      }} />
      <BottomTabs.Screen name="Favorites" component={FavoritesScreen} options={{
        tabBarIcon: ({ color, size }) => <Ionicons name="heart-outline" size={24} color={color} />
      }} />
      <BottomTabs.Screen name="Tasks" component={TaskScreen} options={{
        tabBarIcon: ({ color, size }) => <FontAwesome5 name="tasks" size={24} color={color} /> // Changed to FontAwesome5 compatible icon
      }} />
      <BottomTabs.Screen name="Messages" component={MessageScreen} options={{
        tabBarIcon: ({ color, size }) => <Ionicons name="chatbox-outline" size={24} color={color} />
      }} />
      <BottomTabs.Screen name="Profile" component={ProfileScreen} options={{
        tabBarIcon: ({ color, size }) => <Ionicons name="person-circle-outline" size={24} color={color} />
      }} />
    </BottomTabs.Navigator>
  );
}

export default MainTabNavigator;