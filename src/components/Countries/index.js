import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

import { ADD_COUNTRY, createAction } from '../../redux/countries/index';
import ListOfCountries from './countries-list';
import HeroSection from './hero-section';
import { baseAPI, getCurrentDate } from './api';

function importAllImages(r) {
  return r.keys().map(r);
}

const imageList = importAllImages(
  require.context('../../images', false, /\.(png|jpe?g|svg)$/),
);

const populateReduxStore = (data, dispatch) => {
  let img;
  const dataObj = Object.values(data)[0];
  const countries = Object.values(dataObj);

  countries.forEach((country) => {
    img = imageList.filter((image) => image.includes(country.id));
    dispatch(createAction(ADD_COUNTRY, { ...country, image: img[0] }));
  });
};

const Countries = () => {
  const dispatch = useDispatch();
  const countriesState = useSelector((state) => state.countries);

  useEffect(() => {
    if (countriesState.fetched.length === 0) {
      axios
        .get(`${baseAPI}${getCurrentDate()}`)
        .then((countries) => populateReduxStore(Object.values(countries.data.dates)[0], dispatch));
    }
  }, []);
  return (
    <main>
      <HeroSection />
      <ListOfCountries />
    </main>
  );
};
export default Countries;
