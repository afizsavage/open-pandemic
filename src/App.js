import { Routes, Route } from 'react-router-dom';

import Details from './components/Details/index';
import Countries from './components/Countries/index';

import './App.css';
import Header from './components/Header';

const App = () => (
  <>
    <Header />
    <Routes>
      <Route exact path="/" element={<Countries />} />
      <Route exact path="/details/:id" element={<Details />} />
    </Routes>
  </>
);

export default App;
