import { useEffect, useState } from 'react';
import { useRepList } from './useRepList';

type Pokedex = {
  [key: string]: string;
};

export function usePokedex() {
  // 整形したポケモン図鑑を格納するステート
  const [pokedex, setPokedex] = useState<Pokedex[]>([]);

  // ポケモン図鑑の表のヘッダーをKeyに整形する関数
  const CsvDic = (props: string[][]) => {
    const [header, ...rows] = props;
    const newPokedex: Pokedex[] = rows.map((row: string[]) =>
      row.reduce(
        (acc: object, cell: string, i: number) => ({
          ...acc,
          [header[i]]: cell,
        }),
        {}
      )
    );
    return newPokedex;
  };

  // ページ読み込み時にポケモン図鑑の表を読み込む
  useEffect(() => {
    fetch(
      'https://sheets.googleapis.com/v4/spreadsheets/1PlzCt_ZEg4Hht73Emm5FmQLVP8DXJRzvhL_86WCRWqA/values/Pokedex?key=AIzaSyDDds7LWxpwDzKKMzMs54m4pr1xryX6N1s'
    )
      .then((res) => res.json())
      .then((datas) => setPokedex(CsvDic(datas.values)));
  }, []);

  // ポケモン図鑑の名前をリストにした関数
  // const POKEDEX = pokedex.map((obj) => obj.name);

  const { repPokedex } = useRepList();
  const POKEDEX = repPokedex?.map((obj) => obj.name);

  const getPokemonIcon = (name: string | null) => {
    const pokeName = repPokedex?.findIndex((data) => data.name === name);
    if (typeof pokeName !== 'undefined' && repPokedex) {
      const index = repPokedex[pokeName];
      const icon =
        index === undefined
          ? 'https://resource.pokemon-home.com/battledata/img/item/item_0004.png'
          : index['img1'];
      return icon;
    }
  };

  return { pokedex, POKEDEX, getPokemonIcon };
}
