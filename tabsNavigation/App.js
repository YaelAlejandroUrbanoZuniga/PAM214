import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons} from '@expo/vector-icons';
import 'react-native-gesture-handler';

import Home from './screens/home';
import Profile from "./screens/profile";
import Settings from "./screens/settings";
import Details from "./screens/details";

const Tab = createBottomTabNavigator ();
const Stack = createNativeStackNavigator ();

export default function App()
{
  function ProfileStack()
  {
    return (
    <Stack.Navigator screenOptions = {{ headerShown: true }}>
      <Stack.Screen name = "Profile" component = {Profile} />
      <Stack.Screen name = "Details" component = {Details} />
    </Stack.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions = {({route}) => (
        {
          headerShown: false,
          tabBarIcon: ({color, size}) => 
          {
            let iconName;
            if (route.name === 'Home') 
            {
              iconName = 'home';
            } else if (route.name === 'ProfileStack')
            {
              iconName = 'person';
            } else if (route.name === 'Settings')
            {
              iconName = 'settings';
            }
            return <Ionicons name = {iconName} size = {size} color = {color} />;
          },
          tabBarActiveTintColor: '#007BFF',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: 
          {
            paddingBottom: 5,
            height: 60,
          },
        })}
      >
        <Tab.Screen name = "Home" component = {Home}/>
        <Tab.Screen name = "ProfileStack" component = {ProfileStack}/>
        <Tab.Screen name = "Settings" component = {Settings}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}