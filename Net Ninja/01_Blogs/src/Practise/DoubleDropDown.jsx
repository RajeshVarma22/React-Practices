import React, { useState } from "react";

const DoubleDropDown = () => {
  const array = [
    {
      country: "India",
      cap: "Delhi",
      cities: ["Banglore", "Hyderabad", "Amaravathi", "Kochi"],
    },
    {
      country: "Pak",
      cap: "Karchi",
      cities: ["Lahore", "islamabad", "karzi", "jawad"],
    },
    {
      country: "Bangladesh",
      cap: "don't know",
      cities: ["place1", "place2", "place3", "place4"],
    },
  ];

  const [changedCountry, setChangedCountry] = useState("India");

  return (
    <div>
      {/* first Selection */}

      <select
        name="country"
        id=""
        onChange={(e) => setChangedCountry(e.target.value)}
      >
        {array.map((cName) => {
          return <option key={cName.country} value={cName.country}>{cName.country}</option>;
        })}
      </select>

      {/* Second DropDown */}

      <select name="changedCountry" id="">
        {
          array.map(selectedCountry => {
            return(
              selectedCountry.country === changedCountry ? 

              selectedCountry.cities.map( city => {
                return(
                  <option value={city} key={city}>{city}</option>
                )
              })

              : ""
              // <option value={selectedCountry.cap}>{selectedCountry.cap}</option> : ""
            )
          })
        }
      </select>
    </div>
  );
};

export default DoubleDropDown;
