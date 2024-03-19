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

export function PartyTable() {
  const { repParty } = useRepList();

  const partyList = repParty?.map((e) => {
    return {
      id: e.id,
      player_name: e.player_name,
      pokemon1: e.pokemon1,
      pokemon2: e.pokemon2,
      pokemon3: e.pokemon3,
      pokemon4: e.pokemon4,
      pokemon5: e.pokemon5,
      pokemon6: e.pokemon6,
    };
  });

  const typed = partyList ? partyList : [];

  return (
    <TableContainer component={Paper}>
      <Table stickyHeader size="small">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Player</TableCell>
            <TableCell>Pokemon1</TableCell>
            <TableCell>Pokemon2</TableCell>
            <TableCell>Pokemon3</TableCell>
            <TableCell>Pokemon4</TableCell>
            <TableCell>Pokemon5</TableCell>
            <TableCell>Pokemon6</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {typed.map((match) => (
            <TableRow key={match.id} hover>
              <TableCell>{match.id}</TableCell>
              <TableCell>{match.player_name}</TableCell>
              <TableCell>{match.pokemon1.name}</TableCell>
              <TableCell>{match.pokemon2.name}</TableCell>
              <TableCell>{match.pokemon3.name}</TableCell>
              <TableCell>{match.pokemon4.name}</TableCell>
              <TableCell>{match.pokemon5.name}</TableCell>
              <TableCell>{match.pokemon6.name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
