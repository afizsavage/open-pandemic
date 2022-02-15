import { ImMic } from 'react-icons/im';
import { MdSettings } from 'react-icons/md';
import { useLocation } from 'react-router-dom';

import SearchBar from './search-bar';

const Header = () => {
  const location = useLocation();

  return (
    <header className="b-primary flex white-text center-y space-between">
      {location.pathname === '/' && <SearchBar />}
      <span>Cases</span>
      <span>
        <ImMic className="head-icon" />
        <MdSettings className="head-icon" />
      </span>
    </header>
  );
};

export default Header;
