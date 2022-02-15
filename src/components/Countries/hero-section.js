import axios from 'axios';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

const HeroSection = () => {
  const [cases, setcases] = useState('');
  const [name, setname] = useState('');
  const location = useLocation();
  const state = useSelector((state) => state.countries);

  const home = '/';

  useEffect(() => {
    if (location.pathname === home) {
      axios
        .get('https://api.covid19tracking.narrativa.com/api/2021-12-11')
        .then((cases) => setcases(cases.data.total.today_confirmed));
    } else {
      const countryName = Object.keys(state.currentCountry)[0];
      const countryData = Object.values(state.currentCountry)[0];
      setcases(countryData.today_confirmed);
      setname(countryName);
    }
  }, []);

  return (
    <section id="hero" className="b-secondary full-width">
      <div className="full-height flex center-y flex-end">
        <div id="stats">
          <h1 className="white-text">{location.pathname === home ? 'Global' : name}</h1>
          <span className="white-text">{`${cases} Cases`}</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
