import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'
import { MaterialCommunityIcons } from '@expo/vector-icons'

/* ------------------------------- Components ------------------------------- */
import Profile from '../pages/profile/Index'
import PokemonStack from './PokemonStack'

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
          tabBarActiveTintColor: 'red',
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarActiveTintColor: 'red',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="face-man-profile"
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

export default BottomBar
