'use strict';

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// Task 1
// const players1 = game.players[0];
// const players2 = game.players[1];

const [players1, players2] = game.players;

console.log(players1);
console.log(players2);

// Task 2
const [gk, ...fieldplayers] = players1;
console.log(gk, fieldplayers);

// Task 3
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// Task 4
const players1Final = [...players1, 'Thiago', 'Countinho', 'Perisic'];
console.log(players1Final);

// Task 5
// const { team1: team1, x: draw, team2: team2 } = game.odds;
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

// Task 6
const printGoals = function (...players) {
  console.log(...players, players.length);
};

printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals(...game.scored);

// Task 7
let sortable = [];
for (var odd in game.odds) {
  sortable.push([odd, game.odds[odd]]);
}

sortable.sort(function (a, b) {
  return a[1] - b[1];
});

console.log(sortable[0][0]);

team1 < team2 && console.log('aaa');
