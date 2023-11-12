import { Paper, Stack, Divider, styled } from '@mui/material';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import { useRepList } from '../hooks/useRepList';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : 'rgba(255, 255, 255, 0.95);',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  fontSize: 18,
  fontWeight: 'bold',
}));

const Item2 = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#525F78',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  marginBottom: theme.spacing(1),
  textAlign: 'center',
  color: '#F5F5F5',
  fontSize: 18,
  fontWeight: 'bold',
}));

const StyledScore = styled('div')({
  color: '#424242',
  textAlign: 'center',
  justifyContent: 'center',
  fontSize: '2em',
  padding: '.2em',
});

export const Monitor = () => {
  const {
    repPlayer1Name,
    repPlayer2Name,
    repPlayer1Score,
    repPlayer2Score,
    repRoundInfo,
    repBestOfInfo,
    repPlayer1Poke1Icon,
    repPlayer1Poke2Icon,
    repPlayer1Poke3Icon,
    repPlayer1Poke4Icon,
    repPlayer1Poke5Icon,
    repPlayer1Poke6Icon,
    repPlayer2Poke1Icon,
    repPlayer2Poke2Icon,
    repPlayer2Poke3Icon,
    repPlayer2Poke4Icon,
    repPlayer2Poke5Icon,
    repPlayer2Poke6Icon,
  } = useRepList();
  return (
    <>
      <Item sx={{ width: 305 }}>
        <Grid container>
          <Grid item xs={12}>
            <Item2>Monitor</Item2>
          </Grid>
          <Grid item xs={6}>
            <div>{repRoundInfo}</div>
          </Grid>
          <Grid item xs={6}>
            <div>{repBestOfInfo}</div>
          </Grid>
          <Grid item xs={12}>
            <Divider sx={{ mx: 0.5, my: 1 }} />
          </Grid>
          <Grid item xs={9}>
            <div>{repPlayer1Name}</div>
            <Stack direction="row">
              <Avatar alt="p1-pokemon1" src={repPlayer1Poke1Icon} />
              <Avatar alt="p1-pokemon2" src={repPlayer1Poke2Icon} />
              <Avatar alt="p1-pokemon3" src={repPlayer1Poke3Icon} />
              <Avatar alt="p1-pokemon4" src={repPlayer1Poke4Icon} />
              <Avatar alt="p1-pokemon5" src={repPlayer1Poke5Icon} />
              <Avatar alt="p1-pokemon6" src={repPlayer1Poke6Icon} />
            </Stack>
          </Grid>
          <Grid item xs={3}>
            <StyledScore>{repPlayer1Score}</StyledScore>
          </Grid>
          <Grid item xs={12}>
            <Divider sx={{ mx: 0.5, my: 1 }} />
          </Grid>
          <Grid item xs={9}>
            <div>{repPlayer2Name}</div>
            <Stack direction="row">
              <Avatar alt="p2-pokemon1" src={repPlayer2Poke1Icon} />
              <Avatar alt="p2-pokemon2" src={repPlayer2Poke2Icon} />
              <Avatar alt="p2-pokemon3" src={repPlayer2Poke3Icon} />
              <Avatar alt="p2-pokemon4" src={repPlayer2Poke4Icon} />
              <Avatar alt="p2-pokemon5" src={repPlayer2Poke5Icon} />
              <Avatar alt="p2-pokemon6" src={repPlayer2Poke6Icon} />
            </Stack>
          </Grid>
          <Grid item xs={3}>
            <StyledScore>{repPlayer2Score}</StyledScore>
          </Grid>
          <Grid item xs={12}>
            <Divider sx={{ mx: 0.5, my: 1 }} />
          </Grid>
        </Grid>
      </Item>
    </>
  );
};
