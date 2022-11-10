import { View, Text } from 'react-native'
import Home from './Home'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

const Homepage = () => {
  return (
    <View>
      <Text>Home</Text>
    </View>
  )
}

export default Homepage
