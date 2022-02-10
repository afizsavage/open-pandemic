import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createAction, VIEW_COUNTRY_DETAILS } from '../../redux/countries';

const dispatchAction = async (country, dispatch) => {
  dispatch(createAction(VIEW_COUNTRY_DETAILS, country));
};

const fetchCountryDetails = async () => {
  const data = axios.get(
    'https://api.covid19tracking.narrativa.com/api/2020-03-22/country/cuba',
  );
  return data;
};

const ListOfCountries = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const countriesState = useSelector((state) => state.countries);

  return (
    <div>
      <ul>
        {countriesState.searching === false && countriesState.searchResult.length === 0
          ? countriesState.fetched.map((country) => (
            <li key={country.id}>
              <a
                href
                onClick={() => fetchCountryDetails().then((country) => dispatchAction(country, dispatch).then(navigate('/details')))}
              >
                {country.name}
              </a>
            </li>
          ))
          : countriesState.searchResult.map((country) => (
            <li key={country.id}>
              <a
                href
                onClick={() => fetchCountryDetails().then((country) => dispatchAction(country, dispatch).then(navigate('/details')))}
              >
                {country.name}
              </a>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default ListOfCountries;
