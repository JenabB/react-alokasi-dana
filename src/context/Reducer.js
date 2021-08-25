// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  switch (action.type) {
    case "GET_TOTAL_DANA":
      return {
        ...state,
        totalDana: action.payload,
      };
    default:
      return state;
  }
};
