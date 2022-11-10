import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
} from 'react-native'
import PokemonCard from '../molecules/PokemonCard'

const Listing = ({ data }) => {
  console.log(data)
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => <PokemonCard data={item} />}
        keyExtractor={(item) => item.name}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {},
})

export default Listing
