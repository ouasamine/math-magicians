import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import renderer from 'react-test-renderer';
import Header from '../Header';

it('renders correctly', () => {
  const tree = renderer
    .create(
      <Router>
        <Routes>
          <Route element={<Header />} />
        </Routes>
      </Router>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
