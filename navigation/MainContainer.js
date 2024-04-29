import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from '@expo/vector-icons';

// Screens
import HomeScreen from '../navigation/screens/HomeScreen';
import ExploreScreen from '../navigation/screens/ExploreScreen';
import FavoritesScreen from './screens/FavoritesScreen';
import MessageScreen from '../navigation/screens/MessageScreen';

// Screen names
const homeName = 'Home';
const exploreName = 'Explore';
const favoritesName = 'Favorites';
const messageName = 'Message';

const Tab = createBottomTabNavigator();

export default function MainContainer() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName={homeName}
                screenOptions={({route}) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        let rn = route.name;

                        if (rn === homeName) {
                            iconName = focused ? 'home' : 'home-outline'
                        } else if (rn === exploreName) {
                            iconName = focused ? 'search' : 'search-outline'
                        } else if (rn === favoritesName) {
                            iconName = focused ? 'heart' : 'heart-outline'
                        } else if (rn === messageName) {
                            iconName = focused ? 'chatbox' : 'chatbox-outline'
                        }
                        

                        return <Ionicons name={iconName} size={size} color={color} />
                    },
                    headerShown: false // This hides the header for all Screens
                })}
                >

                <Tab.Screen name={homeName} component={HomeScreen} />
                <Tab.Screen name={exploreName} component={ExploreScreen} />
                <Tab.Screen name={favoritesName} component={FavoritesScreen} />
                <Tab.Screen name={messageName} component={MessageScreen} />
                
            </Tab.Navigator>

        </NavigationContainer>
    );
}