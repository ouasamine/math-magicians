import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import renderer from 'react-test-renderer';
import Calculator from '../calculator';

it('renders correctly', () => {
  const tree = renderer
    .create(
      <Router>
        <Routes>
          <Route path="/calculator" element={<Calculator />} />
        </Routes>
      </Router>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
