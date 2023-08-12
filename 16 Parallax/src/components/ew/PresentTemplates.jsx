import React, { useState } from "react";
import Single from "./Single";
import { Link } from "react-router-dom";

const PresentTemplates = ({seDataNum}) => {
  const [data, setData] = useState([
    // { textOne: "gfdggf", textTwo: 4656 },
    // { textOne: "sasa", textTwo: 46656556 },
    // { textOne: "haha", textTwo: 46656556 },
  ]);

  const [addExtra, setExtra] = useState(false)
  
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");

  const submitForm = () => {
    let obj = {
      textOne: text1,
      textTwo: text2,
    };

    setData([...data, obj]);

    setExtra(true)
  };

  const sendDataApp = (item) => {
    let cahngeObj = JSON.stringify(item)
    seDataNum(cahngeObj)
  }

  return (
    <div id="PresentTemplates">
      {addExtra ? (
        data.map((item, index) => {
          return (
            <div>
              <Link to={"/single"} onClick={() => sendDataApp(item)} key={index}>{item.textOne}</Link>
              <button className="btn btndanger" onClick={() => setExtra(false)}>Add +</button>
            </div>
          );
        })
      ) : (
        <form className="ms-4" onSubmit={submitForm}>
          <input
            type="text"
            placeholder="text1"
            value={text1}
            onChange={(e) => setText1(e.target.value)}
          />
          <br />
          <input
            type="text"
            placeholder="text2"
            value={text2}
            onChange={(e) => setText2(e.target.value)}
          />
          <br />
          <input type="submit" value="Submit" />
        </form>
      )}

      {/* {addExtra ? <h1>Yes</h1>:<h1>No</h1>} */}
    </div>
  );
};

export default PresentTemplates;
