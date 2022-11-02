import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { render } from '@testing-library/react';
import Header from '../Header';

it('renders correctly', () => {
  const Component = render(
    <Router>
      <Routes>
        <Route element={<Header />} />
      </Routes>
    </Router>,
  );
  expect(Component).toMatchSnapshot();
});
