import React, { useState } from "react";

const CheckBox = () => {
  const hobbies = [
    "Coding",
    "playing Cricket",
    "Watching Movies",
    "Surfing through internet",
  ];

  const [arrCopy, setArrCopy] = useState(hobbies);

  const deletef = (index) => {
    let ar = [...arrCopy];
    ar.splice(index, 1);
    setArrCopy(ar);
  };

  return (
    <div id="CheckBox1">
      <ul>
        {arrCopy.map((ell, index) => {
          return (
            <li className="my-3" key={index}>
              <input type="checkbox" name={index} id={ell} />
              {ell}{" "}

              {
                index.isCheck ? "Yes" : "No" 
              }
              <button
                className="btn btn-danger fa fa-trash"
                onClick={() => deletef(index)}
              ></button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CheckBox;
