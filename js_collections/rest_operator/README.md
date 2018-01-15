Enumerable.js
Реализуйте метод where, основываясь на следующем интерфейсе:

Функция может принимать любое количество параметров, каждый из которых может быть либо функцией, либо объектом. Для функций должна осуществляться простая фильтрация, для объектов нужно проверять соответствие элемента коллекции значениям по тем же ключам, что и в переданном объекте.

`const cars = [
  { brand: 'bmw', model: 'm5', year: 2014 },
  { brand: 'bmw', model: 'm4', year: 2013 },
  { brand: 'kia', model: 'sorento', year: 2014 },
  { brand: 'kia', model: 'rio', year: 2010 },
  { brand: 'kia', model: 'sportage', year: 2012 },`
];
`coll = new Enumerable(cars);`

```const result = coll
  .where(car => car.brand === 'kia')
  .where(car => car.year > 2011);```

result.toArray();
// [
//   { brand: 'kia', model: 'sorento', year: 2014 },
//   { brand: 'kia', model: 'sportage', year: 2012 },
// ]

const result2 = coll.where({ brand: 'bmw' });
result2.toArray();
// [
//   { brand: 'bmw', model: 'm5', year: 2014 },
//   { brand: 'bmw', model: 'm4', year: 2013 },
// ]

```const result3 = coll.where({ brand: 'kia', model: 'sorento' });
result3.toArray();```
// [
//   { brand: 'kia', model: 'sorento', year: 2014 },
// ]

```const result4 = coll.where({ brand: 'kia' }, car => car.year < 2013);
result4.toArray();```
// [
//   { brand: 'kia', model: 'rio', year: 2010 },
//   { brand: 'kia', model: 'sportage', year: 2012 },
// ]
Подсказки
Извлечь ключи из объекта можно функцией Object.keys.
Проверка на функцию: typeof <value> === 'function'.
Функция every проверяет то, что все элементы коллекции удовлетворяют переданному предикату.