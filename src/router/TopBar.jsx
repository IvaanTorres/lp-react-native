import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

/* ------------------------------- Components ------------------------------- */
import Index from '../pages/homepage/Index'
import Home from '../pages/homepage/Home'

const Stack = createNativeStackNavigator()

const TopBar = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Index} />
      <Stack.Screen name="Home2" component={Home} />
      <Stack.Screen name="Home3" component={Home} />
      <Stack.Screen name="Home4" component={Home} />
    </Stack.Navigator>
  </NavigationContainer>
)

export default TopBar
