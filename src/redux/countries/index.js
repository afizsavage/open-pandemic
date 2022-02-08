export const ADD_COUNTRY = 'open-pandemic/countries/addCountry';

const initialState = [];

export const createAction = (actionType, payload) => ({
  type: actionType,
  payload,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COUNTRY:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default reducer;
