import Chip from "@mui/material/Chip";
import React, { Dispatch, SetStateAction } from "react";

const RenderChip = ({ label, setCategory }: RenderChipProps) => {
  const handleClick = () => {
    if (setCategory) {
      setCategory(label);
    }
  };

  return (
    <React.Fragment>
      <Chip onClick={handleClick} label={label} />
    </React.Fragment>
  );
};

type RenderChipProps = {
  label: string;

  setCategory?: Dispatch<SetStateAction<string>>;
};

export default RenderChip;
