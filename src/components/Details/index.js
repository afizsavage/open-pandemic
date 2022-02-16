/* eslint-disable camelcase */
import { useSelector } from 'react-redux';
import { BsArrowRightCircle } from 'react-icons/bs';

import { SecondHeading } from '../Countries/countries-list';
import HeroSection from '../Countries/hero-section';

const CountryDetails = (item) => {
  const { country } = item;
  return (
    <>
      <HeroSection />
      <SecondHeading />
      <ul className="details">
        <li className="relative b-fourth flex space white-text">
          <span>Todays Open Cases</span>
          <span>
            {country.today_new_open_cases.toLocaleString()}
          </span>
          <BsArrowRightCircle className="absolute" />
        </li>
        <li className=" relative b-fourth flex space white-text">
          <span>Todays Confirmed</span>
          <span>
            {country.today_new_confirmed.toLocaleString()}
          </span>
          <BsArrowRightCircle className="absolute" />
        </li>
        <li className=" relative b-fourth flex space white-text">
          <span>Todays Recovered</span>
          <span>
            {country.today_new_recovered.toLocaleString()}
          </span>
          <BsArrowRightCircle className="absolute" />
        </li>
        <li className="relative b-fourth flex space white-text">
          <span>Todays Deaths</span>
          <span>
            {country.today_new_deaths.toLocaleString()}
          </span>
          <BsArrowRightCircle className="absolute" />
        </li>
        <li className="relative b-fourth flex space white-text">
          <span>Total Open Cases</span>
          <span>
            {country.today_deaths.toLocaleString()}
          </span>
          <BsArrowRightCircle className="absolute" />
        </li>
        <li className=" relative b-fourth flex space white-text">
          <span>Total Confirmed</span>
          <span>
            {country.today_confirmed.toLocaleString()}
          </span>
          <BsArrowRightCircle className="absolute" />
        </li>
        <li className="relative b-fourth flex space white-text">
          <span>Total Deaths</span>
          <span>
            {country.today_deaths.toLocaleString()}
          </span>
          <BsArrowRightCircle className="absolute" />
        </li>
        <li className="relative b-fourth flex space white-text">
          <span>Total Recovered</span>
          <span>
            {country.today_recovered.toLocaleString()}
          </span>
          <BsArrowRightCircle className="absolute" />
        </li>
      </ul>
    </>
  );
};

const Details = () => {
  const state = useSelector((state) => state.countries);
  return (
    <CountryDetails country={state.currentCountry} />
  );
};

export default Details;
