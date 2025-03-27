import { PokemonSprites } from "pokedex-promise-v2";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

export default function Spirits(sprites: PokemonSprites) {

  return (
    <Card>
      <CardMedia
        component="img"
        image={sprites.front_default || ""}
        alt={`Pokemon sprite`}
        style={{ width: "100%" }}
      />
      <CardContent>
        <Typography variant="body1" textAlign="center">
          Sprite
        </Typography>
      </CardContent>
    </Card>
  )
}
