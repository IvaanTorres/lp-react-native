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
        padding: 15,
        shadowOffset: { width: 5, height: 5 },
        shadowColor: 'black',
        shadowOpacity: 1,
        elevation: 5,
        // background color must be set
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
          position: 'relative',
          flexDirection: 'column',
          width: '100%',
          marginBottom: 10,
        }}
      >
        <Text
          style={{
            color: 'white',
            fontSize: 16,
            fontWeight: 'bold',
            textAlign: 'left',
          }}
        >
          #{pokemon?.id}
        </Text>
        <Text
          style={{
            color: 'white',
            fontSize: 25,
            fontWeight: 'bold',
            marginBottom: 5,
            textAlign: 'left',
          }}
        >
          {formattedName}
        </Text>
        <Image
          style={{
            width: '75%',
            height: '75%',
            position: 'absolute',
            bottom: -20,
            right: -15,
          }}
          source={{
            uri: imageUrl,
          }}
        />
        {pokemon
          ? pokemon.types.map((item) => (
              <Text
                key={item.type.name}
                style={{
                  color: 'rgba(255, 255, 255, 0.7)',
                  fontSize: 14,
                  fontWeight: 'bold',
                  borderRadius: 15,
                  //display: 'flex',
                  paddingVertical: 5,
                  paddingHorizontal: 10,
                  marginTop: 5,
                  backgroundColor: 'rgba(255, 255, 255, 0.3)',
                  width: '50%',
                  textAlign: 'center',
                }}
              >
                {item.type.name.slice(0, 1).toUpperCase() +
                  item.type.name.slice(1)}
              </Text>
            ))
          : null}
      </View>
    </TouchableOpacity>
  )
}

export default PokemonCard
