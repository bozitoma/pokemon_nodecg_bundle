import { TextField } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import { useReplicant } from '../../hooks/useReplicant';
import { useCallback, useMemo } from 'react';
import { PokemonNum } from '../../types/scoreboard';
import { emptyParty, pokemonNumList } from '../../utils/const';

// プレイヤー選択とパーティ選択を組み合わせた型
type PlayerWithPartyOption = {
  label: string;
  playerName: string;
  partyNum?: number;
  accountID?: string;
};

// TODO: プレイヤーが重複した時にエラーを出す
export const TopcutPlayerSelector = ({ topcutPlace }: { topcutPlace: number }) => {
  const [partiesRep] = useReplicant('Parties');
  const [topcutRep, setTopcutRep] = useReplicant('Topcut');

  // 現在選択されているプレイヤーの情報
  const selectedPlayerInfo = useMemo(() => {
    const currentPlayer = topcutRep?.players?.find((player) => player.place === topcutPlace);
    if (!currentPlayer || currentPlayer.name === 'なし') {
      return { label: 'なし', playerName: 'なし' };
    }
    return { label: currentPlayer.name, playerName: currentPlayer.name.split('_')[0] };
  }, [topcutRep, topcutPlace]);

  // 利用可能なプレイヤー＋パーティのオプション
  const playerOptions = useMemo(() => {
    // 「なし」オプション
    const options: PlayerWithPartyOption[] = [{ label: 'なし', playerName: 'なし' }];

    // パーティデータからオプションを作成
    if (partiesRep) {
      const partyOptions = [...partiesRep].filter(party => party.accountID && party.party_num && party.player_name)
        .map(party => ({
          label: `${party.player_name}_${party.party_num}`,
          playerName: party.player_name || '',
          partyNum: party.party_num || undefined,
          accountID: party.accountID || undefined
        }));

      options.push(...partyOptions);
    }

    return options;
  }, [partiesRep]);

  // 特定のパーティからポケモン情報を取得
  const getParty = useCallback(
    (option: PlayerWithPartyOption) => {
      if (!partiesRep || option.playerName === 'なし') return emptyParty;

      console.log('選択されたオプション:', option);

      // パーティ番号で絞り込む
      const partyInfo = option.partyNum !== undefined
        ? [...partiesRep].find(party =>
            party.player_name === option.playerName &&
            party.party_num === option.partyNum)
        : [...partiesRep].find(party =>
            party.player_name === option.playerName);

      console.log('見つかったパーティ情報:', partyInfo);

      // パーティが見つからない場合は空のパーティを返す
      if (!partyInfo) return emptyParty;

      // パーティ情報からポケモン名を抽出
      const result = pokemonNumList.map((key) => {
        const pokemon = partyInfo[key as PokemonNum];
        console.log(`${key}のポケモン:`, pokemon);
        return pokemon ?? '';
      });

      return result;
    },
    [partiesRep]
  );

  // 選択変更時の処理
  const onChange = useCallback(
    (_event: unknown, newOption: PlayerWithPartyOption | null) => {
      if (!topcutRep) return;

      const option = newOption || { label: 'なし', playerName: 'なし' };
      console.log('選択されたプレイヤー:', option);

      setTopcutRep({
        total: topcutRep.total,
        players: topcutRep.players?.map((player) =>
          player.place === topcutPlace
            ? {
                ...player,
                name: option.label,
                party: getParty(option),
              }
            : player
        ),
      });
    },
    [topcutRep, getParty]
  );

  return (
    <Autocomplete
      id={`Topcut-PlayerSelector-${topcutPlace}`}
      size="small"
      value={selectedPlayerInfo}
      onChange={onChange}
      options={playerOptions}
      isOptionEqualToValue={(option, value) => option.label === value.label}
      getOptionLabel={(option) => option.label}
      sx={{ width: 150 }}
      renderInput={(params) => <TextField {...params} label="プレイヤー" variant="standard" />}
    />
  );
};
