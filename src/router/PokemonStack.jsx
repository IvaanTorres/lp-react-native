import { createNativeStackNavigator } from '@react-navigation/native-stack'
import PokemonDetails from '../pages/details/Index.jsx'
import PokemonList from '../pages/homepage/Index.jsx'

const Stack = createNativeStackNavigator()

const PokemonStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="PokemonList"
        component={PokemonList}
        options={{
          title: 'Pokedex',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="PokemonDetails"
        component={PokemonDetails}
        options={{
          title: 'Pokemon Details',
        }}
      />
    </Stack.Navigator>
  )
}

export default PokemonStack
