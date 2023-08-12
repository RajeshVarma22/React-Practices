import React, { useState } from "react";

const AddInput = () => {
  const inputArr = [
    {
      type: "text",
      id: 1,
      value: "",
    },
  ];

  const [arr, setArr] = useState(inputArr);

  const addInput = () => {
    setArr((s) => {
      return [
        ...s,
        {
          type: "text",
          value: "",
        },
      ];
    });
  };

  const handleChange = (e) => {
    e.preventDefault();

    const index = e.target.id;
    setArr((s) => {
      const newArr = s.slice();
      newArr[index].value = e.target.value;

      return newArr;
    });
  };

  return (
    <div>
      <button onClick={addInput}>+</button>
      {arr.map((item, i) => {
        return (
          <input
            onChange={handleChange}
            value={item.value}
            id={i}
            type={item.type}
            size="40"
          />
        );
      })}
    </div>
  );
};

export default AddInput;
