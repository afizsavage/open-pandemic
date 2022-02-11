import axios from 'axios';
import { useEffect, useState } from 'react';

const HeroSection = () => {
  const [cases, setcases] = useState('');

  useEffect(() => {
    axios
      .get('https://api.covid19tracking.narrativa.com/api/2021-12-11')
      .then((cases) => setcases(cases.data.total.today_confirmed));
  }, []);

  return (
    <section id="hero" className="b-secondary full-width">
      <div className="full-height flex center-y flex-end">
        <div id="stats">
          <h1 className="white-text">Global</h1>
          <span className="white-text">{`${cases} Cases`}</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
