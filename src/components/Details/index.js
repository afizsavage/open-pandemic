/* eslint-disable camelcase */
import { useSelector } from 'react-redux';
// import { BsArrowRightCircle } from 'react-icons/bs';

import { SecondHeading } from '../Countries/countries-list';
import HeroSection from '../Countries/hero-section';

const CountryDetails = (object) => {
  const des = Object.values(object)[0];
  const mes = Object.values(des)[0];

  // console.log(mes.id);
  return (
    <>
      <HeroSection />
      <SecondHeading />
      <ul className="details">
        <li className=" relative b-fourth flex space white-text">
          {/* <BsArrowRightCircle className="absolute" /> */}
          <span>Confirmed</span>
          <span>
            {mes.today_confirmed}
          </span>
        </li>
        <li className="relative b-fourth flex space white-text">
          <span>Deaths</span>
          <span>
            {mes.today_deaths}
          </span>
        </li>
        <li className="relative b-fourth flex space white-text">
          <span>Recovered</span>
          <span>
            {mes.today_recovered}
          </span>
        </li>
      </ul>
    </>
  );
};

// const ListDetails = (params) => {
// }

const Details = () => {
  const state = useSelector((state) => state.countries);
  return (
    <CountryDetails country={state.currentCountry} />
  );
};

export default Details;
