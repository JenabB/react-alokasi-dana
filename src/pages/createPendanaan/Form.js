import React, { useState, useEffect, useContext } from "react";
// import Swal from "sweetalert2";
import { formatRp } from "../../utils/formatRp";
import { GlobalContext } from "../../context/GlobalState";

const Form = () => {
  const [semuaProduk, setSemuaProduk] = useState([{ nama: "", harga: 0 }]);

  const {
    danaAwal,
    danaAkhir,
    getDanaAwal,
    getDanaAkhir,
    hargaProduk,
    getHargaProduk,
  } = useContext(GlobalContext);

  const handleDanaChange = (e) => {
    getDanaAwal(parseInt(e.target.value));
  };

  const handleProdukChange = (index, e) => {
    let produks = [...semuaProduk];
    let produk = produks[index];

    produks[index] = { ...produk, [e.target.name]: e.target.value };

    setSemuaProduk(produks);
  };

  const handleProdukSubmit = (e) => {
    e.preventDefault();

    getDanaAkhir(danaAwal);
    setSemuaProduk([...semuaProduk, { nama: "", harga: 0 }]);
  };

  const save = () => {
    console.log(semuaProduk);
  };

  useEffect(() => {
    let hasil = 0;

    semuaProduk.forEach((item) => {
      hasil += parseInt(item.harga);
    });

    getDanaAkhir(danaAwal - parseInt(hasil));
    getHargaProduk(hasil);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [semuaProduk, danaAwal]);

  return (
    <div>
      {/* menampilkan dana */}
      <div className="bg-green-600 text-center text-white  m-4 p-4 rounded-lg">
        <div className="grid grid-cols-2">
          <div>
            <h1>Dana Awal</h1>
            <h1 className="font-bold">{formatRp(danaAwal)}</h1>
          </div>
          <div>
            <h1>Dana Akhir</h1>
            <h1 className="font-bold">{formatRp(danaAkhir)}</h1>
          </div>
        </div>

        <div className="mt-8 text-center">
          {hargaProduk !== 0 && semuaProduk.length !== 0 ? (
            <div className="bg-green-900 rounded-lg px-2 py-3">
              <table className="table-fixed w-full">
                <tr>
                  <th className="w-1/4">No.</th>
                  <th className="w-2/4">Nama</th>
                  <th className="w-2/4">Harga</th>
                </tr>
                {semuaProduk.map((product, index) => (
                  <tr key={index}>
                    <td>{semuaProduk.indexOf(product) + 1}</td>
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
      </div>

      <div className="p-4">
        <div className="text-center">
          <h4 className="text-muted mb-2">Buat Pendanaan</h4>
          <input
            className="p-2 rounded-xl bg-gray-300"
            type="number"
            value={danaAwal}
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
          Add more
        </button>
        <br />
        <div className="text-center mt-4">
          <button
            className="bg-green-800 text-white font-bold px-2 py-1 rounded"
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
