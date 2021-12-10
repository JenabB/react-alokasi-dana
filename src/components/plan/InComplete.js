import React, { useState } from "react";

const InComplete = () => {
  const mock = [
    {
      id: 1,
      name: "task1",
      value: "task1",
      checked: false,
    },
    {
      id: 2,
      name: "task2",
      value: "task2",
      checked: false,
    },
    {
      id: 3,
      name: "task3",
      value: "task3",
      checked: false,
    },
  ];
  const [value, setValue] = useState(mock);
  console.log(value);

  const handleChange = (e) => {
    // setValue([...value, [e.target.name]: e.target.checked]);
  };

  return (
    <div>
      <div className="bg-white shadow-sm p-4 m-2">
        {value.map((val, index) => (
          <div key={index} className="items-center">
            <input
              className="mx-4"
              type="checkbox"
              id={val.id}
              defaultChecked={false}
              name={val.name}
              checked={val.checked}
              onChange={handleChange}
            />
            <label htmlFor={val.name}>{val.name}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InComplete;