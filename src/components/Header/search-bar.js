import { useDispatch } from 'react-redux';
import { BiSearchAlt2 } from 'react-icons/bi';

import { createAction, SEARCH_COUNTRY } from '../../redux/countries';

const capitalizeFirstLetter = async (word) => {
  const capitalized = word.charAt(0).toUpperCase() + word.slice(1);
  return capitalized;
};

const SearchBar = () => {
  const dispatch = useDispatch();

  return (
    <div id="wrap" className="relative">
      <input
        onChange={(e) => capitalizeFirstLetter(e.target.value)
          .then((word) => dispatch(createAction(SEARCH_COUNTRY, word)))}
        placeholder="Search by country"
        className="bg-inherit full-width white-text full-height"
      />
      <BiSearchAlt2 id="search-icon" className="absolute" />
    </div>
  );
};

export default SearchBar;
