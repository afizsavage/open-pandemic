import React, { useSelector } from 'react-redux';

const ListOfCountries = () => {
  const countries = useSelector((state) => state.countries);

  return (
    <div>
      <ul>
        {countries.map((country) => (
          <li key={country.id}>{country.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListOfCountries;
