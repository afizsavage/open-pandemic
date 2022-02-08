import { Routes, Route } from 'react-router-dom';

import Details from './components/Details/index';
import Countries from './components/Countries/index';

import './App.css';

const App = () => (
  <>
    <Routes>
      <Route exact path="/" element={<Countries />} />
      <Route path="/details" element={<Details />} />
    </Routes>
  </>
);

export default App;
