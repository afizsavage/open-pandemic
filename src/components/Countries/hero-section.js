import axios from 'axios';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { baseAPI, getCurrentDate } from './api';

const getTotalAndCountryCases = (cases, setcases) => {
  setcases(cases.data.total.today_confirmed);
};

const HeroSection = () => {
  const [cases, setcases] = useState('');
  const [name, setname] = useState('');
  const location = useLocation();
  const state = useSelector((state) => state.countries);

  const home = '/';

  useEffect(() => {
    if (location.pathname === home) {
      axios
        .get(`${baseAPI}${getCurrentDate()}`)
        .then((cases) => getTotalAndCountryCases(cases, setcases));
    } else {
      setcases(state.currentCountry.today_confirmed);
      setname(state.currentCountry.name);
    }
  }, []);

  return (
    <section id="hero" className="b-secondary full-width">
      <div className="full-height flex center-y flex-end">
        <div id="stats">
          <h1 className="white-text">{location.pathname === home ? 'Global' : name}</h1>
          <span className="white-text">{`${cases.toLocaleString()} Cases`}</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
