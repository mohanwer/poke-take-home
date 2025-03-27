import Pokedex from 'pokedex-promise-v2';
import { Button, Container, Divider } from "@mui/material";
import Stats from "@/components/stats";
import PokemonGeneral from "@/components/pokemonGeneral";
import Link from 'next/link';

const P = new Pokedex();

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const pokemon = await P.getPokemonByName(slug);
  return (
    <Container>
      <Link href="/">
        <Button variant="contained" color="primary">
          Back
        </Button>
      </Link>
      <PokemonGeneral pokemon={pokemon}/>
      <Divider sx={{ my: 4 }}/>
      <Stats stats={pokemon.stats}/>
    </Container>
  )
}