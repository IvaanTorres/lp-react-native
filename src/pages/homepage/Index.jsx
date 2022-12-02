import { View, Text, FlatList } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useEffect, useState } from 'react'
import { getAllPokemon, getPokemon } from '../../services/pokemon'
import { StyleSheet } from 'react-native'
import Listing from '../../components/organisms/Listing'
import SeeMore from '../../components/atoms/SeeMore'

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
      console.log(error)
      throw error
    }
  }

  const getMorePokemon = async () => {
    try {
      const response = await getAllPokemon(20, pokemonList.length)
      setPokemonList([...pokemonList, ...response.results])
    } catch (error) {
      console.log('error')
      throw error
    }
  }

  return (
    <View>
      {pokemonList ? (
        <>
          <SeeMore onClick={getMorePokemon} />
          <Listing data={pokemonList} />
        </>
      ) : null}
    </View>
  )
}

export default Homepage

const styles = StyleSheet.create({
  container: {
    overflow: 'auto',
  },
})
