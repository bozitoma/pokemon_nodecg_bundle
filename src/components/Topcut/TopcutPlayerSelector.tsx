import { TextField } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import { useReplicant } from '../../hooks/useReplicant';
import { useCallback, useMemo } from 'react';
import { PokemonNum } from '../../types/scoreboard';
import { emptyParty, pokemonNumList } from '../../utils/const';

// TODO: プレイヤーが重複した時にエラーを出す
export const TopcutPlayerSelector = ({ topcutPlace }: { topcutPlace: number }) => {
  const [playerRep] = useReplicant('Player');
  const [partiesRep] = useReplicant('Parties');
  const [topcutRep, setTopcutRep] = useReplicant('Topcut');
  const playerName = useMemo(
    () => topcutRep?.players?.find((player) => player.place === topcutPlace)?.name ?? 'なし',
    [topcutRep, topcutPlace]
  );
  const players = useMemo(
    () => [...new Set(playerRep?.map((player) => player.player_name || '')), 'なし'],
    [playerRep]
  );
  const getParty = useCallback(
    (playerName: string) => {
      if (!partiesRep) return emptyParty;
      
      // デバッグ用のログ追加
      console.log('検索するプレイヤー名:', playerName);
      console.log('利用可能なプレイヤー名一覧:', [...partiesRep].map(p => p.player_name));
      
      const partyInfo = [...partiesRep].find((party) => {
        if (!party.player_name) return false;
        
        if (party.player_name.includes(playerName) || playerName.includes(party.player_name)) {
          console.log('部分一致したが完全一致しなかったケース:', {
            検索名: playerName,
            データベース上の名前: party.player_name,
            長さ: {
              検索名: playerName.length,
              データベース上の名前: party.player_name.length
            },
            文字コード: {
              検索名: Array.from(playerName).map(c => c.charCodeAt(0)),
              データベース上の名前: Array.from(party.player_name).map(c => c.charCodeAt(0))
            }
          });
        }
        return party.player_name === playerName;
      });

      console.log('見つかったパーティ情報:', partyInfo);
      console.log('pokemonNumList:', pokemonNumList);
      
      const result = pokemonNumList.map((key) => {
        const pokemon = partyInfo?.[key as PokemonNum];
        console.log(`${key}のポケモン:`, pokemon);
        return pokemon ?? '';
      });
      
      return result;
    },
    [partiesRep]
  );
  const onChange = useCallback(
    (_event: unknown, newPlayer: string | null) => {
      if (!topcutRep) return;
      console.log(newPlayer);
      setTopcutRep({
        total: topcutRep.total,
        players: topcutRep.players?.map((player) =>
          player.place === topcutPlace
            ? {
                ...player,
                name: newPlayer ?? 'なし',
                party: getParty(newPlayer ?? 'なし'),
              }
            : player
        ),
      });
    },
    [topcutRep]
  );
  console.log('topcutRep', topcutRep);
  return (
    <Autocomplete
      id={`Topcut-PlayerSelector-${topcutPlace}`}
      size="small"
      value={playerName}
      onChange={onChange}
      options={players}
      sx={{ width: 150 }}
      renderInput={(params) => <TextField {...params} label="プレイヤー" variant="standard" />}
    />
  );
};
