import React from "react";
import Countdown from "react-countdown";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  wrapper: {
    width: "80%",
    textAlign: "center",
    border: "2px black solid",
    margin: "50px auto",
    padding: "20px 30px",
    fontSize: "1.2em",
    borderRadius: "10px;",
  },

  meetingName: {
    fontSize: "2em",
    textAlign: "start",
  },

  raceInfo: {
    width: "30%",
    fontSize: "1.7em",
    display: "inline-block",
    "@media (max-width:1325px)": { width: "95%" },
  },

  timerInfo: {
    width: "30%",
    "@media (max-width:1325px)": {
      borderTop: "0.5px black dotted",
      width: "95%",
    },
    fontWeight: "bolder",
    display: "inline-block",
  },

  date: {
    fontSize: "1.5em",
  },

  inProgress: {
    color: "green",
    fontSize: "2em",
  },

  started: {
    color: "orange",
    fontSize: "2em",
  },
});

const reformatTimeStamp = (timeStamp) => {
  return new Date(timeStamp * 1000).toString().slice(0, -44);
};

const RaceItem = (props) => {
  const { race } = props;
  const classes = useStyles();

  const CompletionList = () => (
    <span className={classes.started}>Race Started!</span>
  );

  const raceInfo = [
    { title: "Race No", content: race.raceNumber },
    { title: "Category", content: race.category },
  ];

  const icon =
    race.category === "Horse" ? (
      <>&#x1F40E;</>
    ) : race.category === "Greyhound" ? (
      <>&#129454;</>
    ) : (
      <>&#127943;</>
    );

  return race.startTimeStamp * 1000 - new Date().getTime() > -60000 ? (
    <div className={classes.wrapper}>
      <div class={classes.meetingName}>
        {icon} <b>{race.meetingName}</b>
      </div>
      <div class={classes.raceInfo}>
        {raceInfo.map((item, i) => {
          return (
            <p>
              <b>{item.title}: </b>
              {item.content}
            </p>
          );
        })}
      </div>
      <div className={classes.timerInfo}>
        <p className={classes.date}>{reformatTimeStamp(race.startTimeStamp)}</p>
        <Countdown
          className={classes.inProgress}
          date={race.startTimeStamp * 1000}
        >
          <CompletionList />
        </Countdown>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default RaceItem;
