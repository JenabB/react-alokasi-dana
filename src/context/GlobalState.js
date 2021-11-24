import React, { createContext, useReducer, useEffect } from "react";
import Reducer from "./Reducer";
import categories from "components/createPendanaan/categories";
//state awal context
const initialState = {
  user: localStorage.getItem("alokasi-dana-user")
    ? localStorage.getItem("alokasi-dana-user")
    : "User",
  totalAlokasiDana: 0,
  categories: categories,
  totalDanaAwal: 0,
  totalDanaAkhir: 0,
  totalProduk: [],
  historyPendanaan: localStorage.getItem("history-pendanaan")
    ? JSON.parse(localStorage.getItem("history-pendanaan"))
    : [],
  pendanaanByDate: [],
  danaAwal: 0,
  danaAkhir: 0,
  semuaProduk: [
    { createAt: new Date(), nama: "", category: "pribadi", harga: 0 },
  ], //state awal semua produk
  pendanaanDetail: null,
};

//inisiasi context
export const GlobalContext = createContext(initialState);

export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  //menambahkan nilai ke localstorage ketika terjadi perubahan pada state
  useEffect(() => {
    localStorage.setItem(
      "history-pendanaan",
      JSON.stringify(state.historyPendanaan)
    );
  }, [state]);

  function editUser(user) {
    dispatch({
      type: "EDIT_USER",
      payload: user,
    });
  }

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

  function getTotalProduk(produk) {
    dispatch({
      type: "GET_TOTAL_PRODUK",
      payload: produk,
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
        user: state.user,
        totalAlokasiDana: state.totalAlokasiDana,
        totalDanaAwal: state.totalDanaAwal,
        totalDanaAkhir: state.totalDanaAkhir,
        totalProduk: state.totalProduk,
        categories: state.categories,
        danaAwal: state.danaAwal,
        danaAkhir: state.danaAkhir,
        semuaProduk: state.semuaProduk,
        historyPendanaan: state.historyPendanaan,
        pendanaanDetail: state.pendanaanDetail,
        editUser,
        getTotalAlokasiDana,
        getTotalDanaAwal,
        getTotalDanaAkhir,
        getTotalProduk,
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
