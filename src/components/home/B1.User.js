import React, { useState, useEffect, useContext } from "react";
import { GlobalContext } from "context/GlobalState";

const User = () => {
  const { user, editUser } = useContext(GlobalContext);

  const [isEdit, setIsEdit] = useState(false);
  const [value, setValue] = useState(user);
  const [condition, setCondition] = useState("pagi");

  const handleEdit = () => {
    setIsEdit(!isEdit);
  };

  const handleValueChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    editUser(value);
    setIsEdit(false);
  };
  const time = new Date().getHours();

  useEffect(() => {
    if (time >= 6 && time <= 10) {
      setCondition("pagi");
    } else if (time > 10 && time <= 15) {
      setCondition("siang");
    } else if (time > 15 && time < 19) {
      setCondition("sore");
    } else if (time >= 19 && time <= 23) {
      setCondition("malam");
    } else {
      setCondition("tengah malam");
    }
  }, [time]);

  return (
    <div className="mx-4 p-4">
      <p>Selamat {condition}</p>
      <div className="flex">
        {isEdit ? (
          <form onSubmit={handleSubmit}>
            <input type="text" value={value} onChange={handleValueChange} />
          </form>
        ) : (
          <h1 className="text-2xl">
            {localStorage.getItem("alokasi-dana-user")}
          </h1>
        )}
        <button onClick={handleEdit} className="material-icons mx-4">
          edit
        </button>
      </div>
    </div>
  );
};

export default User;
