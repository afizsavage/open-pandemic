import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { BsArrowRightCircle } from 'react-icons/bs';

import { createAction, VIEW_COUNTRY_DETAILS } from '../../redux/countries';
// import { getCurrentDate } from './api';
// import { baseAPI, getCurrentDate } from './api';

const dispatchAction = async (country, dispatch) => {
  dispatch(createAction(VIEW_COUNTRY_DETAILS, country));
};

const fetchCountryDetails = async (name) => {
  const param = name.toLowerCase();
  const data = axios.get(
    `https://api.covid19tracking.narrativa.com/api/2020-03-22/country/${param}`,
  );
  return data;
};

export const SecondHeading = () => (<h2 className="full-width white-text b-third">Stats By Country</h2>);

const ListOfCountries = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const countriesState = useSelector((state) => state.countries);

  return (
    <section>
      <SecondHeading />
      <ul id="countries" className="flex full-width">
        {countriesState.searching === false && countriesState.searchResult.length === 0
          ? countriesState.fetched.map((country) => (
            <li className="relative b-fourth" key={country.id}>
              <BsArrowRightCircle className="absolute white-text" />
              <div
                role="button"
                tabIndex={0}
                onKeyDown={() => fetchCountryDetails(country.name).then((country) => dispatchAction(country, dispatch).then(navigate('/details')))}
                onClick={() => fetchCountryDetails(country.name).then((country) => dispatchAction(country, dispatch).then(navigate('/details')))}
              >
                <div className="top flex center-x">
                  <img className="country-image" src={country.image} alt="Country Flag" />
                </div>
                <div className="bottom text-right white-text flex column">
                  <span>{country.name}</span>
                  <span>{country.today_confirmed.toLocaleString()}</span>
                </div>
              </div>
            </li>
          ))
          : countriesState.searchResult.map((country) => (
            <li className="relative b-fourth" key={country.id}>
              <BsArrowRightCircle className="absolute white-text" />
              <div
                role="button"
                tabIndex={0}
                onKeyDown={() => fetchCountryDetails(country.name).then((country) => dispatchAction(country, dispatch).then(navigate('/details')))}
                onClick={() => fetchCountryDetails(country.name).then((country) => dispatchAction(country, dispatch).then(navigate('/details')))}
              >
                <div className="top flex center-x">
                  <img className="country-image" src={country.image} alt="Country Flag" />
                </div>
                <div className="bottom text-right flex column">
                  <span>{country.name}</span>
                  <span>{country.today_confirmed.toLocaleString()}</span>
                </div>
              </div>
            </li>
          ))}
      </ul>
    </section>
  );
};

export default ListOfCountries;
