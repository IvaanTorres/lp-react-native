import { StyleSheet } from 'react-native'

export default styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
  },
  /* FlatList */
  header: {
    fontSize: 50,
    fontWeight: 'bold',
    marginTop: 25,
    marginLeft: 0,
    marginBottom: 20,
  },
  footer: {
    height: 30
  },
  flatlist: {
    display: 'flex',
  },
  listContainer: {
    margin: 15,
    marginBottom: 20,
  },
  columnWrapper: {
    justifyContent: 'space-between',
  },
  itemSeparator: {
    height: 15
  }
})
