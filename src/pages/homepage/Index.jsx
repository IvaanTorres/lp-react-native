import { View, Text, FlatList } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useEffect, useState } from 'react'
import { getAllPokemon, getPokemon } from '../../services/pokemon'
import { StyleSheet } from 'react-native'
import Listing from '../../components/organisms/Listing'

const Stack = createNativeStackNavigator()

const Homepage = () => {
  const [pokemonList, setPokemonList] = useState([])

  useEffect(() => {
    getPokemonList()
  }, [])

  const getPokemonList = async () => {
    const response = await getAllPokemon()
    setPokemonList(response.results)
  }

  return <View>{pokemonList ? <Listing data={pokemonList} /> : null}</View>
}

export default Homepage

const styles = StyleSheet.create({
  container: {
    overflow: 'auto',
  },
})
