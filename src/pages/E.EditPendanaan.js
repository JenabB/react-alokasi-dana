import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import Helmet from "react-helmet";

import { motion } from "framer-motion";
import { formatRp } from "utils/formatRp";
import { v4 as uuidv4 } from "uuid";

//context
import { GlobalContext } from "context/GlobalState";

//component
import AppBarWithBackButton from "components/AppBarWithBackButton";

const EditPendanaan = (props) => {
  const { historyPendanaan, editPendanaan } = useContext(GlobalContext);

  const id = props.match.params.id;

  const matchDana = historyPendanaan.find((dana) => dana.id === id);

  const [updatedDana, setUpdatedDana] = useState({
    id: matchDana.id,
    namaPendanaan: matchDana.namaPendanaan,
    danaAwal: matchDana.danaAwal,
    danaAkhir: matchDana.danaAkhir,
    semuaProduk: matchDana.semuaProduk,
  });

  let historyy = useHistory();

  const [semuaProo, setSemuaProo] = useState([...updatedDana.semuaProduk]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedDana({ ...updatedDana, [name]: value });
  };

  const handleDanaAwalChange = (e) => {
    const { name, value } = e.target;
    setUpdatedDana({ ...updatedDana, [name]: parseInt(value) });
  };

  const handleProdukChange = (index, e) => {
    let produks = [...updatedDana.semuaProduk];
    let produk = produks[index];

    produks[index] = { ...produk, [e.target.name]: e.target.value };

    setSemuaProo(produks);
  };

  //menyimpan ke daftar produk
  const handleProdukSubmit = (e) => {
    e.preventDefault();
    setUpdatedDana({ ...updatedDana, danaAkhir: updatedDana.danaAwal });
    setSemuaProo([...semuaProo, { id: uuidv4(), nama: "", harga: 0 }]);
  };

  // const saveToHistory = () => {
  //   setToHistory({
  //     id: uuidv4(),
  //     createdAt: new Date(),
  //     namaPendanaan: namaPendanaan,
  //     danaAwal: danaAwal,
  //     danaAkhir: danaAkhir,
  //     semuaProduk: semuaProduk,
  //   });
  //   Swal.fire({
  //     icon: "success",
  //     title: "Tersimpan",
  //     text: `${namaPendanaan} tersimpan`,
  //   });

  //   //setelah history pendanaan disimpan, akan dilempar kembali ke home
  //   history.push("/home");
  // };

  const handleDeleteProduk = (id) => {
    const updatedP = semuaProo.slice(1).filter((s) => s.id !== id);
    setUpdatedDana({
      ...updatedDana,
      semuaProduk: [semuaProo[0], ...updatedP],
    });
  };

  useEffect(() => {
    let hasil = 0;

    updatedDana.semuaProduk.forEach((item) => {
      hasil += parseInt(item.harga);
    });

    setUpdatedDana({
      ...updatedDana,
      danaAkhir: updatedDana.danaAwal - parseInt(hasil),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [updatedDana.danaAwal, updatedDana.semuaProduk]);

  const handleSubmit = (e) => {
    e.preventDefault();

    editPendanaan(updatedDana);
    historyy.push("/home");
  };

  console.log(updatedDana);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {
          scale: 0.8,
          opacity: 0,
        },
        visible: {
          scale: 1,
          opacity: 1,
          transition: {
            delay: 0.4,
          },
        },
      }}
    >
      <Helmet>
        <meta charSet="utf-8" />
        <title>Edit Pendanaan</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>

      <AppBarWithBackButton title="Edit Pendanaan" />

      <div className="mt-4 text-center">
        <div className="lg:w-2/4 mx-auto w-full">
          <motion.div
            className="bg-green-600 sticky top-4 z-10 text-center text-white  m-4 p-4 rounded-lg"
            animate={{
              scale: [2, 1],
            }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid grid-cols-2">
              <div>
                <h1>Dana Awal</h1>
                <h1 className="font-bold">{formatRp(updatedDana.danaAwal)}</h1>
              </div>
              <div>
                <h1>Dana Akhir</h1>
                <h1 className="font-bold">{formatRp(updatedDana.danaAkhir)}</h1>
              </div>
            </div>
            <div className="mt-8 text-center">
              {updatedDana.semuaProduk.length !== 0 ? (
                <div className="bg-green-900 rounded-lg px-2 py-3">
                  <table className="table-fixed w-full">
                    <tr>
                      <th className="w-1/4">No.</th>
                      <th className="w-2/4">Nama</th>
                      <th className="w-2/4">Harga</th>
                    </tr>
                    {updatedDana.semuaProduk.map((product, index) => (
                      <tr key={index}>
                        <td>{updatedDana.semuaProduk.indexOf(product) + 1}</td>
                        <td width="300px">{product.nama}</td>
                        <td>{formatRp(product.harga)}</td>
                      </tr>
                    ))}
                  </table>
                </div>
              ) : (
                ""
              )}
            </div>
          </motion.div>
        </div>

        <div className="mt-10">
          <h1>Nama pendanaan</h1>
          <input
            type="text"
            className="p-2 mb-6 rounded-xl bg-gray-300"
            placeholder="nama baru"
            name="namaPendanaan"
            value={updatedDana.namaPendanaan}
            onChange={handleInputChange}
          />
          <h1>Dana awal</h1>
          <input
            type="number"
            className="p-2 mb-6 rounded-xl bg-gray-300"
            placeholder="dana awal"
            name="danaAwal"
            value={updatedDana.danaAwal}
            onChange={handleDanaAwalChange}
          />
        </div>

        <div className="lg:w-2/4 mx-auto w-full">
          <h1 className="mt-10">Daftar Pendanaan</h1>
          <div className="my-10 px-4">
            <table>
              <tr>
                <th className="w-1/4">No.</th>
                <th className="w-2/4">Nama</th>
                <th className="w-2/4">Harga</th>
                <th className="w-2/4">Aksi</th>
              </tr>
              {updatedDana.semuaProduk.slice(1).map((p, i) => (
                <tr key={i}>
                  <td>{updatedDana.semuaProduk.indexOf(p) + 1}</td>
                  <th>{p.nama}</th>
                  <th>{p.harga}</th>
                  <th>
                    <button onClick={() => handleDeleteProduk(p.id)}>
                      Delete
                    </button>
                  </th>
                </tr>
              ))}
            </table>
          </div>
        </div>

        <div className="lg:w-2/4 mx-auto w-full text-center">
          <h1 className="mt-8">Alokasi Dana</h1>
          {updatedDana.semuaProduk.length > 0 ? (
            updatedDana.semuaProduk.map((produk, index) => (
              <div key={index} className="my-4 shadow p-4">
                <h1 className="text-left pl-4">Nama</h1>
                <input
                  className="bg-gray-300 p-2 rounded-lg my-1"
                  type="text"
                  maxLength="20"
                  name="nama"
                  value={produk.nama}
                  placeholder="produk"
                  onChange={(e) => {
                    handleProdukChange(index, e);
                  }}
                />
                <h1 className="text-left pl-4 mt-4">Harga</h1>
                <input
                  className="bg-gray-100 p-2"
                  type="number"
                  name="harga"
                  value={produk.harga}
                  placeholder="harga"
                  onChange={(e) => {
                    handleProdukChange(index, e);
                  }}
                />
              </div>
            ))
          ) : (
            <h1>blm ada produk</h1>
          )}
        </div>

        <button
          className="my-4 bg-gray-100 px-2 py-1 rounded-lg"
          onClick={handleProdukSubmit}
        >
          Tambah lagi
        </button>

        <button
          className="bg-green-700 px-4 py-2 text-white rounded-xl"
          onClick={handleSubmit}
        >
          Simpan perubahan
        </button>
      </div>
    </motion.div>
  );
};

export default EditPendanaan;
