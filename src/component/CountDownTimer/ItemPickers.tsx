import { styled } from "@mui/material";
import { ItemPicker } from "./ItemPicker";
import { Spacer } from "./Spacer";

const Pickers = styled("div")({
  display: "flex",
  justifyContent: "center",
});

type TIMES = {
  mins: number[];
  secs: number[];
};

type Props = {
  className: string;
  items: TIMES;
  values: string;
  handleChange: () => void;
};

export const ItemPickers = ({ items, handleChange }: Props) => {
  // プロパティ名を値に持つ配列に変換
  const itemNames = Object.keys(items);

  return (
    <>
      <Pickers>
        {itemNames.map((itemName, i) => (
          <div key={i}>
            <Spacer size=".2em" axis="horizontal" />
            <ItemPicker
              itemName={itemName}
              values={items[itemName]}
              handleChange={handleChange}
              key={i}
            />
            <Spacer size=".5em" axis="horizontal" />
          </div>
        ))}
      </Pickers>
    </>
  );
};
