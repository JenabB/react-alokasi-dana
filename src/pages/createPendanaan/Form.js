import React, { useState } from "react";
// import Swal from "sweetalert2";
import { formatRp } from "../../utils/formatRp";
// import { GlobalContext } from "../../context/GlobalState";

const Form = () => {
  const [totalDanaAwal, setTotalDanaAwal] = useState(0);
  const [totalDanaAkhir, setTotalDanaAkhir] = useState(0);
  const [semuaProduk, setSemuaProduk] = useState([{ nama: "", harga: 0 }]);

  //   const { test } = useContext(GlobalContext);

  const handleDanaChange = (e) => {
    setTotalDanaAwal(e.target.value);
    setTotalDanaAkhir(e.target.value);
  };

  const handleProdukChange = (index, e) => {
    let produks = [...semuaProduk];
    let produk = produks[index];

    produks[index] = { ...produk, [e.target.name]: e.target.value };

    setSemuaProduk(produks);
  };

  const handleProdukSubmit = (e) => {
    e.preventDefault();
    setSemuaProduk([...semuaProduk, { nama: "", harga: 0 }]);
  };

  const save = () => {
    console.log(semuaProduk);
  };

  return (
    <div>
      {/* menampilkan dana */}
      <div className="bg-green-500 text-white grid grid-cols-2 m-4 p-4 rounded-lg">
        <div>
          <h1>Dana Awal</h1>
          <h1>{formatRp(totalDanaAwal)}</h1>
        </div>
        <div>
          <h1>Dana Akhir</h1>
          <h1>{formatRp(totalDanaAkhir)}</h1>
        </div>
        <div className="mt-4 text-center">
          {semuaProduk.length > 0 ? (
            <table>
              <tr>
                <th>No.</th>
                <th>Nama</th>
                <th>Harga</th>
              </tr>
              {semuaProduk.map((product, index) => (
                <tr>
                  <td>{semuaProduk.indexOf(product) + 1}</td>
                  <td>{product.nama}</td>
                  <td>{product.harga}</td>
                </tr>
              ))}
            </table>
          ) : (
            ""
          )}
        </div>
      </div>

      <div className="p-4">
        <div className="text-center">
          <h4 className="text-muted mb-2">Buat Pendanaan</h4>
          <input
            className="p-2 rounded-xl bg-gray-300"
            type="number"
            value={totalDanaAwal}
            onChange={handleDanaChange}
            placeholder="dana"
          />
        </div>

        <div className="text-center">
          {semuaProduk.length > 0 ? (
            semuaProduk.map((produk, index) => (
              <div key={index} className="my-4 shadow p-4">
                <h1 className="text-left pl-4">Nama</h1>
                <input
                  className="bg-gray-300 p-2 rounded-lg my-1"
                  type="text"
                  maxlength="20"
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
                  maxlength="5"
                  type="tel"
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
          Add more
        </button>
        <br />
        <div className="text-center mt-4">
          <button
            className="bg-green-400 text-white font-bold px-2 py-1 rounded"
            onClick={save}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
