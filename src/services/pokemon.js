import Axios from 'axios';

const baseUrl = 'https://pokeapi.co/api/v2/pokemon';

export const getAllPokemon = async () => {
  const response = await Axios.get(`${baseUrl}?limit=20&offset=0`);
  return response.data;
}

export const getPokemon = async (pokemonUrl) => {
  const response = await Axios.get(`${pokemonUrl}`);
  return response.data;
}
