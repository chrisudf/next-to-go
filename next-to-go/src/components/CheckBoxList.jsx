import React from "react";
import CheckBox from "./CheckBox";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  toggleContainer: {
    textAlign: "center",
  },
});

export default function CheckBoxList(props) {
  const { categoryList, handleCheckedChange } = props;
  const classes = useStyles();

  return (
    <div class={classes.toggleContainer}>
      {categoryList &&
        categoryList.map((category) => (
          <CheckBox
            handleCheckedChange={handleCheckedChange}
            category={category}
          />
        ))}
    </div>
  );
}
