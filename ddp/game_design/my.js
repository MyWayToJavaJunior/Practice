import { cons, car, cdr, toString as pairToString } from 'hexlet-pairs'; // eslint-disable-line
import { cons as consList, l, random, head, reverse, toString as listToString } from 'hexlet-pairs-data'; // eslint-disable-line

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
    let newOrder = order === 1 ? 2 : 1;
    if (newOrder === 2) {
      const card = random(cards);
      const cardName = car(card);
      const damage = cdr(card)();
      const message = `Игрок '${name1}' применил '${cardName}'
  против '${name2}' и нанес урон '${damage}'`;
      const logItem = cons(cons(health1, health2 - damage), message);
      console.log(`logItem ${listToString(logItem)}`);
      return (iter(health1, player1, health2 - damage, player2, newOrder, consList(logItem, log)));
    }
    const card = random(cards);
    const cardName = car(card);
    const damage = cdr(card)();
    const message = `Игрок '${name2}' применил '${cardName}'
  против '${name1}' и нанес урон '${damage}'`;
    const logItem = cons(cons(health1 - damage, health2), message);
    console.log(`logItem ${listToString(logItem)}`);
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
