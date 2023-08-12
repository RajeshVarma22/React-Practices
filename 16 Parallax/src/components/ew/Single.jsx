import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Single = ({ dataNum }) => {
  const [newData, setNewData] = useState([]);
  useEffect(() => {
    return () => {
      let parsed = JSON.parse(dataNum);
      console.log(parsed);
      setNewData(parsed);
    };
  }, [dataNum]);

  return (
    <div>
      {Object.keys(newData).map((keyName, i) => (
        <div key={i}>
          <h3 > {keyName} :- {newData[keyName]}</h3>
        </div>
      ))}
    </div>
  );
};

export default Single;
