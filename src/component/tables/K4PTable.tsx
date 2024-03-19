import {
  Table,
  TableContainer,
  Paper,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material';
import { useRepList } from '../../hooks/useRepList';

type Prop = {
  rank: number;
  pokemon: string;
  score: string;
};

export function K4PTable() {
  const { repK4P } = useRepList();
  const K4PList = repK4P?.map((e) => {
    return {
      rank: e.rank,
      pokemon: e.pokemon,
      score: e.score + '%',
    };
  });

  // Replicantの仕様で勝手にUndefinedが許容されるので、asでUndefinedの許容を無効にする
  const typed: Prop[] = K4PList as Prop[];

  return (
    <TableContainer component={Paper}>
      <Table stickyHeader size="small">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Rank</TableCell>
            <TableCell>Pokemon</TableCell>
            <TableCell>Score</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {typed.map((K4P, i) => (
            <TableRow key={i + 1} hover>
              <TableCell>{i + 1}</TableCell>
              <TableCell>{K4P.rank}</TableCell>
              <TableCell>{K4P.pokemon}</TableCell>
              <TableCell>{K4P.score}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
