import Link from 'next/link';
import Pokedex from 'pokedex-promise-v2';
import { Card, CardContent, CardMedia, Container, Paper, Typography } from "@mui/material";

const P = new Pokedex();

async function PokemonImage({ pokemon }: { pokemon: Pokedex.Pokemon }) {
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

export default async function Home() {
  const pokemonList = await P.getPokemonsList(
    { limit: 10, offset: 100 },
  );
  const pokemonImages = await Promise.all(pokemonList.results.map(g => P.getPokemonByName(g.name)));

  return (
    <Paper>
      <Container style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        {pokemonList.results.map((g, i) => (
          <Card key={g.name} style={{ margin: '10px', padding: '10px', width: 345 }}>
            <Link href={`/${g.name}`} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <CardMedia>
                <PokemonImage pokemon={pokemonImages[i]}/>
              </CardMedia>
              <CardContent>
                <Typography variant="h6">
                  {g.name}
                </Typography>
              </CardContent>
            </Link>
          </Card>
        ))}
      </Container>
    </Paper>
  )
}