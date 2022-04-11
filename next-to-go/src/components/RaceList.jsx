import React, { useState } from "react";
import RaceItem from "./RaceItem";
import CheckBoxList from "./CheckBoxList";
import { categoryList } from "../config";

const RaceList = (props) => {
  const { races } = props;
  const [categories, setCategories] = useState([]);

  const handleCheckedChange = (category) => {
    setCategories(
      categories.includes(category)
        ? categories.filter((c) => c !== category)
        : [...categories, category]
    );
  };

  const filteredRaces = () => {
    let filteredRaces = [];
    filteredRaces = categories.length
      ? races.filter((race) => categories.includes(race.category))
      : races;
    filteredRaces = filteredRaces
      .sort((a, b) => a.startTimeStamp - b.startTimeStamp)
      .slice(0, 5);

    return filteredRaces;
  };

  return (
    <>
      <CheckBoxList
        categoryList={categoryList}
        handleCheckedChange={handleCheckedChange}
      />
      {filteredRaces() &&
        filteredRaces().map((race) => <RaceItem race={race} />)}
    </>
  );
};

export default RaceList;
