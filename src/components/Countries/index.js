import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';

import { ADD_COUNTRY, createAction } from '../../redux/countries/index';
import ListOfCountries from './countries-list';

const populateReduxStore = (countries, dispatch) => {
  countries.forEach((country) => {
    dispatch(createAction(ADD_COUNTRY, country));
  });
};

const Countries = () => {
  const dispatch = useDispatch();
  const baseAPI = 'https://api.covid19tracking.narrativa.com/api/countries';

  useEffect(() => {
    axios
      .get(baseAPI)
      .then((countries) => populateReduxStore(countries.data.countries, dispatch));
  }, []);
  return (
    <div>
      <ListOfCountries />
    </div>
  );
};
export default Countries;
