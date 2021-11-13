// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  switch (action.type) {
    //mendapatkan total alokasi dana
    case "GET_TOTAL_ALOKASI_DANA":
      return {
        ...state,
        totalAlokasiDana: action.payload,
      };

    //mendapatkan total dana awal
    case "GET_TOTAL_DANA_AWAL":
      return {
        ...state,
        totalDanaAwal: action.payload,
      };

    //mendapatkan total dana akhir
    case "GET_TOTAL_DANA_AKHIR":
      return {
        ...state,
        totalDanaAkhir: action.payload,
      };

    case "GET_TOTAL_PRODUK":
      return {
        ...state,
        totalProduk: action.payload,
      };

    //mendapatkan dana awal
    case "GET_DANA_AWAL":
      return {
        ...state,
        danaAwal: action.payload,
      };

    //mendapatkan dana akhir
    case "GET_DANA_AKHIR":
      return {
        ...state,
        danaAkhir: action.payload,
      };

    //mendapat semua produk
    case "GET_SEMUA_PRODUK":
      return {
        ...state,
        semuaProduk: action.payload,
      };

    //menyimpan form pendanaan ke history (localStorage,"history-pendanaan")
    case "SET_TO_HISTORY":
      return {
        ...state,
        //array baru
        //berisi object payload (terbaru), kemudian history pendanaan yang lama
        historyPendanaan: [action.payload, ...state.historyPendanaan],
      };

    //menghapus satu pendanaan
    case "DELETE_ONE_PENDANAAN":
      return {
        ...state,
        //menghapus satu pendanaan
        //.filter menhapus pendanaan yang memilik id yang sama dgn payload
        historyPendanaan: state.historyPendanaan.filter(
          (item) => item.id !== action.payload
        ),
      };

    //mendapatkan 1 pendanaan detail
    case "GET_PENDANAAN_DETAIL":
      return {
        ...state,
        pendanaanDetail: action.payload,
      };

    //mengubah data pendanaan
    case "EDIT_PENDANAAN":
      const updatePendanaan = action.payload;
      const updatesPendanaan = state.historyPendanaan.map((dana) => {
        if (dana.id === updatePendanaan.id) {
          return updatePendanaan;
        }

        return dana;
      });
      return {
        ...state,
        historyPendanaan: updatesPendanaan,
      };

    case "GET_SELECTED_BLOG":
      return {
        ...state,
        selectedBlog: action.payload,
      };

    default:
      return state;
  }
};
