import { useRef, useState } from 'react'
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

const Listing = ({ data }) => {
  const [lastElement, setLastElement] = useState(null)
  const [windowWidth, setWindowWidth] = useState(Dimensions.get('screen').width)

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        contentContainerStyle={{
          margin: 15,
        }}
        numColumns={windowWidth < 768 ? 2 : 3}
        columnWrapperStyle={{
          justifyContent: 'space-between',
        }}
        ItemSeparatorComponent={() => <View style={{ height: 15 }} />}
        data={data}
        renderItem={({ item }) => <PokemonCard data={item} />}
        keyExtractor={(item) => item.name}
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
