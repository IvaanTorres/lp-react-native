import { useNavigation } from '@react-navigation/native'
import { useContext, useEffect, useState } from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import { Dimensions } from 'react-native'
import routes from '../../../constants/routes'
import { MainContext } from '../../../contexts/main'
import { getPokemon } from '../../../services/pokemon'
import uppercaseString from '../../../utils/uppercaseString'
import Styles from './styles'

const PokemonCard = ({ data }) => {
  const { screen } = useContext(MainContext)
  const [pokemon, setPokemon] = useState(null)
  const [cardWidth, setCardWidth] = useState(null)
  const navigation = useNavigation()

  const pokemonId = data.url.split('/')[6]
  const formattedPokemonName = uppercaseString(data.name)
  const pokemonImageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`

  // POUR REMI : Check promesse
  useEffect(() => {
    getPokemonData().then((res) => setPokemon(res))
  }, [])

  const getPokemonData = async () => {
    const pokemon = await getPokemon(data.url)
    return pokemon
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
        navigation.navigate(routes.POKEMON_DETAILS, { url: data.url })
      }}
    >
      <View style={Styles().cardLayout}>
        <Text style={Styles().pokemonId}>#{pokemon?.id}</Text>
        <Text style={Styles().pokemonName}>{formattedPokemonName}</Text>
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
