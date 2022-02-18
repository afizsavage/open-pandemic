import { createAction, searchCountry, viewCountryDetails } from '../redux/countries/index';

describe('Tests for pure functions in redux code', () => {
  const country = { name: 'Sierra Leone', id: 'sierra_leone' };
  const state = {
    fetched: [{ name: 'Afganistan' }], searchResult: [], searching: false, currentCountry: null,
  };
  const expectedFromSearch = {
    fetched: [{ name: 'Afganistan' }], searchResult: [{ name: 'Afganistan' }], searching: true, currentCountry: null,
  };
  const expectedState = {
    fetched: [{ name: 'Afganistan' }], searchResult: [], searching: false, currentCountry: country,
  };

  it('returns a new state in which searching is true', () => {
    expect(searchCountry(state, 'Afganistan')).toStrictEqual(expectedFromSearch);
  });
  it('returns a new state in which currentCountry has a value', () => {
    expect(viewCountryDetails(state, country)).toStrictEqual(expectedState);
  });
  it('returns a createAction() object', () => {
    expect(createAction('add', '1234')).toStrictEqual({ type: 'add', payload: '1234' });
  });
});
