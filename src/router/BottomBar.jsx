import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

/* ------------------------------- Components ------------------------------- */
import Index from '../pages/homepage/Index'
import Profile from '../pages/profile/Index'

const Tab = createBottomTabNavigator()

const BottomBar = () => {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen name="List Pokemon" component={Index} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  )
}

export default BottomBar
