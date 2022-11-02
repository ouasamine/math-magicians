import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import renderer from 'react-test-renderer';
import Home from '../Home';

it('renders correctly', () => {
  const tree = renderer
    .create(
      <Router>
        <Routes>
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
