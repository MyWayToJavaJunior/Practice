import { cons, car, cdr } from 'hexlet-pairs';
import { cons as consList, l, random, head, reverse } from 'hexlet-pairs-data';

// BEGIN
export const run1 = (player1, player2, cards) => {
  const iter = (health1, name1, health2, name2, order, log) => {
    if (health1 <= 0) {
      return consList(cons(car(head(log)), `${name1} был убит`), log);
    }
    const card = random(cards);
    const cardName = car(card);
    const damage = cdr(card)();
    const newHealth = health2 - damage;

    const message = `Игрок '${name1}' применил '${cardName}'
    против '${name2}' и нанес урон '${damage}'`;
    let stats;
    if (order === 1) {
      stats = cons(cons(health1, newHealth), message);
    } else if (order === 2) {
      stats = cons(cons(newHealth, health1), message);
    }
    const newLog = consList(stats, log);
    return iter(newHealth, name2, health1, name1, order === 1 ? 2 : 1, newLog);
  };
  const startHealth = 10;
  const logItem = cons(cons(startHealth, startHealth), 'Начинаем бой!');
  return reverse(iter(startHealth, player1, startHealth, player2, 1, l(logItem)));
};
// END
const run = (player1, player2, cards) => {
  const iter = (health1, name1, health2, name2, order, log) => {
    // BEGIN (write your solution here)
    if (health2 <= 0) {
      const logItem = cons(cons(health1, health2), `${name2} был убит`);
      return (consList(logItem, log));
    } else if (health1 <= 0) {
      const logItem = cons(cons(health1, health2), `${name1} был убит`);
      return (consList(logItem, log));
    }
    const newOrder = order === 1 ? 2 : 1;
    if (newOrder === 2) {
      const card = random(cards);
      const cardName = car(card);
      const damage = cdr(card)();
      const message = `Игрок '${name1}' применил '${cardName}'
    против '${name2}' и нанес урон '${damage}'`;
      const logItem = cons(cons(health1, health2 - damage), message);
      return (iter(health1, player1, health2 - damage, player2, newOrder, consList(logItem, log)));
    }
    const card = random(cards);
    const cardName = car(card);
    const damage = cdr(card)();
    const message = `Игрок '${name2}' применил '${cardName}'
    против '${name1}' и нанес урон '${damage}'`;
    const logItem = cons(cons(health1 - damage, health2), message);
    return (iter(health1 - damage, player1, health2, player2, newOrder, consList(logItem, log)));
    // END
  };
  const startHealth = 10;
  const logItem = cons(cons(startHealth, startHealth), 'Начинаем бой!');
  return reverse(iter(startHealth, player1, startHealth, player2, 1, l(logItem)));
};
export default cards =>
  (name1, name2) =>
    run(name1, name2, cards);
