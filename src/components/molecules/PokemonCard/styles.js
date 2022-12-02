import { StyleSheet } from 'react-native'
import getPokemonBackgroundColor from '../../../utils/getPokemonBackgroundColor'

export default styles = (props) => StyleSheet.create({
  touchableCardWrapper: {
    display: 'flex',
    padding: 15,
    shadowOffset: { width: 5, height: 5 },
    shadowColor: 'black',
    shadowOpacity: 1,
    elevation: 5,
    flexDirection: 'row',
    width:
      props?.dimensions.width < 768
        ? props?.dimensions.width / 2 - 22
        : props?.dimensions.width / 3 - 22,
    height: props?.cardWidth,
    backgroundColor: getPokemonBackgroundColor(props?.pokemon?.types[0].type.name),
    borderRadius: 20,
  },
  cardLayout: {
    position: 'relative',
    flexDirection: 'column',
    width: '100%',
    marginBottom: 10,
  },
  pokemonId: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  pokemonName: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'left',
  },
  pokemonImage: {
    width: '75%',
    height: '75%',
    position: 'absolute',
    bottom: -20,
    right: -15,
  },
  pokemonType: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 14,
    fontWeight: 'bold',
    borderRadius: 15,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginTop: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    width: '50%',
    textAlign: 'center',
  }
})