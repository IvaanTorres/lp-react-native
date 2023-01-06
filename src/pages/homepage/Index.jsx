import { View, Text, FlatList, Button, TouchableOpacity, TextInput } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useEffect, useState } from 'react'
import { getAllPokemon, getPokemon } from '../../services/pokemon'
import Styles from './styles'
import Listing from '../../components/organisms/Listing/Listing'
import { Ionicons, FontAwesome, MaterialIcons } from '@expo/vector-icons'

const Homepage = () => {
  const [pokemonList, setPokemonList] = useState([])
  const [filteredPokemon, setFilteredPokemon] = useState([])
  const [isSearchDrawerOpen, setIsSearchDrawerOpen] = useState(false)
  const [searchedPokemon, setSearchedPokemon] = useState('')

  useEffect(() => {
    getPokemonList()
  }, [])

  const getPokemonList = async () => {
    try {
      const response = await getAllPokemon(10000)
      setPokemonList(response.results)
      setFilteredPokemon(response.results)
    } catch (error) {
      throw error
    }
  }

  // const getMorePokemon = async () => {
  //   try {
  //     const response = await getAllPokemon(20, pokemonList.length)
  //     setPokemonList([...pokemonList, ...response.results])
  //   } catch (error) {
  //     throw error
  //   }
  // }

  const filterPokemon = (name) => {
    if(name != ''){
      setFilteredPokemon(pokemonList.filter((pokemon) => pokemon.name.includes(name)))
    } else {
      setFilteredPokemon(pokemonList)
    }
  }

  return (
    <View style={Styles.homepageWrapper}>
      <View style={{}}>
        <Text
          style={{
            fontSize: 50,
            fontWeight: 'bold',
            marginTop: 75,
            marginLeft: 15,
            marginBottom: -20,
          }}
        >
          Pokedex
        </Text>
        <TouchableOpacity
          onPress={() => {setIsSearchDrawerOpen(!isSearchDrawerOpen)}}
          style={{
            marginTop: 20,
            marginBottom: -20,
          }}
        >
          {/* Search button */}
          <View
            style={{
              /* position: 'fixed',
              bottom: 0,
              right: 10, */
              backgroundColor: '#FFFFFF',
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,
              width: 50,
              height: 50,
              borderRadius: 50,
              marginLeft: 320,
              marginTop: -50,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <FontAwesome name="search" size={24} color="black" />
          </View>
        </TouchableOpacity>
      </View>

      <View style={Styles.headerSaver}></View>
      {pokemonList ? (
        <Listing data={filteredPokemon} /* getMorePokemon={getMorePokemon} */ />
      ) : null}

      {/* Search Drawer */}
      <View style={{
        backgroundColor: '#424242',
        width: '100%',
        height: 180,
        position: 'absolute',
        top: -10,
        left: 0,
        right: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 75,
        paddingHorizontal: 15,
        transform: [{ translateY: isSearchDrawerOpen ? -10 : -180 }],
      }}>
          <View style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
          }}>
            <TextInput
              style={{
                width: '82%',
                height: '100%',
                padding: 10,
                paddingLeft: 16,
                fontSize: 18,
                backgroundColor: '#fff',
                borderRadius: 100
              }}
              onChangeText={(text) => {
                filterPokemon(text)
                setSearchedPokemon(text)
              }}
              value={searchedPokemon}
              placeholder="Search"
            />

            <TouchableOpacity
              onPress={() => {
                setIsSearchDrawerOpen(!isSearchDrawerOpen)
                setSearchedPokemon('')
                setFilteredPokemon(pokemonList)
              }}
            >
              {/* Search button */}
              <View
                style={{
                  /* position: 'fixed',
                  bottom: 0,
                  right: 10, */
                  backgroundColor: '#FFFFFF',
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.25,
                  shadowRadius: 3.84,
                  elevation: 5,
                  width: 50,
                  height: 50,
                  borderRadius: 50,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <MaterialIcons name="cancel" size={24} color="black" />
              </View>
            </TouchableOpacity>
          </View>
      </View>
    </View>
  )
}

export default Homepage
