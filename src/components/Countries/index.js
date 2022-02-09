import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

import { ADD_COUNTRY, createAction } from '../../redux/countries/index';
import ListOfCountries from './countries-list';

const populateReduxStore = (countries, dispatch) => {
  countries.forEach((country) => {
    dispatch(createAction(ADD_COUNTRY, country));
  });
};

const Countries = () => {
  const dispatch = useDispatch();
  const countriesState = useSelector((state) => state.countries);
  const baseAPI = 'https://api.covid19tracking.narrativa.com/api/countries';

  useEffect(() => {
    if (countriesState.fetched.length === 0) {
      axios
        .get(baseAPI)
        .then((countries) => populateReduxStore(countries.data.countries, dispatch));
    }
  }, []);
  return (
    <div>
      <ListOfCountries />
    </div>
  );
};
export default Countries;
