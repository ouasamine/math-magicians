import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import renderer from 'react-test-renderer';
import Quote from '../Quote';

it('renders correctly', () => {
  const tree = renderer
    .create(
      <Router>
        <Routes>
          <Route path="/quote" element={<Quote />} />
        </Routes>
      </Router>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
