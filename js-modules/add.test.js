const add = require('./add');

test('can add positive numbers', () => {
  expect(add(1, 2)).toBe(3);
  expect(add(11, 2)).toBe(13);
});

test('can concat strings', () => {
  expect(add('hola ', 'mundo')).toBe('hola mundo');
  expect(add('hola ', 'gente')).toBe('hola gente');
});
