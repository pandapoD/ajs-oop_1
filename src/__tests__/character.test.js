import Character from '../js/Character';

test('Проверяем, что имя персонажа является строчным значением', () => {
  expect(() => new Character(1111, 'Bowman')).toThrow();
});

test('Проверка на ошибку, если имя короче 2 символов', () => {
  expect(() => new Character('a', 'Daemon')).toThrow();
});

test('Проверка на ошибку, если имя длиннее 10 символов', () => {
  expect(() => new Character('abcdabcdabc', 'Magician')).toThrow();
});

test('Проверка на ошибку, если персонаж не существует', () => {
  expect(() => new Character('Tom', 'Provodnic')).toThrow();
});
