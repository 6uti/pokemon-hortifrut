const express = require('express');
const router = express.Router();

const cache = require('../cache/cache');
const { fetchPokemon } = require('../services/pokeapi.service');

router.get('/', async (req, res) => {
  try {
    const search = req.query.search?.toLowerCase() || '';
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 20;
    const offset = (page - 1) * limit;

    const cacheKey = `pokemon-${search}-${page}-${limit}`;

    if (cache.has(cacheKey)) {
      return res.json(cache.get(cacheKey));
    }

    const data = await fetchPokemon({ limit: 1000, offset: 0 });

    let results = data.results;

    if (search) {
      results = results.filter(p =>
        p.name.includes(search)
      );
    }

    const total = results.length;
    const paginated = results.slice(offset, offset + limit);

    const response = {
      page,
      limit,
      total,
      results: paginated.map(p => {
        const id = getPokemonId(p.url);

        return {
          id,
          name: p.name,
          image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
        };
      })
    };

    cache.set(cacheKey, response);
    res.json(response);

  } catch (error) {
    res.status(500).json({ message: 'Error fetching Pokémon' });
  }

  function getPokemonId(url) {
    const parts = url.split('/').filter(Boolean);
    return parts[parts.length - 1];
  }
});

module.exports = router;