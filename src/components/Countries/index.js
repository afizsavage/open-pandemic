import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

import { ADD_COUNTRY, createAction } from '../../redux/countries/index';
import ListOfCountries from './countries-list';
import HeroSection from './hero-section';
import imageList from './images-list';

const populateReduxStore = (countries, dispatch) => {
  let img;

  countries.forEach((country) => {
    img = imageList.filter((image) => image === `/static/media/${country.id}.ca0b588292929d82b58f13a83517aee9.svg`);
    dispatch(createAction(ADD_COUNTRY, { ...country, image: img[0] }));
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
    <main>
      <HeroSection />
      <ListOfCountries />
    </main>
  );
};
export default Countries;
