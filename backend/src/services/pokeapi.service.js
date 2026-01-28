const axios = require('axios');

const POKE_API_URL = 'https://pokeapi.co/api/v2/pokemon';

async function fetchPokemon({ limit, offset }) {
  const response = await axios.get(POKE_API_URL, {
    params: { limit, offset }
  });

  return response.data;
}

module.exports = { fetchPokemon };