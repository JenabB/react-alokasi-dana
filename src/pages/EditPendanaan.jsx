import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Helmet from "react-helmet";
import { formInput } from "theme/inputTheme";
import { motion } from "framer-motion";
import { formatRp } from "utils/formatRp";
import { v4 as uuidv4 } from "uuid";

//context
import { GlobalContext } from "context/GlobalState";

//component
import { AppBar } from "components/common";

const EditPendanaan = () => {
  const { danaAwal, categories, historyPendanaan, editPendanaan } =
    useContext(GlobalContext);
  const { id } = useParams();

  const matchDana = historyPendanaan.find((dana) => dana.id === id);

  const [updatedDana, setUpdatedDana] = useState({
    id: matchDana.id,
    createdAt: matchDana.createdAt,
    namaPendanaan: matchDana.namaPendanaan,
    danaAwal: matchDana.danaAwal,
    danaAkhir: matchDana.danaAkhir,
    semuaProduk: matchDana.semuaProduk,
  });

  const isMinus = updatedDana.danaAkhir < 0;

  let navigate = useNavigate();

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

    setUpdatedDana({ ...updatedDana, semuaProduk: produks });
  };

  //menyimpan ke daftar produk
  const handleProdukSubmit = (e) => {
    e.preventDefault();
    setUpdatedDana({
      ...updatedDana,
      semuaProduk: [
        ...updatedDana.semuaProduk,
        {
          id: uuidv4(),
          nama: "",
          createdAt: new Date(),
          category: categories[0].value,
          harga: 0,
        },
      ],
    });
  };

  const handleDeleteProduk = (id) => {
    const filteredProduct = updatedDana.semuaProduk.filter((s) => s.id !== id);
    setUpdatedDana({
      ...updatedDana,
      semuaProduk: filteredProduct,
    });
  };

  useEffect(() => {
    let hasil = 0;
    updatedDana.semuaProduk.forEach((item) => {
      const hargaFinal =
        item.harga && item.harga.includes("%")
          ? danaAwal * (+item.harga.replace("%", "") / 100)
          : item.harga;
      hasil += parseInt(hargaFinal);
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
    navigate("/");
  };

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

      <AppBar isBack={true} title="Edit Pendanaan" />

      <div className="m-4 text-center">
        <div className="sticky top-10 z-10 lg:w-2/4 mx-auto w-full m-4">
          <motion.div
            animate={{
              scale: [2, 1],
            }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid grid-cols-2">
              <div className="bg-tabungan p-4">
                <h1>Dana Awal</h1>
                <h1 className="font-bold">{formatRp(updatedDana.danaAwal)}</h1>
              </div>
              <div className="bg-asmara p-4">
                <h1>Dana Akhir</h1>
                <h1 className="font-bold">{formatRp(updatedDana.danaAkhir)}</h1>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-10 lg:w-2/4 w-full mx-auto bg-white shadow-sm p-4">
          <h1>Nama pendanaan</h1>
          <input
            type="text"
            className={formInput}
            placeholder="nama baru"
            name="namaPendanaan"
            value={updatedDana.namaPendanaan}
            onChange={handleInputChange}
          />
          <h1>Dana awal</h1>
          <input
            type="number"
            className={formInput}
            placeholder="dana awal"
            name="danaAwal"
            value={updatedDana.danaAwal}
            onChange={handleDanaAwalChange}
          />
        </div>

        <div className="lg:w-2/4 mx-auto w-full">
          <h1 className="mt-8">Alokasi Dana</h1>
          {updatedDana.semuaProduk.length > 0 ? (
            updatedDana.semuaProduk.map((produk, index) => (
              <div
                key={index}
                className="my-4 bg-white shadow p-4 grid justify-items-stretch"
              >
                <button
                  onClick={() => handleDeleteProduk(produk.id)}
                  className="material-icons text-red justify-self-end"
                >
                  delete
                </button>
                <h1 className="text-left pl-4">Nama</h1>
                <input
                  className={formInput}
                  type="text"
                  maxLength="20"
                  name="nama"
                  value={produk.nama}
                  placeholder="produk"
                  onChange={(e) => {
                    handleProdukChange(index, e);
                  }}
                />
                <select
                  name="category"
                  value={produk.category}
                  className="p-2 w-full bg-keluarga"
                  onChange={(e) => {
                    handleProdukChange(index, e);
                  }}
                >
                  {categories.map((c, index) => (
                    <option key={index} value={c.value}>
                      {c.label}
                    </option>
                  ))}
                </select>
                <h1 className="text-left pl-4 mt-4">Harga</h1>
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
                    handleProdukChange(index, e);
                  }}
                />
              </div>
            ))
          ) : (
            <h1>Belum ada produk</h1>
          )}
        </div>

        <button
          className="my-4 text-primary font-extrabold px-2 py-1 rounded-lg"
          onClick={handleProdukSubmit}
        >
          Tambah lagi
        </button>
      </div>
      <div className="text-center m-8 pb-20">
        <button
          disabled={isMinus}
          className={
            isMinus
              ? "bg-disabled px-4 py-2 text-white rounded-xl"
              : "bg-primary px-4 py-2 text-white rounded-xl"
          }
          onClick={handleSubmit}
        >
          Simpan perubahan
        </button>
      </div>
    </motion.div>
  );
};

export default EditPendanaan;
