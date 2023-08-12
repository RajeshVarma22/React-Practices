import React, { useState } from "react";
import "./kk.css";

const KeyPerformanceObjectives = () => {
  const [indexGoal, setIndexGoal] = useState(80);
  return (
    <div>
      <div id="box">
        <h5>Key Performance Objectives</h5>
        <form>
          <div>
            <label htmlFor="num">OVERALL HEALTH INDEX GOAL</label>
            <input
              id="num"
              value={indexGoal}
              onChange={(e) => setIndexGoal(e.target.value)}
            />
            <span>%</span>
          </div>
        </form>
      </div>
      <div id="buttons">
        <button className="btnBlack">SAVE</button>
        <button className="btnBlack" onClick={() => setIndexGoal(80)}>RESET</button>
      </div>
    </div>
  );
};

export default KeyPerformanceObjectives;
