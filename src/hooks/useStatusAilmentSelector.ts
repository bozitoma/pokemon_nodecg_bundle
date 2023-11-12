import { SelectChangeEvent } from '@mui/material';
import { useImmer } from 'use-immer';

export function useStatusAilmentSelector() {
  const [statusAilment, setStatusAilment] = useImmer({
    Player1: {
      pokemon1: '',
      pokemon2: '',
      pokemon3: '',
      pokemon4: '',
      pokemon5: '',
      pokemon6: '',
    },
    Player2: {
      pokemon1: '',
      pokemon2: '',
      pokemon3: '',
      pokemon4: '',
      pokemon5: '',
      pokemon6: '',
    },
  });

  const resetStatusAilment = () => {
    setStatusAilment((prev) => {
      prev.Player1.pokemon1 = '';
      prev.Player1.pokemon2 = '';
      prev.Player1.pokemon3 = '';
      prev.Player1.pokemon4 = '';
      prev.Player1.pokemon5 = '';
      prev.Player1.pokemon6 = '';
      prev.Player2.pokemon1 = '';
      prev.Player2.pokemon2 = '';
      prev.Player2.pokemon3 = '';
      prev.Player2.pokemon4 = '';
      prev.Player2.pokemon5 = '';
      prev.Player2.pokemon6 = '';
    });
  };

  const handleChangeStatusAilmentP1poke1 = (event: SelectChangeEvent) => {
    setStatusAilment((prev) => {
      prev.Player1.pokemon1 = event.target.value;
    });
  };

  const handleChangeStatusAilmentP1poke2 = (event: SelectChangeEvent) => {
    setStatusAilment((prev) => {
      prev.Player1.pokemon2 = event.target.value;
    });
  };

  const handleChangeStatusAilmentP1poke3 = (event: SelectChangeEvent) => {
    setStatusAilment((prev) => {
      prev.Player1.pokemon3 = event.target.value;
    });
  };

  const handleChangeStatusAilmentP1poke4 = (event: SelectChangeEvent) => {
    setStatusAilment((prev) => {
      prev.Player1.pokemon4 = event.target.value;
    });
  };

  const handleChangeStatusAilmentP1poke5 = (event: SelectChangeEvent) => {
    setStatusAilment((prev) => {
      prev.Player1.pokemon5 = event.target.value;
    });
  };

  const handleChangeStatusAilmentP1poke6 = (event: SelectChangeEvent) => {
    setStatusAilment((prev) => {
      prev.Player1.pokemon6 = event.target.value;
    });
  };

  const handleChangeStatusAilmentP2poke1 = (event: SelectChangeEvent) => {
    setStatusAilment((prev) => {
      prev.Player2.pokemon1 = event.target.value;
    });
  };

  const handleChangeStatusAilmentP2poke2 = (event: SelectChangeEvent) => {
    setStatusAilment((prev) => {
      prev.Player2.pokemon2 = event.target.value;
    });
  };

  const handleChangeStatusAilmentP2poke3 = (event: SelectChangeEvent) => {
    setStatusAilment((prev) => {
      prev.Player2.pokemon3 = event.target.value;
    });
  };

  const handleChangeStatusAilmentP2poke4 = (event: SelectChangeEvent) => {
    setStatusAilment((prev) => {
      prev.Player2.pokemon4 = event.target.value;
    });
  };

  const handleChangeStatusAilmentP2poke5 = (event: SelectChangeEvent) => {
    setStatusAilment((prev) => {
      prev.Player2.pokemon5 = event.target.value;
    });
  };

  const handleChangeStatusAilmentP2poke6 = (event: SelectChangeEvent) => {
    setStatusAilment((prev) => {
      prev.Player2.pokemon6 = event.target.value;
    });
  };

  return {
    statusAilment,
    resetStatusAilment,
    handleChangeStatusAilmentP1poke1,
    handleChangeStatusAilmentP1poke2,
    handleChangeStatusAilmentP1poke3,
    handleChangeStatusAilmentP1poke4,
    handleChangeStatusAilmentP1poke5,
    handleChangeStatusAilmentP1poke6,
    handleChangeStatusAilmentP2poke1,
    handleChangeStatusAilmentP2poke2,
    handleChangeStatusAilmentP2poke3,
    handleChangeStatusAilmentP2poke4,
    handleChangeStatusAilmentP2poke5,
    handleChangeStatusAilmentP2poke6,
  };
}
