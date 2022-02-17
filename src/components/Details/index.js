import { useSelector } from 'react-redux';
import { BsArrowRightCircle } from 'react-icons/bs';

import { SecondHeading } from '../Countries/countries-list';
import HeroSection from '../Countries/hero-section';

const ListItem = (item) => {
  const { object } = item;

  return (
    <li className="relative b-fourth flex space white-text">
      <span>{object.category}</span>
      <span>
        {object.figure}
      </span>
      <BsArrowRightCircle className="absolute" />
    </li>
  );
};

const CountryDetails = (item) => {
  const { country } = item;
  return (
    <>
      <HeroSection />
      <SecondHeading />
      <ul className="details b-fourth">
        <ListItem object={{ category: "Today's Open Cases", figure: country.today_new_open_cases }} />
        <ListItem object={{ category: "Today's Confirmed", figure: country.today_new_confirmed.toLocaleString() }} />
        <ListItem object={{ category: "Today's Recovered", figure: country.today_new_recovered.toLocaleString() }} />
        <ListItem object={{ category: "Today's Deaths", figure: country.today_new_deaths.toLocaleString() }} />
        <ListItem object={{ category: 'Total Open Cases', figure: country.today_deaths.toLocaleString() }} />
        <ListItem object={{ category: 'Total Confirmed', figure: country.today_confirmed.toLocaleString() }} />
        <ListItem object={{ category: 'Total Deaths', figure: country.today_deaths.toLocaleString() }} />
        <ListItem object={{ category: 'Total Recovered', figure: country.today_recovered.toLocaleString() }} />
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
