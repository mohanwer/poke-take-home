import { StatElement } from "pokedex-promise-v2";

import { Card, CardContent, Typography } from "@mui/material";

export default function Stats({ stats }: { stats: StatElement[] }) {
  return (
    <div>
      {stats.map((stat, index) => (
        <Card key={index} style={{ margin: "10px" }}>
          <CardContent>
            <Typography variant="h6">
              {stat.stat.name.toUpperCase()}
            </Typography>
            <Typography variant="body1">
              Base Stat: {stat.base_stat}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Effort: {stat.effort}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
