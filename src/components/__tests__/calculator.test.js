import React from 'react';
import { render } from '@testing-library/react';
import Calculator from '../calculator';

it('renders correctly', () => {
  const Component = render(<Calculator />);
  expect(Component).toMatchSnapshot();
});
