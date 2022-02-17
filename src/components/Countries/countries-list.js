import { useSelector } from 'react-redux';

import ListComponent from './list-component';

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
  const countriesState = useSelector((state) => state.countries);
  const fetchedArray = splitArrayIntoTwo(countriesState.fetched);
  const searchResultArray = splitArrayIntoTwo(countriesState.searchResult);
  return (
    <section>
      <SecondHeading />
      <div id="countries" className="flex full-width">
        {
          countriesState.searching === false
          && countriesState.searchResult.length === 0 ? (
            <>
              <ListComponent array={{ array: fetchedArray[0], id: 'first-list' }} />
              <ListComponent array={{ array: fetchedArray[1], id: 'second-list' }} />
            </>
            ) : (
              <>
                <ListComponent array={{ array: searchResultArray[0], id: 'first-list' }} />
                <ListComponent array={{ array: searchResultArray[1], id: 'second-list' }} />
              </>
            )
        }
      </div>
    </section>
  );
};

export default ListOfCountries;
