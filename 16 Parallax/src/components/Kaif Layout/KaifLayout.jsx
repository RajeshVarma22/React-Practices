import React, { useState } from "react";
import "./kk.css";
import KeyPerformanceObjectives from "./KeyPerformanceObjectives";
import AssetTemplates from "./AssetTemplates";

const KaifLayout = () => {
  const [showLOne, setShowLOne] = useState(true);
  return (
    <div id="KaifLayout">
      <h1>Global Settings</h1>
      <div id="mainHed">
        <button id="firstHead" onClick={() => setShowLOne(true)}>
          Key Performance Objectives
        </button>
        <button id="secondHead" onClick={() => setShowLOne(false)}>
          Asset Templates
        </button>
      </div>
      {showLOne && <KeyPerformanceObjectives />}
      {showLOne === false && <AssetTemplates />}
    </div>
  );
};

export default KaifLayout;
