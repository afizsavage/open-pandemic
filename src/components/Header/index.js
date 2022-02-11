import { ImMic } from 'react-icons/im';
import { MdSettings } from 'react-icons/md';

import SearchBar from './search-bar';

const Header = () => (
  <header className="b-primary flex white-text center-y space-between">
    <SearchBar />
    <span>Cases</span>
    <span>
      <ImMic className="head-icon" />
      <MdSettings className="head-icon" />
    </span>
  </header>
);

export default Header;
