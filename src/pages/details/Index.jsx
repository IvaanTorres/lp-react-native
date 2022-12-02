import { useEffect, useState } from 'react'
import { Text } from 'react-native'
import { getPokemon } from '../../services/pokemon'

const PokemonDetails = (props) => {
  const [pokemon, setPokemon] = useState(null)

  // TODO: Get the pokemon name from the route params
  const { url } = props.route.params

  useEffect(() => {
    getPokemonDetails()
  }, [])

  const getPokemonDetails = async () => {
    const pokemon = await getPokemon(url)
    setPokemon(pokemon)
  }

  return <>{pokemon ? <Text>{pokemon.name}</Text> : null}</>
}

export default PokemonDetails
