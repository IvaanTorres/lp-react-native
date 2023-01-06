import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'
import { MaterialCommunityIcons } from '@expo/vector-icons'

/* ------------------------------- Components ------------------------------- */
import Profile from '../pages/profile/Index'
import PokemonStack from './stacks/PokemonStack'
import Favorites from '../pages/favorites'
import routes from '../constants/routes'

const Tab = createBottomTabNavigator()

const BottomBar = () => {
  return (
    <Tab.Navigator initialRouteName="Pokemon">
      {/* Stack Pokemon */}
      <Tab.Screen
        name="Pokemon"
        component={PokemonStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-list-circle" size={size} color={color} />
          ),
          tabBarActiveTintColor: 'black',
          tabBarShowLabel: false,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name={routes.FAVORITES}
        component={Favorites}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="star-circle"
              size={size}
              color={color}
            />
          ),
          tabBarActiveTintColor: 'black',
          tabBarShowLabel: false,
          tabBarShowLabel: false,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name={routes.PROFILE}
        component={Profile}
        options={{
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
