import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'
import { MaterialCommunityIcons } from '@expo/vector-icons'

/* ------------------------------- Components ------------------------------- */
import Profile from '../pages/profile/Index'
import PokemonStack from './PokemonStack'
import Favorites from '../pages/favorites'

const Tab = createBottomTabNavigator()

const BottomBar = () => {
  return (
    <Tab.Navigator initialRouteName="Pokemon">
      <Tab.Screen
        name="Pokemon"
        component={PokemonStack}
        options={{
          tabBarLabel: 'Pokemon',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-list-circle" size={size} color={color} />
          ),
          tabBarActiveTintColor: 'black',
          tabBarShowLabel: false,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={Favorites}
        options={{
          tabBarLabel: 'Favorites',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="star-circle"
              size={size}
              color={color}
            />
          ),
          tabBarActiveTintColor: 'black',
          tabBarShowLabel: false,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="face-man-profile"
              size={size}
              color={color}
            />
          ),
          tabBarActiveTintColor: 'black',
          tabBarShowLabel: false,
        }}
      />
    </Tab.Navigator>
  )
}

export default BottomBar
