import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { BsArrowRightCircle } from 'react-icons/bs';

import { createAction, VIEW_COUNTRY_DETAILS } from '../../redux/countries';

const dispatchAction = async (country, dispatch) => {
  dispatch(createAction(VIEW_COUNTRY_DETAILS, country));
};

const ListComponent = (list) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { array } = list;
  return (
    <ul id={array.id} className="flex column">
      {array.array.map((country) => (
        <li className="relative b-fourth" key={country.id}>
          <BsArrowRightCircle className="absolute white-text" />
          <div
            role="button"
            tabIndex={0}
            onKeyDown={() => dispatchAction(country, dispatch).then(navigate('/details'))}
            onClick={() => dispatchAction(country, dispatch).then(navigate('/details'))}
          >
            <div className="top flex center-x">
              <img className="country-image" src={country.image} alt="Country Flag" />
            </div>
            <div className="bottom text-right white-text flex column">
              <span className="count-name">{country.name}</span>
              <span>{country.today_confirmed.toLocaleString()}</span>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ListComponent;
