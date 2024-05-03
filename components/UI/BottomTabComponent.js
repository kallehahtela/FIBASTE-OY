import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { GlobalStyles } from '../../constants/colors'; // Go up two levels then into constants
import SearchBar from './SearchBar'; // Assuming SearchBar is in the same directory as IconButton
import HomeScreen from '../../screens/HomeScreen'; // Go up two levels then into screens
import ExploreScreen from '../../screens/ExploreScreen'; // Corrected path
import FavoritesScreen from '../../screens/FavoritesScreen'; // Corrected path
import MessageScreen from '../../screens/MessageScreen'; // Corrected path
import IconButton from './IconButton'; // In the same directory

const BottomTabs = createBottomTabNavigator();

function BottomTabComponent() {
  return (
    <BottomTabs.Navigator
      screenOptions={{
        headerStyle: { height: 100 },
        headerTintColor: GlobalStyles.color.white,
        headerTitleContainerStyle: {
          paddingTop: 20,
          paddingBottom: 20
        },
        tabBarStyle: {
          paddingBottom: 25,
          paddingTop: 10,
        },
        tabBarActiveTintColor: GlobalStyles.color.blue,
        headerTitle: () => <SearchBar />,
      }}
    >
      // Your BottomTabs.Screen configurations remain the same
    </BottomTabs.Navigator>
  );
}