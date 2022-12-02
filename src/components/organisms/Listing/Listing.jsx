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
import PokemonCard from '../../molecules/PokemonCard/PokemonCard'
import Styles from './styles'

const Listing = ({ data, getMorePokemon }) => {
  const windowWidth = Dimensions.get('screen').width

  return (
    <View style={Styles.wrapper}>
      <FlatList
        style={Styles.flatlist}
        contentContainerStyle={Styles.listContainer}
        numColumns={windowWidth < 768 ? 2 : 3}
        columnWrapperStyle={Styles.columnWrapper}
        ItemSeparatorComponent={() => <View style={Styles.itemSeparator} />}
        data={data}
        renderItem={({ item }) => <PokemonCard data={item} />}
        keyExtractor={(item) => item.name}
        ListHeaderComponent={() => <Text style={Styles.header}>Pokedex</Text>}
        ListFooterComponent={() => <View style={Styles.footer} />}
        onEndReached={getMorePokemon}
      />
    </View>
  )
}

export default Listing
