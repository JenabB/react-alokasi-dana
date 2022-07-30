import React, { createContext, useReducer, useEffect } from "react";
import Reducer from "./Reducer";
import { categories, templatePendanaan } from "data";

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
    { createdAt: new Date(), nama: "", category: "pribadi", harga: 0 },
  ], //state awal semua produk
  pendanaanDetail: null,

  plan: localStorage.getItem("plan-dana")
    ? JSON.parse(localStorage.getItem("plan-dana"))
    : [],
  templatePendanaan: templatePendanaan,
  selectedTemplateDetail: {},
  selectedTemplate: [
    {
      createdAt: new Date(),
      nama: "",
      category: "pribadi",
      harga: 0,
    },
  ],
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
    localStorage.setItem("plan-dana", JSON.stringify(state.plan));
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

  function createPlan(plan) {
    dispatch({
      type: "CREATE_PLAN",
      payload: plan,
    });
  }

  function setToCompletePlan(plan) {
    dispatch({
      type: "SET_TO_COMPLETE_PLAN",
      payload: plan,
    });
  }

  function editPlan(plan) {
    dispatch({
      type: "EDIT_PLAN",
      payload: plan,
    });
  }

  function deletePlan(planId) {
    dispatch({
      type: "DELETE_PLAN",
      payload: planId,
    });
  }

  function setToSelectedTemplateDetail(template) {
    dispatch({
      type: "SET_TO_SELECTED_TEMPLATE_DETAIL",
      payload: template,
    });
  }

  function setToSelectedTemplate(template) {
    dispatch({
      type: "SET_TO_SELECTED_TEMPLATE",
      payload: template,
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
        plan: state.plan,
        templatePendanaan: state.templatePendanaan,
        selectedTemplateDetail: state.selectedTemplateDetail,
        selectedTemplate: state.selectedTemplate,
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
        //plan
        createPlan,
        setToCompletePlan,
        editPlan,
        deletePlan,
        //templatePendanaan
        setToSelectedTemplateDetail,
        setToSelectedTemplate,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
