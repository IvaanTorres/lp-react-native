import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'
import { MaterialCommunityIcons } from '@expo/vector-icons'

/* ------------------------------- Components ------------------------------- */
import Index from '../pages/homepage/Index'
import Profile from '../pages/profile/Index'

const Tab = createBottomTabNavigator()

const BottomBar = () => {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen
        name="List Pokemon"
        component={Index}
        options={{
          tabBarLabel: 'List Pokemon',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-list-circle" size={size} color={color} />
          ),
          tabBarActiveTintColor: 'red',
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
        }}
      />
    </Tab.Navigator>
  )
}

export default BottomBar
