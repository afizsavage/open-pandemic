import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from '../redux/configure-store';
import { CountryDetails } from '../components/Details';

describe('Test counntry details list compoent', () => {
  it('Renders as expected', () => {
    const testCountry = {
      today_new_open_cases: 7,
      today_new_confirmed: 7,
      today_new_recovered: 9,
      today_new_deaths: 7,
      today_deaths: 5,
      today_open_cases: 3,
      today_confirmed: 87,
      today_recovered: 76,

    };

    const component = renderer.create(
      <Provider store={store}>
        <Router><CountryDetails country={testCountry} /></Router>
      </Provider>,
    ).toJSON();
    expect(component).toMatchSnapshot();
  });
});
