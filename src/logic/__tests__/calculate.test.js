import calculate from '../calculate';

const obj = {
  total: 10,
  next: 5,
  operation: '+',
};
const obj1 = {
  total: 10,
  next: 5,
  operation: '+',
};
test('Should return an object', () => {
  expect(calculate(obj, '+')).toEqual({ total: '15', operation: '+', next: null });
  expect(calculate(obj, 'AC')).toEqual({ total: null, operation: null, next: null });
  expect(calculate(obj1, '=')).toEqual({ total: '15', operation: null, next: null });
  expect(calculate({
    total: 10,
    next: null,
    operation: null,
  }, '='))
    .toEqual({});
});
