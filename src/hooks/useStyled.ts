import { Paper, TableCell, TableRow, styled, tableCellClasses } from '@mui/material';

export const useStyled = () => {
  const WhiteCard = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : 'rgba(255, 255, 255, 0.95);',
    ...theme.typography.body2,
    padding: theme.spacing(1.5),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    fontSize: 18,
    fontWeight: 'bold',
  }));

  const Heading = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#525F78',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    marginBottom: theme.spacing(1),
    textAlign: 'center',
    color: '#F5F5F5',
    fontSize: 18,
    fontWeight: 'bold',
    // width: 660,
  }));

  // Table用のスタイル
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.info.dark,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

  return {
    WhiteCard,
    Heading,
    StyledTableCell,
    StyledTableRow,
  };
};
