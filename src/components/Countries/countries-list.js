// import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { BsArrowRightCircle } from 'react-icons/bs';

import { createAction, VIEW_COUNTRY_DETAILS } from '../../redux/countries';

const dispatchAction = async (country, dispatch) => {
  dispatch(createAction(VIEW_COUNTRY_DETAILS, country));
};

export const SecondHeading = () => (
  <h2 className="full-width white-text b-third">Stats By Country</h2>
);

const splitArrayIntoTwo = (array) => {
  const arrayToReturn = [];
  const half = Math.ceil(array.length / 2);
  const firstHalf = array.slice(0, half);
  const secondHalf = array.slice(-half);

  arrayToReturn.push(firstHalf, secondHalf);

  return arrayToReturn;
};

const ListOfCountries = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const countriesState = useSelector((state) => state.countries);
  const fetchedArray = splitArrayIntoTwo(countriesState.fetched);
  return (
    <section>
      <SecondHeading />
      <div id="countries" className="flex full-width">
        {
          /* {countriesState.searching === false && countriesState.searchResult.length === 0
          ? countriesState.fetched.map((country) => (
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
          ))
          : countriesState.searchResult.map((country) => (
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
          ))} */
          countriesState.searching === false
          && countriesState.searchResult.length === 0 ? (
            <>
              <ul id="first-list" className="flex column">
                {fetchedArray[0].map((country) => (
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
              <ul id="second-list" className="flex column">
                {fetchedArray[1].map((country) => (
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
            </>
            ) : (
              <>
                <ul>
                  {fetchedArray[0].map((country) => (<li key={country.id}>{country.name }</li>))}
                </ul>
                <ul>
                  <li>hi</li>
                </ul>
              </>
            )
        }
      </div>
    </section>
  );
};

export default ListOfCountries;
