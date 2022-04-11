import { getAllRaces } from "../api/getAllRaces";
import React, { useState, useEffect } from "react";
import { categoryList } from "../config";
import RaceList from "./RaceList";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  container: {
    textAlign: "center",
  },
});

const Race = () => {
  const [raceSummaries, setRaceSummaries] = useState({});
  const classes = useStyles();

  useEffect(() => {
    setInterval(
      (function fetchRacesData() {
        getAllRaces().then((res) => {
          const allRaces = res.data.data;
          setRaceSummaries(allRaces.race_summaries);
        });
        return fetchRacesData;
      })(),
      10000
    );
  }, []);

  const races = Object.values(raceSummaries).reduce((acc, curr) => {
    let meetingName = curr.meeting_name;
    let raceNumber = curr.race_number;
    let startTimeStamp = curr.advertised_start.seconds;
    let category = categoryList.find(
      (category) => category.id === curr.category_id
    ).type;
    acc.push({
      meetingName: meetingName,
      raceNumber: raceNumber,
      startTimeStamp: startTimeStamp,
      category: category,
    });
    return acc;
  }, []);

  return (
    <React.Fragment>
      <h1 class={classes.container}>Next To Go</h1>
      <RaceList races={races} />
    </React.Fragment>
  );
};

export default Race;
