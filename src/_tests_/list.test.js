import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import ListComponent from '../components/Countries/list-component';
import store from '../redux/configure-store';

describe('Test unordered list compoent', () => {
  it('Renders as expected', () => {
    const testObject = { id: 'twenty', today_confirmed: 234, image: '../images/afghanistan.svg' };
    const testProps = { array: [testObject], id: 'first-list' };

    const component = renderer.create(
      <Provider store={store}>
        <Router><ListComponent array={testProps} /></Router>
      </Provider>,
    ).toJSON();
    expect(component).toMatchSnapshot();
  });
});
