import operate from '../operate';

test('Testing Operate function', () => {
  expect(operate(1, 4, '+')).toBe('5');
  expect(operate(0, 4, '+')).toBe('4');
  expect(operate(0, 0, '+')).toBe('0');
  expect(operate(10, 4, '-')).toBe('6');
  expect(operate(5, 2, '÷')).toBe('2.5');
  expect(operate(5, 2, 'x')).toBe('10');
});
