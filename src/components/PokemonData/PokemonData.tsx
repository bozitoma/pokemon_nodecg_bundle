import { Stack, TextField, Typography } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import Autocomplete from '@mui/material/Autocomplete';
import { useCallback, useMemo, useState } from 'react';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { useReplicant } from '../../hooks/useReplicant';
import { ModalAlert } from '../ModalAlert';
import { Wrapper } from '../Wrapper';
import { DataTable } from './DataTable';
import { TitleDivider } from '../TitleDivider';

export const PokemonData = () => {
  const [selectPokemon, setSelectPokemon] = useState<string | null>(null);
  const [rankingRep] = useReplicant('PokemonRanking');
  const [pokemonDataRep, setPokemonDataRep] = useReplicant('PokemonData');
  const pokemons = useMemo(() => Object.keys(rankingRep ?? {}), [rankingRep]);
  console.log(pokemonDataRep);

  // Submitのスナックバー
  const [submitOpen, setSubmitOpen] = useState(false);

  const handleChange = useCallback((_event: unknown, newPokemon: string | null) => {
    if (newPokemon) setSelectPokemon(newPokemon);
  }, []);

  const onClick = useCallback(() => {
    if (rankingRep && selectPokemon) {
      setPokemonDataRep({ ...rankingRep?.[selectPokemon], name: selectPokemon });
      setSubmitOpen(true); // Submit完了のスナックバーを表示
    }
  }, [selectPokemon, rankingRep]);

  const teraTypes = useMemo(() => {
    const sorted = Object.entries(pokemonDataRep?.teraType ?? {})
      .map(([name, total]) => ({ name, total }))
      .sort((a, b) => b.total - a.total);

    let currentRank = 1;
    let previousTotal = sorted[0]?.total;

    return sorted.map((item) => {
      if (previousTotal !== item.total) {
        currentRank = sorted.findIndex((i) => i.total === item.total) + 1;
        previousTotal = item.total;
      }
      return { ...item, rank: currentRank };
    });
  }, [pokemonDataRep]);
  const abilitys = useMemo(() => {
    const sorted = Object.entries(pokemonDataRep?.ability ?? {})
      .map(([name, total]) => ({ name, total }))
      .sort((a, b) => b.total - a.total);

    let currentRank = 1;
    let previousTotal = sorted[0]?.total;

    return sorted.map((item) => {
      if (previousTotal !== item.total) {
        currentRank = sorted.findIndex((i) => i.total === item.total) + 1;
        previousTotal = item.total;
      }
      return { ...item, rank: currentRank };
    });
  }, [pokemonDataRep]);
  const items = useMemo(() => {
    const sortedItems = Object.entries(pokemonDataRep?.item ?? {})
      .map(([name, total]) => ({ name, total }))
      .sort((a, b) => b.total - a.total);

    let currentRank = 1;
    let previousTotal = sortedItems[0]?.total;

    return sortedItems.map((item) => {
      if (previousTotal !== item.total) {
        currentRank = sortedItems.findIndex((i) => i.total === item.total) + 1;
        previousTotal = item.total;
      }
      return { ...item, rank: currentRank };
    });
  }, [pokemonDataRep]);
  const moves = useMemo(() => {
    const sortedMoves = Object.entries(pokemonDataRep?.moves ?? {})
      .map(([name, total]) => ({ name, total }))
      .sort((a, b) => b.total - a.total);

    let currentRank = 1;
    let previousTotal = sortedMoves[0]?.total;

    return sortedMoves.map((move) => {
      if (previousTotal !== move.total) {
        currentRank = sortedMoves.findIndex((m) => m.total === move.total) + 1;
        previousTotal = move.total;
      }
      return { ...move, rank: currentRank };
    });
  }, [pokemonDataRep]);

  return (
    <>
      <Stack spacing={2}>
        <Wrapper title="ポケモンデータ">
          <Stack spacing={1} direction="row" justifyContent="center" alignItems="center">
            <Autocomplete
              id={'PokemonDataSelector'}
              size="small"
              options={pokemons}
              getOptionLabel={(option) => `${option}`}
              value={selectPokemon}
              onChange={handleChange}
              sx={{ width: 250 }}
              renderInput={(params) => (
                <TextField {...params} label="Pokemon Select" variant="outlined" />
              )}
            />
            <LoadingButton
              variant="contained"
              size="small"
              startIcon={<FileDownloadIcon />}
              onClick={onClick}
            >
              INPORT
            </LoadingButton>
            <TitleDivider title="選択中" />
            <Typography>{pokemonDataRep?.name}</Typography>
            <TitleDivider title="採用数" />
            <Typography>{pokemonDataRep?.total}</Typography>
          </Stack>
        </Wrapper>
        <Stack spacing={2} direction="row">
          <Wrapper title="とくせい">
            <DataTable rows={abilitys} />
          </Wrapper>
          <Wrapper title="もちもの">
            <DataTable rows={items} />
          </Wrapper>
          <Wrapper title="テラスタイプ">
            <DataTable rows={teraTypes} />
          </Wrapper>
          <Wrapper title="わざ">
            <DataTable rows={moves} />
          </Wrapper>
        </Stack>
      </Stack>
      {/* Submitのスナックバー */}
      <ModalAlert
        state={submitOpen}
        setState={setSubmitOpen}
        text="Import has been completed!"
        severity="success"
      />
    </>
  );
};
