import { Routes, Route } from 'react-router-dom';

import Details from './components/Details/index';
import Home from './components/Home/index';

import './App.css';

const App = () => (
  <>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/details" element={<Details />} />
    </Routes>
  </>
);

export default App;
