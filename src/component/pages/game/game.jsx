import "./game.css";
import React, { useEffect, useState } from "react";

function Game() {
  const [level, setLevel] = useState(0);
  useEffect(() => {
    alert("wow")
  }, [])
  useEffect(() => {
    console.log("complete");
  }, [level])
  const [gameTime, setGameTime] = useState({});
  useEffect(() => {
    setGameTime(new Date())
  }, [])

  useEffect(() => {
    alert("hoo yaa");
  }, [gameTime])

  const clickToUpLevel = () => {
    setLevel(level + 1)
  }
  const updatingToDate = () => {
    setGameTime(new Date());

  }
  return (
    <div className="game">
      <h1>{level}</h1>
      <button onClick={clickToUpLevel}>click to up </button><br></br>
      <button onClick={updatingToDate}>updating to date</button>
    </div>
  );
};

export default Game;
