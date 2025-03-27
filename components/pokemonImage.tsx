import Pokedex from "pokedex-promise-v2";

export default function PokemonImage({ pokemon }: { pokemon: Pokedex.Pokemon }) {
  return (
    <img
      src={(pokemon.sprites.front_default as string)}
      alt={pokemon.name}
      width="150px"
      height="150px"
      style={{ objectFit: "contain" }}
    />
  )
}