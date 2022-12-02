import { useNavigation } from '@react-navigation/native'
import { useEffect, useState } from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import { Dimensions } from 'react-native'
import { getPokemon } from '../../services/pokemon'
import getPokemonBackground from '../../utils/getPokemonBackground'

const PokemonCard = ({ data }) => {
  const [pokemon, setPokemon] = useState(null)
  const [cardWidth, setCardWidth] = useState(null)
  const navigation = useNavigation()

  const id = data.url.split('/')[6]
  const formattedName = data.name.charAt(0).toUpperCase() + data.name.slice(1)
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`

  const dimensions = Dimensions.get('screen')

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
      style={{
        display: 'flex',
        flexDirection: 'row',
        width:
          dimensions.width < 768
            ? dimensions.width / 2 - 22
            : dimensions.width / 3 - 22,
        height: cardWidth,
        backgroundColor: getPokemonBackground(pokemon?.types[0].type.name),
        borderRadius: 20,
      }}
      onLayout={(event) => {
        const { width } = event.nativeEvent.layout
        setCardWidth(width)
      }}
      onPress={() => {
        navigation.navigate('PokemonDetails', { url: data.url })
      }}
    >
      <View
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          flexDirection: 'row',
          alignItems: 'center',
          width: '100%',
          marginBottom: 10,
          paddingLeft: 10,
          paddingRight: 10,
          borderRadius: 10,
        }}
      >
        <Text>{formattedName}</Text>
        <Image
          style={{ width: 75, height: 75 }}
          source={{
            uri: imageUrl,
          }}
        />
        {pokemon ? (
          <Text>{pokemon.types.map((item) => item.type.name)}</Text>
        ) : null}
      </View>
    </TouchableOpacity>
  )
}

export default PokemonCard
