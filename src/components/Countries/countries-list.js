import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createAction, VIEW_COUNTRY_DETAILS } from '../../redux/countries';

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

const SecondHeading = () => (<h2 className="full-width white-text b-third">Stats By Country</h2>);

const ListOfCountries = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const countriesState = useSelector((state) => state.countries);

  return (
    <section>
      <SecondHeading />
      <ul>
        {countriesState.searching === false && countriesState.searchResult.length === 0
          ? countriesState.fetched.map((country) => (
            <li key={country.id}>
              <a
                href
                onClick={() => fetchCountryDetails(country.name).then((country) => dispatchAction(country, dispatch).then(navigate('/details')))}
              >
                <img src={country.image} alt="Country Flag" />
                <span>{country.name}</span>
              </a>
            </li>
          ))
          : countriesState.searchResult.map((country) => (
            <li key={country.id}>
              <a
                href
                onClick={(e) => fetchCountryDetails(e.target.id).then((country) => dispatchAction(country, dispatch).then(navigate('/details')))}
              >
                {country.name}
              </a>
            </li>
          ))}
      </ul>
    </section>
  );
};

export default ListOfCountries;
