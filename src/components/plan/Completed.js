import { useState } from "react";

const Completed = () => {
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
  const [value] = useState(mock);
  // setValue;
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
              className="mx-4 line-"
              type="checkbox"
              id={val.id}
              name={val.name}
              checked={val.checked}
              onChange={handleChange}
            />
            <label className="line-through" for={val.name}>
              {val.name}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Completed;
