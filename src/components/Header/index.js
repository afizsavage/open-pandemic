import { ImMic } from 'react-icons/im';
import { MdSettings } from 'react-icons/md';
import { useLocation, useNavigate } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';

import SearchBar from './search-bar';

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <header className="b-primary flex white-text center-y space-between">
      {location.pathname === '/' && <SearchBar />}
      {location.pathname.includes('/details') && <BiArrowBack onClick={() => navigate('/')} />}
      <span className="head-text">{location.pathname === '/' ? 'Cases' : 'Cases by country'}</span>
      <span>
        <ImMic className="head-icon" />
        <MdSettings className="head-icon" />
      </span>
    </header>
  );
};

export default Header;
