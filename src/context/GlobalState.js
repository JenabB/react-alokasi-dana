import React, { createContext, useReducer, useEffect } from "react";
import Reducer from "./Reducer";

//state awal context
const initialState = {
  totalAlokasiDana: 0,
  totalDanaAwal: 0,
  totalDanaAkhir: 0,
  //memeriksa apakah ada nilai pada localstorage history pendanaan
  history: localStorage.getItem("history-pendanaan")
    ? JSON.parse(localStorage.getItem("history-pendanaan"))
    : [],
  danaAwal: 0,
  danaAkhir: 0,
  semuaProduk: [{ nama: "", harga: 0 }], //state awal semua produk
  pendanaanDetail: null,
};

//inisiasi context
export const GlobalContext = createContext(initialState);

export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  //menambahkan nilai ke localstorage ketika terjadi perubahan pada state
  useEffect(() => {
    localStorage.setItem("history-pendanaan", JSON.stringify(state.history));
  }, [state]);

  //mendapatkan total alokasi dana
  function getTotalAlokasiDana(dana) {
    dispatch({
      type: "GET_TOTAL_ALOKASI_DANA",
      payload: dana,
    });
  }

  //mendapatkan total dana awal
  function getTotalDanaAwal(dana) {
    dispatch({
      type: "GET_TOTAL_DANA_AWAL",
      payload: dana,
    });
  }

  //mendapatkan total dana akhir
  function getTotalDanaAkhir(dana) {
    dispatch({
      type: "GET_TOTAL_DANA_AKHIR",
      payload: dana,
    });
  }

  //mendapatkan dana awal
  function getDanaAwal(dana) {
    dispatch({
      type: "GET_DANA_AWAL",
      payload: dana,
    });
  }

  //mendapatkan dana akhir
  function getDanaAkhir(dana) {
    dispatch({
      type: "GET_DANA_AKHIR",
      payload: dana,
    });
  }

  //mendapatkan semua produk
  function getSemuaProduk(produk) {
    dispatch({
      type: "GET_SEMUA_PRODUK",
      payload: produk,
    });
  }

  //menyimpan ke history pendanaan
  function setToHistory(dana) {
    dispatch({
      type: "SET_TO_HISTORY",
      payload: dana,
    });
  }

  //menghapus semua pendanaan
  function deleteOnePendanaan(danaId) {
    dispatch({
      type: "DELETE_ONE_PENDANAAN",
      payload: danaId,
    });
  }

  //mendapatkan detail satu pendanaan
  function getPendanaanDetail(pendanaan) {
    dispatch({
      type: "GET_PENDANAAN_DETAIL",
      payload: pendanaan,
    });
  }

  //mengedit pendanaan
  function editPendanaan(dana) {
    dispatch({
      type: "EDIT_PENDANAAN",
      payload: dana,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        totalAlokasiDana: state.totalAlokasiDana,
        totalDanaAwal: state.totalDanaAwal,
        totalDanaAkhir: state.totalDanaAkhir,
        danaAwal: state.danaAwal,
        danaAkhir: state.danaAkhir,
        semuaProduk: state.semuaProduk,
        history: state.history,
        pendanaanDetail: state.pendanaanDetail,
        getTotalAlokasiDana,
        getTotalDanaAwal,
        getTotalDanaAkhir,
        getDanaAwal,
        getDanaAkhir,
        getSemuaProduk,
        setToHistory,
        deleteOnePendanaan,
        getPendanaanDetail,
        editPendanaan,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
