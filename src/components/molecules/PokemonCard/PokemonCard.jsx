import { useNavigation } from '@react-navigation/native'
import { useContext, useEffect, useState } from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import { Dimensions } from 'react-native'
import routes from '../../../constants/routes'
import { MainContext } from '../../../contexts/main'
import { getPokemon } from '../../../services/pokemon'
import uppercaseString from '../../../utils/uppercaseString'
import { FontAwesome, Feather } from '@expo/vector-icons';
import Styles from './styles'
import useLocalStorage from '../../../hooks/useLocalStorage'
import AsyncStorage from '@react-native-async-storage/async-storage'

const PokemonCard = ({ data }) => {
  const { screen } = useContext(MainContext)
  const [pokemon, setPokemon] = useState(null)
  const [cardWidth, setCardWidth] = useState(null)
  const [isFavorite, setIsFavorite] = useState(false)
  // const [object, setObject] = useLocalStorage('FAVORITES', data)
  // console.log(object);
  const navigation = useNavigation()

  const pokemonId = data.url.split('/')[6]
  const formattedPokemonName = uppercaseString(data.name)
  const pokemonImageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`

  // POUR REMI : Check promesse
  useEffect(() => {  
    checkIsFavorite()
    getPokemonData().then((res) => setPokemon(res))
  }, [])

  const checkIsFavorite = async () => {
    let storedPokemon = JSON.parse(await AsyncStorage.getItem('FAVORITES'))
    if(!storedPokemon){
      await AsyncStorage.setItem('FAVORITES', JSON.stringify([]))
    } else {
      const isPokemonInFavorites = storedPokemon.find(p => p.name === data.name) !== undefined
      setIsFavorite(isPokemonInFavorites)
    }
  }

  const getPokemonData = async () => {
    const pokemon = await getPokemon(data.url)
    return pokemon
  }

  const toggleFavorite = async () => {
    // await AsyncStorage.removeItem('FAVORITES')
    
    const favoritesPokemon = JSON.parse(await AsyncStorage.getItem('FAVORITES'))
    if(!favoritesPokemon){
      await AsyncStorage.setItem('FAVORITES', JSON.stringify([data]))
      // console.log(await AsyncStorage.getItem('FAVORITES'));

    } else {
      setIsFavorite(!isFavorite)

      // Store
      if(!isFavorite){
        await AsyncStorage.setItem('FAVORITES', JSON.stringify([...favoritesPokemon, data]))
        // console.log(await AsyncStorage.getItem('FAVORITES'));
      
      // Remove
      }else{ 
        const newFavoritesPokemon = favoritesPokemon.filter(p => p.name !== data.name)
        await AsyncStorage.setItem('FAVORITES', JSON.stringify(newFavoritesPokemon))
        // console.log(await AsyncStorage.getItem('FAVORITES'));
      }
    }
  }

  return (
    <TouchableOpacity
      style={
        Styles({
          cardWidth,
          screenWidth: screen.width,
          pokemon,
        }).touchableCardWrapper
      }
      onLayout={(event) => {
        const { width } = event.nativeEvent.layout
        setCardWidth(width)
      }}
      onPress={() => {
        navigation.navigate(routes.POKEMON_DETAILS, {
          url: data.url,
          id: pokemonId,
        })
      }}
    >
      <View style={Styles().cardLayout}>
        <View style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between'
        }}>
          <View>
            <Text style={Styles().pokemonId}>#{pokemon?.id}</Text>
            <Text style={Styles().pokemonName}>{formattedPokemonName}</Text>
          </View>
          {/* TODO: Finish condition */}
          <TouchableOpacity onPress={toggleFavorite}>
            {isFavorite ? (
              <FontAwesome name="star" size={24} color="white" />
            ) : (
              <Feather name="star" size={24} color="white" />
            )}
          </TouchableOpacity>
        </View>
        <Image
          style={Styles().pokemonImage}
          source={{
            uri: pokemonImageUrl,
          }}
        />
        {pokemon
          ? pokemon.types.map((item) => (
              <Text key={item.type.name} style={Styles().pokemonType}>
                {uppercaseString(item.type.name)}
              </Text>
            ))
          : null}
      </View>
    </TouchableOpacity>
  )
}

export default PokemonCard
