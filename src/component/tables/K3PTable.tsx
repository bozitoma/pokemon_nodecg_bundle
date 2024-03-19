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

export function K3PTable() {
  const { repK3P } = useRepList();
  const K3PList = repK3P?.map((e) => {
    return {
      rank: e.rank,
      pokemon: e.pokemon,
      score: e.score + '%',
    };
  });

  // Replicantの仕様で勝手にUndefinedが許容されるので、asでUndefinedの許容を無効にする
  const typed: Prop[] = K3PList as Prop[];

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
          {typed.map((K3P, i) => (
            <TableRow key={i + 1} hover>
              <TableCell>{i + 1}</TableCell>
              <TableCell>{K3P.rank}</TableCell>
              <TableCell>{K3P.pokemon}</TableCell>
              <TableCell>{K3P.score}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
