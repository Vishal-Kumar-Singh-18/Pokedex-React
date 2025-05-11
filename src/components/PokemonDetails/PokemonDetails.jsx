import { useParams } from "react-router-dom";
import "./PokemonDetails.css";
import usePokemonDetails from "../../hooks/usePokemonDetails";
function PokemonDetails({ pokemonName }) {
  const { id } = useParams();
  const [pokemon] = usePokemonDetails(id, pokemonName);
  return (
    <div className="pokemon-details-wrapper">
      <img className="pokemon-details-image" src={pokemon.image} />
      <div className="pokemon-details-name">
        <span>{pokemon.name}</span>
      </div>
      <div className="pokemon-details-name">Height: {pokemon.height}</div>
      <div className="pokemon-details-name">Weight: {pokemon.weight}</div>
      <div className="pokemon-details-types">
        {pokemon.types && pokemon.types.map((t) => <div key={t}> {t} </div>)}
      </div>

      {pokemon.types &&
        pokemon.similarPokemons &&
        pokemon.similarPokemons.length > 0 && (
          <div className="pokemon-similar-wrapper">
            <h3>More {pokemon.types[0]} type pokemons</h3>
            <ul className="pokemon-similar-list">
              {pokemon.similarPokemons.map((p, index) => (
                <li key={p.url || index}>{p.name}</li>
              ))}
            </ul>
          </div>
        )}
    </div>
  );
}

export default PokemonDetails;
