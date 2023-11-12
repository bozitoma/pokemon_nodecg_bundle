import { ChangeEventHandler, ReactEventHandler, useState } from "react";
import { Scoreboard } from "../types/scoreboard";

export const useScoreboard = () => {
  const [scoreboardInfo, setScoreboardInfo] = useState<Scoreboard>({
    Player1: {
      name: "", //プレイヤーネーム
      pokemon1: {
        name: "", //ポケモン名
        type1: "", //タイプ1
        type2: "", //タイプ2
        teratype: "", //テラスタイプ
        level: "50", //レベル
        item: "", //持ち物
        ability: "", //特性
        nature: "", //性格
        gender: "", //性別
        waza1: "", //わざ1
        waza2: "", //わざ2
        waza3: "", //わざ3
        waza4: "", //わざ4
      },
      pokemon2: {
        name: "", //ポケモン名
        type1: "", //タイプ1
        type2: "", //タイプ2
        teratype: "", //テラスタイプ
        level: "50", //レベル
        item: "", //持ち物
        ability: "", //特性
        nature: "", //性格
        gender: "", //性別
        waza1: "", //わざ1
        waza2: "", //わざ2
        waza3: "", //わざ3
        waza4: "", //わざ4
      },
      pokemon3: {
        name: "", //ポケモン名
        type1: "", //タイプ1
        type2: "", //タイプ2
        teratype: "", //テラスタイプ
        level: "50", //レベル
        item: "", //持ち物
        ability: "", //特性
        nature: "", //性格
        gender: "", //性別
        waza1: "", //わざ1
        waza2: "", //わざ2
        waza3: "", //わざ3
        waza4: "", //わざ4
      },
      pokemon4: {
        name: "", //ポケモン名
        type1: "", //タイプ1
        type2: "", //タイプ2
        teratype: "", //テラスタイプ
        level: "50", //レベル
        item: "", //持ち物
        ability: "", //特性
        nature: "", //性格
        gender: "", //性別
        waza1: "", //わざ1
        waza2: "", //わざ2
        waza3: "", //わざ3
        waza4: "", //わざ4
      },
      pokemon5: {
        name: "", //ポケモン名
        type1: "", //タイプ1
        type2: "", //タイプ2
        teratype: "", //テラスタイプ
        level: "50", //レベル
        item: "", //持ち物
        ability: "", //特性
        nature: "", //性格
        gender: "", //性別
        waza1: "", //わざ1
        waza2: "", //わざ2
        waza3: "", //わざ3
        waza4: "", //わざ4
      },
      pokemon6: {
        name: "", //ポケモン名
        type1: "", //タイプ1
        type2: "", //タイプ2
        teratype: "", //テラスタイプ
        level: "50", //レベル
        item: "", //持ち物
        ability: "", //特性
        nature: "", //性格
        gender: "", //性別
        waza1: "", //わざ1
        waza2: "", //わざ2
        waza3: "", //わざ3
        waza4: "", //わざ4
      },
    },
    Player2: {
      name: "", //プレイヤーネーム
      pokemon1: {
        name: "", //ポケモン名
        type1: "", //タイプ1
        type2: "", //タイプ2
        teratype: "", //テラスタイプ
        level: "50", //レベル
        item: "", //持ち物
        ability: "", //特性
        nature: "", //性格
        gender: "", //性別
        waza1: "", //わざ1
        waza2: "", //わざ2
        waza3: "", //わざ3
        waza4: "", //わざ4
      },
      pokemon2: {
        name: "", //ポケモン名
        type1: "", //タイプ1
        type2: "", //タイプ2
        teratype: "", //テラスタイプ
        level: "50", //レベル
        item: "", //持ち物
        ability: "", //特性
        nature: "", //性格
        gender: "", //性別
        waza1: "", //わざ1
        waza2: "", //わざ2
        waza3: "", //わざ3
        waza4: "", //わざ4
      },
      pokemon3: {
        name: "", //ポケモン名
        type1: "", //タイプ1
        type2: "", //タイプ2
        teratype: "", //テラスタイプ
        level: "50", //レベル
        item: "", //持ち物
        ability: "", //特性
        nature: "", //性格
        gender: "", //性別
        waza1: "", //わざ1
        waza2: "", //わざ2
        waza3: "", //わざ3
        waza4: "", //わざ4
      },
      pokemon4: {
        name: "", //ポケモン名
        type1: "", //タイプ1
        type2: "", //タイプ2
        teratype: "", //テラスタイプ
        level: "50", //レベル
        item: "", //持ち物
        ability: "", //特性
        nature: "", //性格
        gender: "", //性別
        waza1: "", //わざ1
        waza2: "", //わざ2
        waza3: "", //わざ3
        waza4: "", //わざ4
      },
      pokemon5: {
        name: "", //ポケモン名
        type1: "", //タイプ1
        type2: "", //タイプ2
        teratype: "", //テラスタイプ
        level: "50", //レベル
        item: "", //持ち物
        ability: "", //特性
        nature: "", //性格
        gender: "", //性別
        waza1: "", //わざ1
        waza2: "", //わざ2
        waza3: "", //わざ3
        waza4: "", //わざ4
      },
      pokemon6: {
        name: "", //ポケモン名
        type1: "", //タイプ1
        type2: "", //タイプ2
        teratype: "", //テラスタイプ
        level: "50", //レベル
        item: "", //持ち物
        ability: "", //特性
        nature: "", //性格
        gender: "", //性別
        waza1: "", //わざ1
        waza2: "", //わざ2
        waza3: "", //わざ3
        waza4: "", //わざ4
      },
    },
    RoundInfo: "",
  });

  const playerNameEdit: ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.id === "player1") {
      setScoreboardInfo((prev) => ({
        ...prev,
        Player1: {
          ...prev.Player1,
          name: event.target.value,
        },
      }));
    } else if (event.target.id === "player2") {
      setScoreboardInfo((prev) => ({
        ...prev,
        Player2: {
          ...prev.Player2,
          name: event.target.value,
        },
      }));
    }
  };

  const playerNameSwap = () => {
    setScoreboardInfo((prev) => ({
      ...prev,
      Player1: {
        ...prev.Player1,
        name: scoreboardInfo.Player2.name,
      },
      Player2: {
        ...prev.Player2,
        name: scoreboardInfo.Player1.name,
      },
    }));
  };

  const roundSelect: ReactEventHandler<HTMLDivElement> = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setScoreboardInfo((prev) => ({
      ...prev,
      RoundInfo: event.target.value,
    }));
  };

  const roundReset = () => {
    setScoreboardInfo((prev) => ({
      ...prev,
      RoundInfo: "",
    }));
  };

  return {
    scoreboardInfo,
    setScoreboardInfo,
    playerNameEdit,
    playerNameSwap,
    roundSelect,
    roundReset,
  };
};

export const useBestOfInfo = () => {
  const [bestOfInfo, setBestOfInfo] = useState("");
  const [stateBestOfInfo, setStateBestOfInfo] = useState("");

  const handleButtonChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    setBestOfInfo(newAlignment);

    // (event.target as HTMLButtonElement)
    // →ボタンを操作したことで得たターゲットであることを型（HTMLButtonElement）として定義してる
    if ((event.target as HTMLButtonElement).value === stateBestOfInfo) {
      setStateBestOfInfo("");
    } else {
      setStateBestOfInfo((event.target as HTMLButtonElement).value);
    }
  };

  const handleTextChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setStateBestOfInfo((event.target as HTMLButtonElement).value);
  };

  const bestOfInfoReset = () => {
    setStateBestOfInfo("");
  };

  return {
    bestOfInfo,
    setBestOfInfo,
    stateBestOfInfo,
    setStateBestOfInfo,
    handleButtonChange,
    handleTextChange,
    bestOfInfoReset,
  };
};

export const useScore = () => {
  const [stateScore1p, setStateScore1p] = useState(0);
  const [stateScore2p, setStateScore2p] = useState(0);

  const scoreReset = () => {
    setStateScore1p(0);
    setStateScore2p(0);
  };

  return {
    stateScore1p,
    stateScore2p,
    setStateScore1p,
    setStateScore2p,
    scoreReset,
  };
};
