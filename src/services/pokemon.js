import Axios from 'axios';

const baseUrl = 'https://pokeapi.co/api/v2/pokemon';

export const getAllPokemon = async (limit, offset = 0) => {
  const response = await Axios.get(`${baseUrl}?limit=${limit}&offset=${offset}`);
  return response.data;
}

export const getPokemon = async (pokemonUrl = null, pokemonId) => {
  if (pokemonUrl) {
    const response = await Axios.get(`${pokemonUrl}`);
    return response.data;
  } else {
    const response = await Axios.get(`${baseUrl}/pokemon/${pokemonId}`);
    return response.data;
  }
}
