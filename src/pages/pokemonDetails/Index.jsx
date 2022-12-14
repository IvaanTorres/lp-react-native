import { useEffect, useState } from 'react'
import { Text, Image } from 'react-native'
import { getPokemon } from '../../services/pokemon'

const PokemonDetails = (props) => {
  const [pokemon, setPokemon] = useState(null)
  const [averageStats, setAverageStats] = useState(null)

  // TODO: Get the pokemon name from the route params
  const { url, id } = props.route.params

  const pokemonImageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`

  useEffect(() => {
    getPokemonDetails()
  }, [])

  useEffect(() => {
    if (pokemon) {
      const averageStats = pokemon.stats.reduce(
        (sum, stat) => sum + stat.base_stat,
        0
      )
      setAverageStats(averageStats)
    }
  }, [pokemon])

  const getPokemonDetails = async () => {
    const pokemon = await getPokemon(url)

    setPokemon(pokemon)
  }

  return (
    <>
      {pokemon ? (
        <>
          <Text>{pokemon.name}</Text>
          <Text>#{pokemon.id}</Text>
          {/* {getPokemonTypes(pokemon.types).map((type) => (
            <Text key={type}>{type}</Text>
          ))} */}
          {pokemon?.types.map((type) => (
            <Text key={type.type.name}>{type.type.name}</Text>
          ))}
          <Image
            style={{ width: 100, height: 100 }}
            source={{
              uri: pokemonImageUrl,
            }}
          />
          <Text>Abilities:</Text>
          {pokemon?.abilities.map((ability) => (
            <Text key={ability.ability.name}>
              {ability.is_hidden ? 'Hidden ability: ' : ''}
              {ability.ability.name}
            </Text>
          ))}

          <Text>Height:</Text>
          <Text>{pokemon?.height}kg</Text>

          <Text>Weight:</Text>
          <Text>{pokemon?.weight}kg</Text>

          <Text>Held items:</Text>
          {pokemon.held_items.length !== 0 ? (
            pokemon.held_items.map((item) => (
              <Text key={item.item.name}>{item.item.name}</Text>
            ))
          ) : (
            <Text>None</Text>
          )}

          <Text>Stats:</Text>
          {pokemon?.stats.map((stat) => (
            <Text key={stat.stat.name}>
              {stat.stat.name}: {stat.base_stat}
            </Text>
          ))}
          <Text>Average stats: {averageStats}</Text>
        </>
      ) : null}
    </>
  )
}

export default PokemonDetails
