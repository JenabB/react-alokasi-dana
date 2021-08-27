import React, { createContext, useReducer } from "react";
import Reducer from "./Reducer";

const initialState = {
  totalAlokasiDana: localStorage.getItem("total-alokasi-dana")
    ? localStorage.getItem("total-alokasi-dana")
    : 0,
  danaAwal: 0,
  danaAkhir: 0,
  semuaProduk: [{ nama: "", harga: 0 }],
  hargaProduk: 0,
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

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

  // function getSemuaProduk(dana) {
  //   dispatch({

  //   })
  // }
  return (
    <GlobalContext.Provider
      value={{
        totalAlokasiDana: state.totalAlokasiDana,
        danaAwal: state.danaAwal,
        danaAkhir: state.danaAkhir,
        semuaProduk: state.semuaProduk,
        hargaProduk: state.hargaProduk,
        getTotalAlokasiDana,
        getDanaAwal,
        getDanaAkhir,
        getHargaProduk,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
