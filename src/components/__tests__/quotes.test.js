import React from 'react';
import { render } from '@testing-library/react';
import Quote from '../Quote';

it('Quote renders correctly', () => {
  const Component = render(<Quote />);
  expect(Component).toMatchSnapshot();
});
