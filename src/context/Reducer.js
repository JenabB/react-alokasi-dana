// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  switch (action.type) {
    case "GET_TOTAL_ALOKASI_DANA":
      return {
        ...state,
        totalAlokasiDana: parseInt(action.payload),
      };

    case "GET_DANA_AWAL":
      return {
        ...state,
        danaAwal: action.payload,
      };

    case "GET_DANA_AKHIR":
      return {
        ...state,
        danaAkhir: action.payload,
      };

    case "GET_HARGA_PRODUK":
      return {
        ...state,
        hargaProduk: action.payload,
      };

    case "GET_SEMUA_PRODUK":
      return {
        ...state,
        semuaProduk: action.payload,
      };

    case "SET_TO_HISTORY":
      return {
        ...state,
        history: [action.payload, ...state.history],
      };

    default:
      return state;
  }
};
