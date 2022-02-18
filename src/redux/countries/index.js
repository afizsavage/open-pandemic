export const ADD_COUNTRY = 'open-pandemic/countries/addCountry';
export const SEARCH_COUNTRY = 'open-pandemic/countries/searchCountry';
export const VIEW_COUNTRY_DETAILS = 'open-pandemic/countries/viewCountryDetails';

const initialState = {
  fetched: [], searchResult: [], searching: false, currentCountry: null,
};

export const createAction = (actionType, payload) => ({
  type: actionType,
  payload,
});

export const searchCountry = (state, value) => {
  const { fetched } = state;

  const filteredCountries = fetched.filter(
    (country) => country.name.includes(value),
  );

  return { ...state, searchResult: filteredCountries, searching: true };
};

export const viewCountryDetails = (state, country) => {
  const newState = { ...state, currentCountry: country };
  return newState;
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COUNTRY:
      return { ...state, fetched: [...state.fetched, action.payload] };
    case SEARCH_COUNTRY:
      return searchCountry(state, action.payload);
    case VIEW_COUNTRY_DETAILS:
      return viewCountryDetails(state, action.payload);
    default:
      return state;
  }
};

export default reducer;
