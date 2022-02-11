import { useSelector } from 'react-redux';

const CountryDetails = (object) => {
  const { country } = object;
  const des = Object.keys(country)[0];
  return (<div><span>{des}</span></div>);
};

const Details = () => {
  const state = useSelector((state) => state.countries);
  return (<CountryDetails country={state.currentCountry.data.dates['2020-03-22'].countries} />);
};

export default Details;
