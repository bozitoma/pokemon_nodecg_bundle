import { usePokedex } from '../../../hooks/usePokedex';
import { emptyParty } from '../../../utils/const';
import { useReplicant } from '../../../hooks/useReplicant';

export const TopcutPartyGraphics = ({ place }: { place: number }) => {
  const [topcutRep] = useReplicant('Topcut');
  const { getPokemonIcon } = usePokedex();

  // 元のplaceに対応するプレイヤーを探す
  const player = topcutRep?.players?.find(p => p.place === place);

  // プレイヤーが見つからない場合は空のパーティを表示
  const party = player?.party || emptyParty;

  return (
    <div className="party_row">
      {party.map((pokemon, index) => (
        <img key={index} className="pokemonIcon" src={getPokemonIcon(pokemon)} alt="" />
      ))}
    </div>
  );
};
