import { StatElement } from "pokedex-promise-v2";
import { Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";

export default function Stats({ stats }: { stats: StatElement[] }) {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Stat Name</TableCell>
          <TableCell>Base Stat</TableCell>
          <TableCell>Effort</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {stats.map((stat, index) => (
          <TableRow key={index}>
            <TableCell>{stat.stat.name.toUpperCase()}</TableCell>
            <TableCell>{stat.base_stat}</TableCell>
            <TableCell>{stat.effort}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
