export const ADD_COUNTRY = 'open-pandemic/countries/addCountry';
export const SEARCH_COUNTRY = 'open-pandemic/countries/searchCountry';

const initialState = { fetched: [], searchResult: [], searching: false };

export const createAction = (actionType, payload) => ({
  type: actionType,
  payload,
});

const searchCountry = (state, value) => {
  const { fetched } = state;

  const filteredCountries = fetched.filter(
    (country) => country.name.substring(0, value.length) === value,
  );

  return { ...state, searchResult: filteredCountries, searching: true };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COUNTRY:
      return { ...state, fetched: [...state.fetched, action.payload] };
    case SEARCH_COUNTRY:
      return searchCountry(state, action.payload);
    default:
      return state;
  }
};

export default reducer;
