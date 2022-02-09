import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const ListOfCountries = () => {
  const navigate = useNavigate();
  const countriesState = useSelector((state) => state.countries);

  return (
    <div>
      <ul>
        {countriesState.searching === false && countriesState.searchResult.length === 0
          ? countriesState.fetched.map((country) => (
            <li key={country.id}><a href onClick={() => navigate('/details')}>{country.name}</a></li>

          )) : countriesState.searchResult.map((country) => (
            <li key={country.id}><a href onClick={() => navigate('/details')}>{country.name}</a></li>
          ))}
      </ul>
    </div>
  );
};

export default ListOfCountries;
