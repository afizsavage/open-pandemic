import { useSelector } from 'react-redux';

const ListOfCountries = () => {
  const countriesState = useSelector((state) => state.countries);

  return (
    <div>
      <ul>
        {countriesState.searching === false && countriesState.searchResult.length === 0
          ? countriesState.fetched.map((country) => (
            <li key={country.id}>{country.name}</li>
          )) : countriesState.searchResult.map((country) => (
            <li key={country.id}>{country.name}</li>
          ))}
      </ul>
    </div>
  );
};

export default ListOfCountries;
