import React, { useState } from "react";
import "./kk.css";
import PresentTemplates from "../ew/PresentTemplates";
const AssetTemplates = () => {
  const [assetType, setAssetType] = useState("");
  const [measurement, setMeasurement] = useState("");

  const [presentAsset, setPresentAsset] = useState([]);
  const [ani, setAn] = useState(presentAsset.length)

  const saveTheInfo = () => {
    let anObj = {
      assetType: assetType,
      measurement: measurement,
    };
    setPresentAsset(anObj);

    setAssetType("");
    setMeasurement("");
  };

  return (
    <div id="AssetTemplates">
      <div id="assetTemplateBox">
        <div id="templteHead">
          <h5>NEW ASSET TEMPLATE</h5>
        </div>
        {presentAsset === [] ? 
          // <PresentTemplates /> 
          ""
         : 
          <div id="contentHere">
            <form>
              <div>
                <label htmlFor="assetType">ASSET TYPE</label>
                <input
                  className="inputBox"
                  id="assetType"
                  placeholder="Enter the name off the asset type"
                  value={assetType}
                  onChange={(e) => setAssetType(e.target.value)}
                ></input>
              </div>
              <div>
                <label htmlFor="assetType">MEASUREMENT 1</label>
                <input
                  className="inputBox"
                  id="assetType"
                  placeholder="Enter measurement name"
                  value={measurement}
                  onChange={(e) => setMeasurement(e.target.value)}
                ></input>
              </div>
            </form>
            <div id="buttons">
              <button className="btnBlack" onClick={saveTheInfo}>
                SAVE
              </button>
              <button className="btnBlack">RESET</button>
            </div>
          </div>
        }
      </div>
    </div>
  );
};

export default AssetTemplates;
