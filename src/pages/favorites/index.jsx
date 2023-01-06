import AsyncStorage from '@react-native-async-storage/async-storage'
import { useFocusEffect } from '@react-navigation/native'
import { useCallback, useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import Listing from '../../components/organisms/Listing/Listing'

const Favorites = () => {
  const [favoritesPokemon, setFavoritesPokemon] = useState([])

  useFocusEffect(useCallback(() => {
    getFavoritesPokemon()
  }, []))

  const getFavoritesPokemon = async () => {
    const storedPokemon = JSON.parse(await AsyncStorage.getItem('FAVORITES'))
    setFavoritesPokemon(storedPokemon)
  }

  return (
    <View style={{
      backgroundColor: '#fff',
      width: '100%',
      height: '100%',
    }}>
      <View style={{
        width: '100%',
        height: 160,
        marginLeft: 15,
      }}>
        <Text style={{
          fontSize: 50,
          marginTop: 50,
          fontWeight: 'bold',
          marginTop: 75
        }}>Favorites</Text>
      </View>

      <Listing data={favoritesPokemon} />
    </View>
  )
}

export default Favorites
