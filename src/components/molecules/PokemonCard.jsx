import { useEffect } from 'react'
import { Text, View, Image } from 'react-native'

const PokemonCard = ({ data }) => {
  const id = data.url.split('/')[6]
  const formattedName = data.name.charAt(0).toUpperCase() + data.name.slice(1)

  return (
    <View
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        backgroundColor: '#ddd',
        alignItems: 'center',
        marginBottom: 10,
        paddingLeft: 10,
        paddingRight: 10,
      }}
    >
      <Text>{formattedName}</Text>
      <Image
        style={{ width: 50, height: 50 }}
        source={{
          uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
        }}
      />
    </View>
  )
}

export default PokemonCard
