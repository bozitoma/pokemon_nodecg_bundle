import { useImmer } from "use-immer";
import { styled, ToggleButtonGroup } from "@mui/material";

export function useBattleToggleButton() {
  // トグルボタンのデザイン
  const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
    "& .MuiToggleButtonGroup-grouped": {
      margin: theme.spacing(0.5),
      border: 0,
      "&.Mui-disabled": {
        border: 0,
      },
      "&:not(:first-of-type)": {
        borderRadius: theme.shape.borderRadius,
      },
      "&:first-of-type": {
        borderRadius: theme.shape.borderRadius,
      },
    },
  }));

  // ボタンのハイライト
  const [alignment, setAlignment] = useImmer({
    Player1: {
      pokemon1: "Benched",
      pokemon2: "Benched",
      pokemon3: "Benched",
      pokemon4: "Benched",
      pokemon5: "Benched",
      pokemon6: "Benched",
    },
    Player2: {
      pokemon1: "Benched",
      pokemon2: "Benched",
      pokemon3: "Benched",
      pokemon4: "Benched",
      pokemon5: "Benched",
      pokemon6: "Benched",
    },
  });

  const handleAlignmentP1poke1 = (
    _event: React.MouseEvent<HTMLElement>,
    newAlignment: string | null
  ) => {
    if (newAlignment !== null) {
      setAlignment((prev) => {
        prev.Player1.pokemon1 = newAlignment;
      });
    }
  };

  const handleAlignmentP1poke2 = (
    _event: React.MouseEvent<HTMLElement>,
    newAlignment: string | null
  ) => {
    if (newAlignment !== null) {
      setAlignment((prev) => {
        prev.Player1.pokemon2 = newAlignment;
      });
    }
  };

  const handleAlignmentP1poke3 = (
    _event: React.MouseEvent<HTMLElement>,
    newAlignment: string | null
  ) => {
    if (newAlignment !== null) {
      setAlignment((prev) => {
        prev.Player1.pokemon3 = newAlignment;
      });
    }
  };

  const handleAlignmentP1poke4 = (
    _event: React.MouseEvent<HTMLElement>,
    newAlignment: string | null
  ) => {
    if (newAlignment !== null) {
      setAlignment((prev) => {
        prev.Player1.pokemon4 = newAlignment;
      });
    }
  };

  const handleAlignmentP1poke5 = (
    _event: React.MouseEvent<HTMLElement>,
    newAlignment: string | null
  ) => {
    if (newAlignment !== null) {
      setAlignment((prev) => {
        prev.Player1.pokemon5 = newAlignment;
      });
    }
  };

  const handleAlignmentP1poke6 = (
    _event: React.MouseEvent<HTMLElement>,
    newAlignment: string | null
  ) => {
    if (newAlignment !== null) {
      setAlignment((prev) => {
        prev.Player1.pokemon6 = newAlignment;
      });
    }
  };

  const handleAlignmentP2poke1 = (
    _event: React.MouseEvent<HTMLElement>,
    newAlignment: string | null
  ) => {
    if (newAlignment !== null) {
      setAlignment((prev) => {
        prev.Player2.pokemon1 = newAlignment;
      });
    }
  };

  const handleAlignmentP2poke2 = (
    _event: React.MouseEvent<HTMLElement>,
    newAlignment: string | null
  ) => {
    if (newAlignment !== null) {
      setAlignment((prev) => {
        prev.Player2.pokemon2 = newAlignment;
      });
    }
  };

  const handleAlignmentP2poke3 = (
    _event: React.MouseEvent<HTMLElement>,
    newAlignment: string | null
  ) => {
    if (newAlignment !== null) {
      setAlignment((prev) => {
        prev.Player2.pokemon3 = newAlignment;
      });
    }
  };

  const handleAlignmentP2poke4 = (
    _event: React.MouseEvent<HTMLElement>,
    newAlignment: string | null
  ) => {
    if (newAlignment !== null) {
      setAlignment((prev) => {
        prev.Player2.pokemon4 = newAlignment;
      });
    }
  };

  const handleAlignmentP2poke5 = (
    _event: React.MouseEvent<HTMLElement>,
    newAlignment: string | null
  ) => {
    if (newAlignment !== null) {
      setAlignment((prev) => {
        prev.Player2.pokemon5 = newAlignment;
      });
    }
  };

  const handleAlignmentP2poke6 = (
    _event: React.MouseEvent<HTMLElement>,
    newAlignment: string | null
  ) => {
    if (newAlignment !== null) {
      setAlignment((prev) => {
        prev.Player2.pokemon6 = newAlignment;
      });
    }
  };

  const resetBattleToggleButton = () => {
    setAlignment({
      Player1: {
        pokemon1: "Benched",
        pokemon2: "Benched",
        pokemon3: "Benched",
        pokemon4: "Benched",
        pokemon5: "Benched",
        pokemon6: "Benched",
      },
      Player2: {
        pokemon1: "Benched",
        pokemon2: "Benched",
        pokemon3: "Benched",
        pokemon4: "Benched",
        pokemon5: "Benched",
        pokemon6: "Benched",
      },
    });
  };

  //選択したボタンによってclassを変更
  const changeClassName = (alignment: string) => {
    switch (alignment) {
      case "Active":
        return "active";
      case "Fainting":
        return "fainting";
      default:
        return "benched";
    }
  };

  const pokeStatusP1poke1 = changeClassName(alignment.Player1.pokemon1);
  const pokeStatusP1poke2 = changeClassName(alignment.Player1.pokemon2);
  const pokeStatusP1poke3 = changeClassName(alignment.Player1.pokemon3);
  const pokeStatusP1poke4 = changeClassName(alignment.Player1.pokemon4);
  const pokeStatusP1poke5 = changeClassName(alignment.Player1.pokemon5);
  const pokeStatusP1poke6 = changeClassName(alignment.Player1.pokemon6);
  const pokeStatusP2poke1 = changeClassName(alignment.Player2.pokemon1);
  const pokeStatusP2poke2 = changeClassName(alignment.Player2.pokemon2);
  const pokeStatusP2poke3 = changeClassName(alignment.Player2.pokemon3);
  const pokeStatusP2poke4 = changeClassName(alignment.Player2.pokemon4);
  const pokeStatusP2poke5 = changeClassName(alignment.Player2.pokemon5);
  const pokeStatusP2poke6 = changeClassName(alignment.Player2.pokemon6);

  //トグルボタンのアイコン
  const ButtonIcon =
    "https://sg.portal-pokemon.com/play/resources/pokedex/img/icon_ball.png";

  return {
    StyledToggleButtonGroup,
    alignment,
    setAlignment,
    handleAlignmentP1poke1,
    handleAlignmentP1poke2,
    handleAlignmentP1poke3,
    handleAlignmentP1poke4,
    handleAlignmentP1poke5,
    handleAlignmentP1poke6,
    handleAlignmentP2poke1,
    handleAlignmentP2poke2,
    handleAlignmentP2poke3,
    handleAlignmentP2poke4,
    handleAlignmentP2poke5,
    handleAlignmentP2poke6,
    pokeStatusP1poke1,
    pokeStatusP1poke2,
    pokeStatusP1poke3,
    pokeStatusP1poke4,
    pokeStatusP1poke5,
    pokeStatusP1poke6,
    pokeStatusP2poke1,
    pokeStatusP2poke2,
    pokeStatusP2poke3,
    pokeStatusP2poke4,
    pokeStatusP2poke5,
    pokeStatusP2poke6,
    ButtonIcon,
    resetBattleToggleButton,
  };
}
