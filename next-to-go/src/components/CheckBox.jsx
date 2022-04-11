import React, { useState } from "react";
import { green } from "@material-ui/core/colors";
import { withStyles, FormControlLabel, Checkbox } from "@material-ui/core";

const StyledCheckbox = withStyles({
  root: {
    color: green[400],
    "&$checked": {
      color: green[600],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

export default function CheckBox(props) {
  const { category, handleCheckedChange } = props;
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    checked === true ? setChecked(false) : setChecked(true);
    handleCheckedChange(category.type);
  };

  return (
    <FormControlLabel
      control={
        <StyledCheckbox
          checked={checked}
          onChange={handleChange}
        ></StyledCheckbox>
      }
      label={category.type}
    />
  );
}
