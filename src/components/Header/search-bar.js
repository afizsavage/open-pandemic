import { useDispatch } from 'react-redux';
import { createAction, SEARCH_COUNTRY } from '../../redux/countries';

const SearchBar = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <input
        onChange={(e) => dispatch(createAction(SEARCH_COUNTRY, e.target.value))}
        placeholder="Search country"
      />
    </div>
  );
};

export default SearchBar;
