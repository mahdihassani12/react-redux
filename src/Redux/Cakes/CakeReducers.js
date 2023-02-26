const initialCakes = {
  numOfCakes: 10,
};

export const cakeReducer = (state = initialCakes, action) => {
  switch (action.type) {
    case "BUY_CAKE":
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };

    default:
      return state;
  }
};
