import { useEffect, useState } from 'react';
import { api } from './services/api';
import { useDebounce } from './hooks/useDebounce';

function App() {
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [data, setData] = useState({ results: [] });
  const [loading, setLoading] = useState(false);

  const debouncedSearch = useDebounce(search);

  useEffect(() => {
    //window.scrollTo({ top: 0, behavior: 'smooth' });
    async function fetchPokemon() {
      setLoading(true);

      try {
        const cacheKey = `pokemon-${debouncedSearch}-${page}`;
        const cached = localStorage.getItem(cacheKey);

        if (cached) {
          const parsed = JSON.parse(cached);

          if (parsed && Array.isArray(parsed.results)) {
            setData(parsed);
            setLoading(false);
            return;
          }
}

        const res = await api.get('/pokemon', {
          params: {
            search: debouncedSearch,
            page,
            limit: 20
          }
        });

        console.log('API DATA 👉', res.data);

        setData(res.data);
        localStorage.setItem(cacheKey, JSON.stringify(res.data));
      } catch (error) {
        console.error('ERROR FETCHING POKEMON ❌', error);
      } finally {
        setLoading(false);
      }
    }

    fetchPokemon();
  }, [debouncedSearch, page]);

  return (
    <div className="container">
  <h1>Pokémon App</h1>

  <input
    className="search"
    placeholder="Buscar Pokémon"
    value={search}
    onChange={e => {
      setSearch(e.target.value);
      setPage(1);
    }}
  />

  {loading && <p className="loading">Cargando...</p>}

  <ul className="pokemon-grid">
    {data?.results?.map(pokemon => (
      <li key={pokemon.id} className="pokemon-card">
        <img src={pokemon.image} alt={pokemon.name} />
        <span>{pokemon.name}</span>
      </li>
    ))}
  </ul>

  <div className="pagination">
    <button
      disabled={page === 1}
      onClick={() => setPage(p => p - 1)}
    >
      ← Anterior
    </button>

    <span>Página {page}</span>

    <button
      disabled={page * 20 >= data.total}
      onClick={() => setPage(p => p + 1)}
    >
      Siguiente →
    </button>
  </div>
</div>

  );
}

export default App;
