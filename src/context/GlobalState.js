import React, { createContext, useReducer, useEffect } from "react";
import Reducer from "./Reducer";

const initialState = {
  totalAlokasiDana: localStorage.getItem("total-alokasi-dana")
    ? localStorage.getItem("total-alokasi-dana")
    : 0,
  history: localStorage.getItem("history-pendanaan")
    ? JSON.parse(localStorage.getItem("history-pendanaan"))
    : [],
  danaAwal: 0,
  danaAkhir: 0,
  semuaProduk: [{ nama: "", harga: 0 }],
  hargaProduk: 0,
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  useEffect(() => {
    localStorage.setItem(
      "total-alokasi-dana",
      JSON.stringify(state.totalAlokasiDana)
    );
    localStorage.setItem("history-pendanaan", JSON.stringify(state.history));
  }, [state]);

  function getTotalAlokasiDana(dana) {
    dispatch({
      type: "GET_TOTAL_ALOKASI_DANA",
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

  return (
    <GlobalContext.Provider
      value={{
        totalAlokasiDana: state.totalAlokasiDana,
        danaAwal: state.danaAwal,
        danaAkhir: state.danaAkhir,
        semuaProduk: state.semuaProduk,
        hargaProduk: state.hargaProduk,
        history: state.history,
        getTotalAlokasiDana,
        getDanaAwal,
        getDanaAkhir,
        getHargaProduk,
        getSemuaProduk,
        setToHistory,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
