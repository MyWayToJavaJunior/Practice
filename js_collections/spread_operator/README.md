`objectify.js`
Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход список (в виде обычного js массива с объектами внутри) и функцию селектор, выбирающую из каждого объекта определенное значение, а возвращает объект в котором свойство это результат применения функции селектора к каждому объекту в массиве, а значение это сам объект.

Обратите внимание на то что эта функция высшего порядка универсальна и работает с любыми наборами данных.

`const cars = [`
  `{ brand: 'bmw', model: 'm3', year: 2013 },`
  `{ brand: 'opel', model: 'astra', year: 2014 },`
  `{ brand: 'honda', model: 'accent', year: 2014 },`
  `{ brand: 'kia', model: 'rio', year: 2013 },`
  `{ brand: 'kia', model: 'sportage', year: 2015 },`
`];`

`console.log(objectify(cars, car => car.model));`

`// {`
`//   accent: { brand: 'honda', model: 'accent', year: 2014 },`
`//   astra: { brand: 'opel', model: 'astra', year: 2014 },`
`//   m3: { brand: 'bmw', model: 'm3', year: 2013 },`
`//   rio: { brand: 'kia', model: 'rio', year: 2013 },`
`//   sportage: { brand: 'kia', model: 'sportage', year: 2015 },`
`// };`
Подсказки
`{ ...acc, [propertyName]: value }`
Решите эту задачу используя `reduce`