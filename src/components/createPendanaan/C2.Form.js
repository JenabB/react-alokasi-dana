import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";

//context
import { GlobalContext } from "../../context/GlobalState";

//utils
import Swal from "sweetalert2";
import { v4 as uuidv4 } from "uuid";
import { motion } from "framer-motion";
import categories from "./categories";
import Select from "react-select";

const Form = () => {
  //state
  const [namaPendanaan, setNamaPendaan] = useState("");
  //sebagai validator ketika nama pendanaan dan dana awal terisi
  //bernilai true ketika input nama pendanaan dan dana awal terisi
  const [isFilled, setIsfilled] = useState(false);

  //context
  const {
    danaAwal,
    danaAkhir,
    getDanaAwal,
    getDanaAkhir,
    semuaProduk,
    getSemuaProduk,
    setToHistory,
  } = useContext(GlobalContext);

  const [category, setCategory] = useState("pribadi");

  let history = useHistory();

  const options = categories.map((c) => ({
    value: c.value,
    label: c.label,
  }));

  console.log(category);
  //action handler
  //nama pendanaan handler
  const handleNamaPendanaanChange = (e) => {
    setNamaPendaan(e.target.value);
  };
  //dana awal handler
  const handleDanaChange = (e) => {
    getDanaAwal(parseInt(e.target.value));
  };
  //produk change

  const handleProdukChange = (index, e) => {
    let produks = [...semuaProduk];
    let produk = produks[index];

    produks[index] = { ...produk, [e.target.name]: e.target.value };

    getSemuaProduk(produks);
  };

  //menyimpan ke daftar produk
  const handleProdukSubmit = (e) => {
    e.preventDefault();
    getDanaAkhir(danaAwal);
    getSemuaProduk([
      ...semuaProduk,
      {
        id: uuidv4(),
        nama: "",
        kategori: category,
        harga: 0,
        createdAt: new Date(),
      },
    ]);
  };

  const saveToHistory = () => {
    setToHistory({
      id: uuidv4(),
      createdAt: new Date(),
      namaPendanaan: namaPendanaan,
      danaAwal: danaAwal,
      danaAkhir: danaAkhir,
      semuaProduk: semuaProduk,
    });
    Swal.fire({
      icon: "success",
      title: "Tersimpan",
      text: `${namaPendanaan} tersimpan`,
    });

    //setelah history pendanaan disimpan, akan dilempar kembali ke home
    history.push("/home");
  };

  useEffect(() => {
    let hasil = 0;

    semuaProduk.forEach((item) => {
      hasil += parseInt(item.harga);
    });

    //dana akhir = dana awal - semua harga dari produk
    getDanaAkhir(danaAwal - parseInt(hasil));

    //mencegah nama pendanaan dan dana awal kosong
    if (namaPendanaan === "" && danaAwal <= 0) {
      setIsfilled(false);
    } else if (namaPendanaan === "" && isNaN(danaAwal)) {
      setIsfilled(false);
    } else if (namaPendanaan === "" && danaAwal > 0) {
      setIsfilled(false);
    } else {
      setIsfilled(true);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [semuaProduk, danaAwal, namaPendanaan]);

  return (
    <div>
      <motion.div
        className="p-4"
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
              delay: 0.9,
            },
          },
        }}
      >
        <div className="text-center">
          <h4 className="text-muted mb-6">Buat Pendanaan</h4>
          <h1 className="text-left ml-7">Nama Pendanaan</h1>

          <input
            type="text"
            className="p-2 mb-6 rounded-xl bg-gray-300"
            placeholder="contoh: beli album lyly"
            value={namaPendanaan}
            onChange={handleNamaPendanaanChange}
            required
          />
          <h1 className="text-left ml-7">Total Pendanaan</h1>
          <input
            className="p-2 rounded-xl bg-gray-300"
            type="number"
            value={danaAwal}
            onChange={handleDanaChange}
            placeholder="dana"
            required
          />
        </div>

        <div className="text-center">
          <h1 className="mt-8">Alokasi Dana</h1>
          {semuaProduk.length > 0 ? (
            semuaProduk.map((produk, index) => (
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
                <Select
                  options={options}
                  onChange={(e) => setCategory(e.value)}
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
        <br />

        {/* button simpan akan aktif jika ada input nama pendanaan dan dana awal */}
        <div className="text-center mt-4">
          {isFilled ? (
            <button
              className="bg-green-800 text-white font-bold px-2 py-1 rounded"
              onClick={saveToHistory}
            >
              Simpan
            </button>
          ) : (
            <button
              className="bg-gray-300 text-white font-bold px-2 py-1 rounded"
              disabled
            >
              Simpan
            </button>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default Form;
