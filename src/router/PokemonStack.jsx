import { createNativeStackNavigator } from '@react-navigation/native-stack'
import routes from '../constants/routes.js'
import PokemonDetails from '../pages/details/Index.jsx'
import PokemonList from '../pages/homepage/Index.jsx'

const Stack = createNativeStackNavigator()

const PokemonStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={routes.POKEMON_LISTING}
        component={PokemonList}
        options={{
          title: 'Pokedex',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={routes.POKEMON_DETAILS}
        component={PokemonDetails}
        options={{
          title: 'Pokemon Details',
        }}
      />
    </Stack.Navigator>
  )
}

export default PokemonStack
