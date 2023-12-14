import { useEffect, useState } from 'react';

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
  const POKEDEX = pokedex.map((obj) => obj.name);

  return { pokedex, POKEDEX };
}
