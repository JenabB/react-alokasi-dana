import React, { createContext, useReducer, useEffect } from "react";
import Reducer from "./Reducer";

const initialState = {
  totalAlokasiDana: 0,
  totalDanaAwal: 0,
  totalDanaAkhir: 0,
  history: localStorage.getItem("history-pendanaan")
    ? JSON.parse(localStorage.getItem("history-pendanaan"))
    : [],
  danaAwal: 0,
  danaAkhir: 0,
  semuaProduk: [{ nama: "", harga: 0 }],
  hargaProduk: 0,
  pendanaanDetail: null,
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  useEffect(() => {
    localStorage.setItem("history-pendanaan", JSON.stringify(state.history));
  }, [state]);

  function getTotalAlokasiDana(dana) {
    dispatch({
      type: "GET_TOTAL_ALOKASI_DANA",
      payload: dana,
    });
  }

  function getTotalDanaAwal(dana) {
    dispatch({
      type: "GET_TOTAL_DANA_AWAL",
      payload: dana,
    });
  }

  function getTotalDanaAkhir(dana) {
    dispatch({
      type: "GET_TOTAL_DANA_AKHIR",
      payload: dana,
    });
  }

  function getDanaAwal(dana) {
    dispatch({
      type: "GET_DANA_AWAL",
      payload: dana,
    });
  }

  function getDanaAkhir(dana) {
    dispatch({
      type: "GET_DANA_AKHIR",
      payload: dana,
    });
  }

  function getHargaProduk(harga) {
    dispatch({
      type: "GET_HARGA_PRODUK",
      payload: harga,
    });
  }

  function getSemuaProduk(produk) {
    dispatch({
      type: "GET_SEMUA_PRODUK",
      payload: produk,
    });
  }

  function setToHistory(dana) {
    dispatch({
      type: "SET_TO_HISTORY",
      payload: dana,
    });
  }

  function deleteOnePendanaan(danaId) {
    dispatch({
      type: "DELETE_ONE_PENDANAAN",
      payload: danaId,
    });
  }

  function getPendanaanDetail(pendanaan) {
    dispatch({
      type: "GET_PENDANAAN_DETAIL",
      payload: pendanaan,
    });
  }

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
        hargaProduk: state.hargaProduk,
        history: state.history,
        pendanaanDetail: state.pendanaanDetail,
        getTotalAlokasiDana,
        getTotalDanaAwal,
        getTotalDanaAkhir,
        getDanaAwal,
        getDanaAkhir,
        getHargaProduk,
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
