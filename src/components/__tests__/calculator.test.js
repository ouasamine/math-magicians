import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Calculator from '../calculator';

it('Calculator renders correctly', () => {
  const Component = render(<Calculator />);
  expect(Component).toMatchSnapshot();
});

describe('User interaction tests', () => {
  it('Pressing 1 calculator button', () => {
    render(<Calculator />);
    const resultPreview = screen.getByTestId('resultPreview');
    const button = screen.getByRole('button', { name: '2' });
    fireEvent.click(button);
    expect(resultPreview.innerHTML).toBe('2');
  });

  it('Pressing 2 calculator buttons', () => {
    render(<Calculator />);
    const resultPreview = screen.getByTestId('resultPreview');
    const button1 = screen.getByRole('button', { name: '8' });
    const button2 = screen.getByRole('button', { name: '-' });
    fireEvent.click(button1);
    fireEvent.click(button2);
    expect(resultPreview.innerHTML).toBe('8-');
  });

  it('Pressing 3 calculator buttons', () => {
    render(<Calculator />);
    const resultPreview = screen.getByTestId('resultPreview');
    const button1 = screen.getByRole('button', { name: '5' });
    const button2 = screen.getByRole('button', { name: 'x' });
    const button3 = screen.getByRole('button', { name: '5' });
    fireEvent.click(button1);
    fireEvent.click(button2);
    fireEvent.click(button3);
    expect(resultPreview.innerHTML).toBe('5x5');
  });

  it('Complete calculation operation', () => {
    render(<Calculator />);
    const resultPreview = screen.getByTestId('resultPreview');
    const button1 = screen.getByRole('button', { name: '5' });
    const button2 = screen.getByRole('button', { name: '+' });
    const button3 = screen.getByRole('button', { name: '5' });
    const button4 = screen.getByRole('button', { name: '=' });
    fireEvent.click(button1);
    fireEvent.click(button2);
    fireEvent.click(button3);
    fireEvent.click(button4);
    expect(resultPreview.innerHTML).toBe('10');
  });
});
