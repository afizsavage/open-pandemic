import { useDispatch } from 'react-redux';
import { BiSearchAlt2 } from 'react-icons/bi';

import { createAction, SEARCH_COUNTRY } from '../../redux/countries';

const SearchBar = () => {
  const dispatch = useDispatch();

  return (
    <div id="wrap" className="relative">
      <input
        onChange={(e) => dispatch(createAction(SEARCH_COUNTRY, e.target.value))}
        placeholder="Search by country"
        className="bg-inherit full-width white-text full-height"
      />
      <BiSearchAlt2 id="search-icon" className="absolute" />
    </div>
  );
};

export default SearchBar;
