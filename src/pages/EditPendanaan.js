import React, { useState, useEffect, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import AppBarWithBackButton from "../components/AppBarWithBackButton";
import { useHistory } from "react-router-dom";
import Helmet from "react-helmet";

const EditPendanaan = (props) => {
  const [selectedDana, setSelectedDana] = useState({
    id: "",
    namaPendanaan: "",
    danaAwal: 0,
    danaAkhir: 0,
  });
  // const [updatedDana, setUpdatedDana] = useState({});

  let historyy = useHistory();

  const { history, editPendanaan } = useContext(GlobalContext);
  const id = props.match.params.id;

  useEffect(() => {
    const danaId = id;
    const matchDana = history.find((dana) => dana.id === danaId);
    setSelectedDana(matchDana);
  }, [id, history]);

  console.log(selectedDana);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSelectedDana({ ...selectedDana, [name]: value });
  };

  const handleDanaAwalChange = (e) => {
    const { name, value } = e.target;
    console.log(value);
    setSelectedDana({ ...selectedDana, [name]: parseInt(value) });
  };

  // useEffect(() => {
  //   let hasil = 0;

  //   selectedDana.semuaProduk.forEach((item) => {
  //     hasil += parseInt(item.harga);
  //   });

  //   setSelectedDana({
  //     ...selectedDana,
  //     danaAkhir: selectedDana.danaAwal - parseInt(hasil),
  //   });
  // }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    editPendanaan(selectedDana);
    historyy.push("/home");
  };

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Edit Pendanaan</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>

      <AppBarWithBackButton title="Edit Pendanaan" />

      <div className="mt-4 text-center">
        <h1 className="my-10">Ubah Pendanaan</h1>
        <div></div>
        <input
          type="text"
          className="p-2 mb-6 rounded-xl bg-gray-300"
          placeholder="nama baru"
          name="namaPendanaan"
          value={selectedDana.namaPendanaan}
          onChange={handleInputChange}
        />
        <input
          type="number"
          className="p-2 mb-6 rounded-xl bg-gray-300"
          placeholder="dana awal"
          name="danaAwal"
          value={selectedDana.danaAwal}
          onChange={handleDanaAwalChange}
        />

        <button
          className="bg-green-700 px-4 py-2 text-white rounded-xl"
          onClick={handleSubmit}
        >
          Simpan perubahan
        </button>
      </div>
    </div>
  );
};

export default EditPendanaan;
