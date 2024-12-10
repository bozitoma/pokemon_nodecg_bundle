
import { Paper, styled } from '@mui/material';
import { memo } from 'react';

const Style = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#525F78',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: '#F5F5F5',
  fontSize: 18,
  fontWeight: 'bold',
  // width: 660,
  marginBottom: 15
}));

export const Heading = memo(({ children }: { children?: React.ReactNode }) => {
  return <Style>{children}</Style>;
});
