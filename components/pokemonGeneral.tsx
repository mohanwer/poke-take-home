import { Pokemon } from "pokedex-promise-v2";
import { Box, Card, CardContent, Chip, Divider, Typography } from "@mui/material";


export default function PokemonGeneral({ pokemon }: { pokemon: Pokemon }) {
  const abilties = pokemon.abilities.map(a => (
    <Chip label={a.ability.name} key={a.ability.name} variant="outlined" sx={{ m: 2 }}/>
  ))

  return (
    <Card sx={{
      maxWidth: 345,
      mx: "auto",
      mt: 4,
      boxShadow: 3,
      borderRadius: 3,
      overflow: "hidden",
    }}>
      <Box sx={{ bgcolor: "#f2f2f2", p: 2, textAlign: "center" }}>
        {pokemon.sprites.front_default && (
          <img
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
            width="150px"
            height="150px"
            style={{ objectFit: "contain" }}
          />
        )}
        <Typography gutterBottom variant="h2" sx={{ fontWeight: "bold", textTransform: "capitalize" }}>
          {pokemon.name}
        </Typography>
      </Box>
      <CardContent sx={{ textAlign: "center" }}>
        <Typography
          variant="h4"
          sx={{ color: "#1976d2", fontWeight: "bold", textTransform: "capitalize", mb: 2 }}
        >
          {pokemon.types.map((t) => t.type.name).join(", ")}
        </Typography>
        <Typography variant="h5" sx={{ fontSize: "1.2rem", mb: 2 }}>
          Weight: {pokemon.weight} kg
        </Typography>
        <Divider sx={{ mb: 2 }}/>
        <Typography gutterBottom variant="h6" sx={{ fontWeight: "bold", mt: 2 }}>
          Abilities
        </Typography>
        <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 1 }}>
          {abilties}
        </Box>
      </CardContent>
    </Card>
  )
}