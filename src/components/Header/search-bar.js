import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const SearchBar = () => {
  const [searchState, setsearchState] = useState({
    valueToSearch: '',
    searchResult: [],
  });
  const countries = useSelector((state) => state.countries);

  const search = async (value) => {
    const filteredCountries = countries.filter(
      (country) => country.name.substring(0, value.length) === value,
    );
    setsearchState({
      ...searchState,
      valueToSearch: value,
      searchResult: filteredCountries,
    });
  };

  return (
    <div>
      <input
        value={searchState.valueToSearch}
        onChange={(e) => search(e.target.value)}
        placeholder="Search country"
      />
    </div>
  );
};

export default SearchBar;
