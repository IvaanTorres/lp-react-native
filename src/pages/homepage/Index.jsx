import { View, Text, FlatList } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useEffect, useState } from 'react'
import { getAllPokemon, getPokemon } from '../../services/pokemon'
import Styles from './styles'
import Listing from '../../components/organisms/Listing/Listing'

const Homepage = () => {
  const [pokemonList, setPokemonList] = useState([])

  useEffect(() => {
    getPokemonList()
  }, [])

  const getPokemonList = async () => {
    try {
      const response = await getAllPokemon(20)
      setPokemonList(response.results)
    } catch (error) {
      throw error
    }
  }

  const getMorePokemon = async () => {
    try {
      const response = await getAllPokemon(20, pokemonList.length)
      setPokemonList([...pokemonList, ...response.results])
    } catch (error) {
      throw error
    }
  }

  return (
    <View style={Styles.homepageWrapper}>
      <View style={Styles.headerSaver}></View>
      {pokemonList ? (
        <Listing data={pokemonList} getMorePokemon={getMorePokemon} />
      ) : null}
    </View>
  )
}

export default Homepage
