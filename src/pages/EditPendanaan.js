import React, { useState, useEffect, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import AppBarWithBackButton from "../components/AppBarWithBackButton";

const EditPendanaan = (props) => {
  const [selectedDana, setSelectedDana] = useState(null);
  // const [updatedDana, setUpdatedDana] = useState({});

  const { history } = useContext(GlobalContext);
  const id = props.match.params.id;

  useEffect(() => {
    const danaId = id;
    const matchDana = history.find((dana) => dana.id === danaId);
    setSelectedDana(matchDana);
  }, [id, history]);

  console.log(selectedDana);

  return (
    <div>
      <AppBarWithBackButton />
      <h1>Ini edit</h1>
    </div>
  );
};

export default EditPendanaan;
