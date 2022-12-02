import { memo, useCallback, useMemo, useRef, useState } from 'react'
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Dimensions,
} from 'react-native'
import PokemonCard from '../molecules/PokemonCard'

const Listing = ({ data, getMorePokemon }) => {
  const [lastElement, setLastElement] = useState(null)
  const [windowWidth, setWindowWidth] = useState(Dimensions.get('screen').width)

  const memoizedList = useMemo(
    () =>
      ({ item }) =>
        <PokemonCard data={item} />,
    [data]
  )

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        contentContainerStyle={{
          margin: 15,
          marginBottom: 20,
        }}
        numColumns={windowWidth < 768 ? 2 : 3}
        columnWrapperStyle={{
          justifyContent: 'space-between',
        }}
        ItemSeparatorComponent={() => <View style={{ height: 15 }} />}
        data={data}
        renderItem={memoizedList}
        keyExtractor={(item) => item.name}
        ListHeaderComponent={() => (
          <Text
            style={{
              fontSize: 50,
              fontWeight: 'bold',
              marginTop: 25,
              marginLeft: 0,
              marginBottom: 20,
            }}
          >
            Pokedex
          </Text>
        )}
        ListFooterComponent={() => <View style={{ height: 30 }} />}
        onEndReached={getMorePokemon}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
  },
  list: {
    display: 'flex',

    /* marginLeft: -15,
    marginRight: 15, */
  },
})

export default Listing
