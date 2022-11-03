import React from 'react';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import { render } from '@testing-library/react';
import Header from '../Header';

it('Header renders correctly', () => {
  const Component = render(
    <Router>
      <Header />
    </Router>,
  );
  expect(Component).toMatchSnapshot();
});
