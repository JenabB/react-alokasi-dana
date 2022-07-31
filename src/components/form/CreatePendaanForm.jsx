import React, { useState, useEffect, useContext } from "react";
import { GlobalContext } from "context/GlobalState";
import { useNavigate } from "react-router-dom";

//utils
import Swal from "sweetalert2";
import { v4 as uuidv4 } from "uuid";
import { motion } from "framer-motion";
import { categories } from "data";
import { formInput } from "theme/inputTheme";
import Suggestions from "../createPendanaan/Suggestion";

const Form = () => {
  //state
  const [namaPendanaan, setNamaPendaan] = useState("");
  //sebagai validator ketika nama pendanaan dan dana awal terisi
  //bernilai true ketika input nama pendanaan dan dana awal terisi
  const [isFilled, setIsfilled] = useState(false);
  const [category] = useState("pribadi");
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

  let navigate = useNavigate();

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
        category: category,
        harga: 0,
        createdAt: new Date(),
      },
    ]);
  };

  const saveToHistory = () => {
    //insert id to index 0
    semuaProduk[0].id = uuidv4();

    //save to history
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
    navigate("/");
  };

  useEffect(() => {
    let hasil = 0;

    semuaProduk.forEach((item) => {
      const hargaFinal =
        item.harga && item.harga.includes("%")
          ? danaAwal * (+item.harga.replace("%", "") / 100)
          : item.harga;
      hasil += parseInt(hargaFinal);
    });

    //dana akhir = dana awal - semua harga dari produk
    getDanaAkhir(danaAwal - parseInt(hasil));

    //mencegah nama pendanaan dan dana awal kosong
    if (
      namaPendanaan === "" ||
      danaAwal <= 0 ||
      isNaN(danaAwal) ||
      isNaN(danaAkhir)
    ) {
      setIsfilled(false);
    } else {
      setIsfilled(true);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [semuaProduk, danaAwal, namaPendanaan]);

  const isMinus = danaAkhir < 0;

  return (
    <div>
      <motion.div
        className="px-4"
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
        {danaAwal > 0 ? <Suggestions danaAwal={danaAwal} /> : ""}
        <div className="text-center bg-white py-6 px-6 rounded">
          <h4 className="text-muted mb-6 text-lg">Buat Pendanaan</h4>
          <div className="text-left">
            <h1 className="text-formLabel">Nama Pendanaan</h1>
            <input
              type="text"
              className={formInput}
              placeholder="contoh: beli album lyly"
              value={namaPendanaan}
              onChange={handleNamaPendanaanChange}
              required
            />
            <h1 className="text-formLabel">Total Pendanaan</h1>
            <input
              className={formInput}
              type="number"
              value={danaAwal}
              onChange={handleDanaChange}
              placeholder="dana"
              required
            />
          </div>
        </div>

        <div className="text-center">
          <h1 className="mt-8">Alokasi Dana</h1>
          {semuaProduk.length > 0 ? (
            semuaProduk.map((produk, produkIndex) => (
              <div
                key={produkIndex}
                className="my-4 shadow bg-white rounded p-4"
              >
                <h1 className="text-left text-formLabel">Nama</h1>
                <input
                  className={formInput}
                  type="text"
                  maxLength="20"
                  name="nama"
                  value={produk.nama}
                  placeholder="produk"
                  onChange={(e) => {
                    handleProdukChange(produkIndex, e);
                  }}
                />
                <h1 className="text-left text-formLabel">Kategori</h1>
                <select
                  name="category"
                  className="p-2 w-full bg-keluarga"
                  onChange={(e) => {
                    handleProdukChange(produkIndex, e);
                  }}
                >
                  <option selected={produk.category} value={produk.category}>
                    {produk.category[0].toUpperCase() +
                      produk.category.slice(1)}
                  </option>
                  {categories
                    .filter((el) => el.value !== produk.category)
                    .map((c, index) => (
                      <option key={index} value={c.value}>
                        {c.label}
                      </option>
                    ))}
                </select>
                <h1 className="text-left text-formLabel mt-4">Harga</h1>
                <input
                  className={formInput}
                  type="number"
                  name="harga"
                  value={
                    produk.harga && produk.harga.includes("%")
                      ? danaAwal * (produk.harga.replace("%", "") / 100)
                      : produk.harga
                  }
                  placeholder="harga"
                  onChange={(e) => {
                    handleProdukChange(produkIndex, e);
                  }}
                />
              </div>
            ))
          ) : (
            <h1>blm ada produk</h1>
          )}
        </div>

        <button
          className="my-4 bg-input px-2 py-1 rounded-lg"
          onClick={handleProdukSubmit}
        >
          Tambah lagi
        </button>
        <br />

        {/* button simpan akan aktif jika ada input nama pendanaan dan dana awal */}
        <div className="text-center mt-4 mb-8">
          <button
            disabled={isMinus || !isFilled}
            className={
              isMinus || !isFilled
                ? "bg-disabled text-white font-bold px-2 py-1 rounded"
                : "bg-primary text-white font-bold px-2 py-1 rounded"
            }
            onClick={saveToHistory}
          >
            Simpan
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Form;
