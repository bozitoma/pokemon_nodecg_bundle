import { useImmer } from "use-immer";

export function useTerastalButton() {
  const [terastallize, setTerastallize] = useImmer({
    Player1: {
      pokemon1: false,
      pokemon2: false,
      pokemon3: false,
      pokemon4: false,
      pokemon5: false,
      pokemon6: false,
    },
    Player2: {
      pokemon1: false,
      pokemon2: false,
      pokemon3: false,
      pokemon4: false,
      pokemon5: false,
      pokemon6: false,
    },
  });

  const [isTerastallize, setIsTerastallize] = useImmer({
    Player1: {
      pokemon1: false,
      pokemon2: false,
      pokemon3: false,
      pokemon4: false,
      pokemon5: false,
      pokemon6: false,
    },
    Player2: {
      pokemon1: false,
      pokemon2: false,
      pokemon3: false,
      pokemon4: false,
      pokemon5: false,
      pokemon6: false,
    },
  });

  const resetTerastallized = () => {
    setTerastallize((prev) => {
      prev.Player1.pokemon1 = false;
      prev.Player1.pokemon2 = false;
      prev.Player1.pokemon3 = false;
      prev.Player1.pokemon4 = false;
      prev.Player1.pokemon5 = false;
      prev.Player1.pokemon6 = false;
      prev.Player2.pokemon1 = false;
      prev.Player2.pokemon2 = false;
      prev.Player2.pokemon3 = false;
      prev.Player2.pokemon4 = false;
      prev.Player2.pokemon5 = false;
      prev.Player2.pokemon6 = false;
    });
    setIsTerastallize((prev) => {
      prev.Player1.pokemon1 = false;
      prev.Player1.pokemon2 = false;
      prev.Player1.pokemon3 = false;
      prev.Player1.pokemon4 = false;
      prev.Player1.pokemon5 = false;
      prev.Player1.pokemon6 = false;
      prev.Player2.pokemon1 = false;
      prev.Player2.pokemon2 = false;
      prev.Player2.pokemon3 = false;
      prev.Player2.pokemon4 = false;
      prev.Player2.pokemon5 = false;
      prev.Player2.pokemon6 = false;
    });
  };

  const handleTerastallizedP1poke1 = () => {
    setTerastallize((prev) => {
      prev.Player1.pokemon1 = !terastallize.Player1.pokemon1;
    });
    setIsTerastallize((prev) => {
      prev.Player1.pokemon2 = !isTerastallize.Player1.pokemon2;
      prev.Player1.pokemon3 = !isTerastallize.Player1.pokemon3;
      prev.Player1.pokemon4 = !isTerastallize.Player1.pokemon4;
      prev.Player1.pokemon5 = !isTerastallize.Player1.pokemon5;
      prev.Player1.pokemon6 = !isTerastallize.Player1.pokemon6;
    });
  };

  const handleTerastallizedP1poke2 = () => {
    setTerastallize((prev) => {
      prev.Player1.pokemon2 = !terastallize.Player1.pokemon2;
    });
    setIsTerastallize((prev) => {
      prev.Player1.pokemon1 = !isTerastallize.Player1.pokemon1;
      prev.Player1.pokemon3 = !isTerastallize.Player1.pokemon3;
      prev.Player1.pokemon4 = !isTerastallize.Player1.pokemon4;
      prev.Player1.pokemon5 = !isTerastallize.Player1.pokemon5;
      prev.Player1.pokemon6 = !isTerastallize.Player1.pokemon6;
    });
  };

  const handleTerastallizedP1poke3 = () => {
    setTerastallize((prev) => {
      prev.Player1.pokemon3 = !terastallize.Player1.pokemon3;
    });
    setIsTerastallize((prev) => {
      prev.Player1.pokemon1 = !isTerastallize.Player1.pokemon1;
      prev.Player1.pokemon2 = !isTerastallize.Player1.pokemon2;
      prev.Player1.pokemon4 = !isTerastallize.Player1.pokemon4;
      prev.Player1.pokemon5 = !isTerastallize.Player1.pokemon5;
      prev.Player1.pokemon6 = !isTerastallize.Player1.pokemon6;
    });
  };

  const handleTerastallizedP1poke4 = () => {
    setTerastallize((prev) => {
      prev.Player1.pokemon4 = !terastallize.Player1.pokemon4;
    });
    setIsTerastallize((prev) => {
      prev.Player1.pokemon1 = !isTerastallize.Player1.pokemon1;
      prev.Player1.pokemon2 = !isTerastallize.Player1.pokemon2;
      prev.Player1.pokemon3 = !isTerastallize.Player1.pokemon3;
      prev.Player1.pokemon5 = !isTerastallize.Player1.pokemon5;
      prev.Player1.pokemon6 = !isTerastallize.Player1.pokemon6;
    });
  };

  const handleTerastallizedP1poke5 = () => {
    setTerastallize((prev) => {
      prev.Player1.pokemon5 = !terastallize.Player1.pokemon5;
    });
    setIsTerastallize((prev) => {
      prev.Player1.pokemon1 = !isTerastallize.Player1.pokemon1;
      prev.Player1.pokemon2 = !isTerastallize.Player1.pokemon2;
      prev.Player1.pokemon3 = !isTerastallize.Player1.pokemon3;
      prev.Player1.pokemon4 = !isTerastallize.Player1.pokemon4;
      prev.Player1.pokemon6 = !isTerastallize.Player1.pokemon6;
    });
  };

  const handleTerastallizedP1poke6 = () => {
    setTerastallize((prev) => {
      prev.Player1.pokemon6 = !terastallize.Player1.pokemon6;
    });
    setIsTerastallize((prev) => {
      prev.Player1.pokemon1 = !isTerastallize.Player1.pokemon1;
      prev.Player1.pokemon2 = !isTerastallize.Player1.pokemon2;
      prev.Player1.pokemon3 = !isTerastallize.Player1.pokemon3;
      prev.Player1.pokemon4 = !isTerastallize.Player1.pokemon4;
      prev.Player1.pokemon5 = !isTerastallize.Player1.pokemon5;
    });
  };

  const handleTerastallizedP2poke1 = () => {
    setTerastallize((prev) => {
      prev.Player2.pokemon1 = !terastallize.Player2.pokemon1;
    });
    setIsTerastallize((prev) => {
      prev.Player2.pokemon2 = !isTerastallize.Player2.pokemon2;
      prev.Player2.pokemon3 = !isTerastallize.Player2.pokemon3;
      prev.Player2.pokemon4 = !isTerastallize.Player2.pokemon4;
      prev.Player2.pokemon5 = !isTerastallize.Player2.pokemon5;
      prev.Player2.pokemon6 = !isTerastallize.Player2.pokemon6;
    });
  };

  const handleTerastallizedP2poke2 = () => {
    setTerastallize((prev) => {
      prev.Player2.pokemon2 = !terastallize.Player2.pokemon2;
    });
    setIsTerastallize((prev) => {
      prev.Player2.pokemon1 = !isTerastallize.Player2.pokemon1;
      prev.Player2.pokemon3 = !isTerastallize.Player2.pokemon3;
      prev.Player2.pokemon4 = !isTerastallize.Player2.pokemon4;
      prev.Player2.pokemon5 = !isTerastallize.Player2.pokemon5;
      prev.Player2.pokemon6 = !isTerastallize.Player2.pokemon6;
    });
  };

  const handleTerastallizedP2poke3 = () => {
    setTerastallize((prev) => {
      prev.Player2.pokemon3 = !terastallize.Player2.pokemon3;
    });
    setIsTerastallize((prev) => {
      prev.Player2.pokemon1 = !isTerastallize.Player2.pokemon1;
      prev.Player2.pokemon2 = !isTerastallize.Player2.pokemon2;
      prev.Player2.pokemon4 = !isTerastallize.Player2.pokemon4;
      prev.Player2.pokemon5 = !isTerastallize.Player2.pokemon5;
      prev.Player2.pokemon6 = !isTerastallize.Player2.pokemon6;
    });
  };

  const handleTerastallizedP2poke4 = () => {
    setTerastallize((prev) => {
      prev.Player2.pokemon4 = !terastallize.Player2.pokemon4;
    });
    setIsTerastallize((prev) => {
      prev.Player2.pokemon1 = !isTerastallize.Player2.pokemon1;
      prev.Player2.pokemon2 = !isTerastallize.Player2.pokemon2;
      prev.Player2.pokemon3 = !isTerastallize.Player2.pokemon3;
      prev.Player2.pokemon5 = !isTerastallize.Player2.pokemon5;
      prev.Player2.pokemon6 = !isTerastallize.Player2.pokemon6;
    });
  };

  const handleTerastallizedP2poke5 = () => {
    setTerastallize((prev) => {
      prev.Player2.pokemon5 = !terastallize.Player2.pokemon5;
    });
    setIsTerastallize((prev) => {
      prev.Player2.pokemon1 = !isTerastallize.Player2.pokemon1;
      prev.Player2.pokemon2 = !isTerastallize.Player2.pokemon2;
      prev.Player2.pokemon3 = !isTerastallize.Player2.pokemon3;
      prev.Player2.pokemon4 = !isTerastallize.Player2.pokemon4;
      prev.Player2.pokemon6 = !isTerastallize.Player2.pokemon6;
    });
  };

  const handleTerastallizedP2poke6 = () => {
    setTerastallize((prev) => {
      prev.Player2.pokemon6 = !terastallize.Player2.pokemon6;
    });
    setIsTerastallize((prev) => {
      prev.Player2.pokemon1 = !isTerastallize.Player2.pokemon1;
      prev.Player2.pokemon2 = !isTerastallize.Player2.pokemon2;
      prev.Player2.pokemon3 = !isTerastallize.Player2.pokemon3;
      prev.Player2.pokemon4 = !isTerastallize.Player2.pokemon4;
      prev.Player2.pokemon5 = !isTerastallize.Player2.pokemon5;
    });
  };

  return {
    terastallize,
    isTerastallize,
    resetTerastallized,
    handleTerastallizedP1poke1,
    handleTerastallizedP1poke2,
    handleTerastallizedP1poke3,
    handleTerastallizedP1poke4,
    handleTerastallizedP1poke5,
    handleTerastallizedP1poke6,
    handleTerastallizedP2poke1,
    handleTerastallizedP2poke2,
    handleTerastallizedP2poke3,
    handleTerastallizedP2poke4,
    handleTerastallizedP2poke5,
    handleTerastallizedP2poke6,
  };
}
