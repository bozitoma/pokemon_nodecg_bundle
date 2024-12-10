import { BattlePokemon } from "../../types/scoreboard";

export const battlePokemonDefaultValue: BattlePokemon = {
  name: 'なし', //ポケモン名
  // icon: NoSelectIcon,
  // type1: 'none', //タイプ1
  // type2: 'none', //タイプ2
  teraType: 'normal', //テラスタイプ
  // level: 50, //レベル
  // item: '', //持ち物
  // ability: '', //特性
  // nature: '', //性格
  // gender: 'none', //性別
  // move1: '', //わざ1
  // move2: '', //わざ2
  // move3: '', //わざ3
  // move4: '', //わざ4

  // 対戦
  battleState: 'Benched',
  statusAilment: 'なし', //状態異常
  terastallize: false, //テラスタルの使用を表す真偽値
  terastalButton: false, //テラスタルボタンを1体だけに適用するための真偽値
};
