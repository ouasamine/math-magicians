import { render } from '@testing-library/react';
import React from 'react';
import Home from '../Home';

it('renders correctly', () => {
  const Component = render(<Home />);
  expect(Component).toMatchSnapshot();
});
