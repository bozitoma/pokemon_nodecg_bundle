import { Table, TableContainer, Paper, TableBody, TableHead } from '@mui/material';
import { useRepList } from '../../hooks/useRepList';
import { useStyled } from '../../hooks/useStyled';

// type Prop = {
//   rank: number;
//   pokemon: string;
//   score: string;
// };

export function KPTable() {
  const { StyledTableCell, StyledTableRow } = useStyled();
  const { repKP } = useRepList();
  const KPList = repKP?.map((e) => {
    return {
      rank: e.rank,
      pokemon: e.pokemon,
      score: e.score + '%',
    };
  });

  // Replicantの仕様で勝手にUndefinedが許容されるので、asでUndefinedの許容を無効にする
  const typed = KPList ? KPList : [];

  return (
    <TableContainer component={Paper}>
      <Table stickyHeader size="small">
        <TableHead>
          <StyledTableRow>
            <StyledTableCell sx={{ width: 20 }}>ID</StyledTableCell>
            <StyledTableCell>Rank</StyledTableCell>
            <StyledTableCell>Pokemon</StyledTableCell>
            <StyledTableCell>Score</StyledTableCell>
          </StyledTableRow>
        </TableHead>
        <TableBody>
          {typed.map((KP, i) => (
            <StyledTableRow key={i + 1} hover>
              <StyledTableCell>{i + 1}</StyledTableCell>
              <StyledTableCell>{KP.rank}</StyledTableCell>
              <StyledTableCell>{KP.pokemon}</StyledTableCell>
              <StyledTableCell>{KP.score}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
