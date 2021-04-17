const hello = require('./hello');

test('Строка, которую возвращает функция hello должна быть равна Hello world!', () => {
  expect(hello()).toBe("Hello world!");
});
