import { useNavigation } from '@react-navigation/native'
import { useEffect, useState } from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import { Dimensions } from 'react-native'

const PokemonCard = ({ data }) => {
  const [cardWidth, setCardWidth] = useState(null)
  const navigation = useNavigation()

  const id = data.url.split('/')[6]
  const formattedName = data.name.charAt(0).toUpperCase() + data.name.slice(1)
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`

  const dimensions = Dimensions.get('window')

  return (
    <TouchableOpacity
      style={{
        display: 'flex',
        flexDirection: 'row',
        width:
          dimensions.width / 2 - 22 /* // TODO: 3 in tablet, 2 in mobile */,
        /* width: dimensions.width / 2 - 22, */
        height: cardWidth,
        backgroundColor: 'red',
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
      </View>
    </TouchableOpacity>
  )
}

export default PokemonCard
