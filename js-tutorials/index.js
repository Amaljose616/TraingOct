// let n = 10;
// for (let i = 0; i <= (n - 1) / 3; i++) {
//   console.log(3 * i + 1);
// }
// printForcast(data1)

'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 20;
// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);
// let secretNumber = Math.trunc(Math.random() * 20) + 1;
// let score = 20;
// let highScore = 0;

// document.querySelector('.check').addEventListener('click', function () {
//   console.log(document.querySelector('.guess').value);
//   document.querySelector('.message').textContent = 'Correct Number';

//   const guess = Number(document.querySelector('.guess').value);
//   console.log(guess);

//   if (!guess) {
//     document.querySelector('.message').textContent = 'No number!';
//   } else if (guess === secretNumber) {
//     document.querySelector('.message').textContent = 'Correct Number!';
//     document.querySelector('.number').textContent = secretNumber;

//     document.querySelector('body').style.backgroundColor = '#60b347';
//     document.querySelector('.number').style.width = '30rem';

//     if (score > highScore) {
//       highScore = score;
//       document.querySelector('.highscore').textContent = highScore;
//     }
//   } else if (guess > secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = 'Too high';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = 'You lose the game!';
//       document.querySelector('.score').textContent = 0;
//     }
//   } else if (guess < secretNumber) {
//     document.querySelector('.message').textContent = 'Too Low';
//     score--;
//     document.querySelector('.score').textContent = 0;
//   }
// });

// document.querySelector('.again').addEventListener('click', function () {
//   (score = 20), (secretNumber = Math.trunc(Math.random() * 20) + 1);
//   document.querySelector('.message').textContent = 'Start Guessing...';
//   document.querySelector('.score').textContent = score;
//   document.querySelector('.number').textContent = '?';
//   document.querySelector('.guess').value = '';
//   document.querySelector('body').style.backgroundColor = '#222';
//   document.querySelector('.number').style.width = '15rem';
// });

// let n = 91;

// if ((n - 1) % 3 === 0) {
//   console.log('number is in the form of 3n+1');
// } else {
//   console.log('number is not in the form of 3n+1');
//

'use strict';

// const modal = document.querySelector('.modal');
// const overlay = document.querySelector('.overlay');
// const btnCloseModal = document.querySelector('.close-modal');
// const btnsOpenModal = document.querySelectorAll('.show-modal');
// console.log(btnsOpenModal);

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', function () {
//     console.log('Button clicked');
//     modal.classList.remove('hidden');
//     overlay.classList.remove('hidden');
//   });

//   const closeModal = function(){
//     modal.classList.add('hidden');
//   overlay.classList.add('hidden');
//   }
//   btnCloseModal.addEventListener('click', closeModal)
//   overlay.addEventListener('click', closeModal)

//   document.addEventListener('keydown', function(){
//     console.log("A key was pressed")
//   })
// btnCloseModal.addEventListener('click', function () {
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
// });
// overlay.addEventListener('click', function () {
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');});

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListner('click', openModal);

// btnCloseModal.addEventListner('click', closeModal);
// overlay.addEventListner('click', closeModal);

// document.addEventListener('keydown', function () {
//   console.log('A key was pressed');
// });
// selecting elements
// const player0El = document.querySelector('.player--0');
// const player1El = document.querySelector('.player--1');
// const score0El = document.querySelector('#score--0');
// const score1El = document.getElementById('score--1');
// const diceEl = document.querySelector('.dice');
// const btnNew = document.querySelector('.btn--new');
// const btnRoll = document.querySelector('.btn--roll');
// const btnHold = document.querySelector('.btn--hold');
// const current0El = document.getElementById('current--0');
// const current1El = document.getElementById('current--1');
// // Starting conditions
// score0El.textContent = 0;
// score1El.textContent = 0;

// let scores, currentScore, activePlayer, playing;

// const init = function () {
//   scores = [0, 0];
//   currentScore = 0;
//   activePlayer = 0;
//   playing = true;

//   score0El.textContent = 0;
//   score1El.textContent = 0;
//   current0El.textContent = 0;
//   current1El.textContent = 0;

//   diceEl.classList.add('hidden');
//   player0El.classList.remove('player--winner');
//   player1El.classList.remove('player--winner');
//   player0El.classList.add('player--active');
//   player1El.classList.remove('player--active');
// };
// init();

// const switchPlayer = function () {
//   document.getElementById(`current--${activePlayer}`).textContent = 0;
//   currentScore = 0;
//   activePlayer = activePlayer == 0 ? 1 : 0;
//   player0El.classList.toggle('player--active');
//   player1El.classList.toggle('player--active');
// };

// // Rolling dice functionality
// btnRoll.addEventListener('click', function () {
//   if (playing) {
//     const dice = Math.trunc(Math.random() * 6) + 1;
//     console.log(dice);
//     diceEl.classList.remove('hidden');
//     diceEl.src = `dice-${dice}.png`;

//     if (dice !== 1) {
//       currentScore += dice;
//       document.getElementById(`current--${activePlayer}`).textContent =
//         currentScore;
//       current0El.textContent = currentScore;
//     } else {
//       switchPlayer();
//     }
//   }
// });
// btnHold.addEventListener('click', function () {
//   if (playing) {
//     scores[activePlayer] += currentScore;
//     document.getElementById(`score--${activePlayer}`).textContent =
//       scores[activePlayer];
//     if (scores[activePlayer] >= 20) {
//       playing = false;
//       document
//         .querySelector(`.player--${activePlayer}`)
//         .classList.add('player--winner');
//       document
//         .querySelector(`.player--${activePlayer}`)
//         .classList.remove('player--ative');
//     } else {
//       switchPlayer();
//     }
//   }
// });

// btnNew.addEventListener('click', init());

// let n = 5;

// if ((n = 5)) {
//   let amal = 35;
//   console.log(amal);
// } else {
//   let achi = 25;
//   console.log(achi);
// }

// console.log(amal);

// const myName = 'jonas';

// function first() {
//   const age = 30;

//   if (age >= 30) {
//     const decade = 3;
//     var millenial = true;
//   }

//   function second() {
//     const job = 'Teacher';
//     console.log(`${myName} is a ${age}-old ${job}`);
//   }
//   second();
// }
// first();

// const a = 'jonas';
// first();

// function first() {
//   const b = 'hello!';
//   second();

//   function second() {
//     const c = 'Hi!';
//     third();
//   }
// }
// function third() {
//   const d = 'Hey!';
//   console.log(d + c + b + a);
// }

'use strict';

// function calcAge(birthYear) {
//   const age = 2037 - birthYear;
//   function printAge() {
//     const output = `${firstName},you are ${age}, born in ${birthYear}`;
//     console.log(output);
//     if (birthYear >= 1981 && birthYear <= 1996) {
//       var millenial = true;
//       const firstName = 'steven';
//       const str = `oh, and you're a millenial, ${firstName}`;
//       console.log(str);
//       function add(a, b) {
//         return a + b;
//       }
//     }
//     console.log(millenial);
//   }
//   printAge();
//   return age;
// }
// const firstName = 'jonas';
// calcAge(1991);

// const myName = 'jonas';

// if (myName === 'jonas') {
//   console.log(`jonas is a ${job}`);
//   const age = 2037 - 1989;
//   console.log(age);
//   const job = `teacher`;
//   console.log(x);
// }

//

// console.log(addDec1(5, 8));
// console.log(addExpr(5, 8));
// console.log(addArrow(5, 8));

// function addDec1(a, b) {
//   return a + b;
// }
// const addExpr = function (a, b) {
//   return a + b;
// };
// const addArrow = (a, b) => a + b;
// if (!numProducts) deleteShoppingCart();
// var numProducts = 10;
// function deleteShoppingCart() {
//   console.log(`All products deleted!`);
// }

// var x =1
// let y = 2
// const z = 3

// console.log(x === window.x)

// console.log(this);

// console.log(this);

// const calcAge = function (birthYear) {
//   console.log(2037 - birthYear);
//   console.log(this);
// };
// calcAge(1991);

// const calcAgeArrow = birthYear => {
//   console.log(2037 - birthYear);
//   console.log(this);
// };
// calcAgeArrow(1980);

// const jonas = {
//   year: 1991, calcAge: function(){
//     console.log(this)
//     console.log(2037-this.year)
//   }
// }
// jonas.calcAge()

// const matiilda = {
//   year: 2017
// }

// matiilda.calcAge = jonas.calcAge
// matiilda.calcAge()

// const f = jonas.calcAge

// f();
// var firstName = 'Matilda'
// const jonas = {
//   firstname: 'jonas',
//   year: 1991,
//   calcAge: function(){
// console.log(this)
// console.log(2037-this.year)
//  const self = this
//   const isMillenial =  function(){
//     console.log(self)
//     console.log(self.year >=  1981 && this.year <= 1996)
//     // console.log(this.year >=  1981 && this.year <= 1996)
//   }
//     const isMillenial = () => {
//       console.log(this)
//       console.log(this.year >= 1981 && this.YEAR <= 1996)
//     }
//       isMillenial()
//     },
//     greet: () => {
//       console.log(this);
//     console.log(`hey ${this.firstName}`);
//   },
// }
//   jonas.greet()
//   jonas.calcAge()

//   const addExpr = function(a,b){
//     console.log(arguments)
//     return a + b
//   }
//   addExpr(2,3)
//   var addArrow = (a,b) => a + b

// let age = 30;
// let oldAge = age;
// age = 31;
// console.log(age);
// console.log(oldAge);

// const me = {
//   name: 'jonas',
//   age: 30,
// };
// const friend = me;
// friend.age = 27;
// console.log('Friend:', friend);
// console.log('Me', me);

// let lastName = 'williams';
// let oldLastName = lastName;
// lastName = 'Davis';
// console.log(lastName, oldLastName);

// const jessica = {
//   firstName: 'Jessica',
//   lastName: 'williams',
//   age: 27,
// };
// const marriedJessica = jessica;
// marriedJessica.lastName = 'Davis';
// console.log('Before marriage:', jessica);
// console.log('After marriage:', marriedJessica);

// const jessica2 = {
//   firstName : 'Jessica',
//   lastName : 'Williams',
//   age : 27,
//   family:['Alice',`Bob`]
// }
// const jessicaCopy =Object.assign({},jessica2)
// jessicaCopy.lastName = `Davis`

// jessicaCopy.family.push(`mary`)
// jessicaCopy.family.push(`John`)

// console.log(`Before marriage:`,jessica2)
// console.log(`After marriage:`,jessicaCopy)

//-----------------------SLACK-------------------------

// 'use strict';

// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   startMenu: ['Focaccia', 'Bruscchetta', 'Garlic Bread', 'Caprese salad'],
//   mainmenu: ['pizza', 'Pasta', 'Risotto'],
//   const =  openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0,
//       close: 24,
//     },
//   },
//   order: function (starterIndex = 1, mainIndex = 0, time = '20:00', address) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },
//   orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
//     console.log(
//       `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to to ${address} at ${time}`
//     );
//   },
// };
// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Via del Sole, 21',
//   mainIndex: 2,
//   starterIndex: 2,
// });
// restaurant.orderDelivery({
//   address: 'Via del sole,21',
//   starterIndex: 1,
// });

// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);
// orderPastha:function(ing1,ing2,ing3)
// const {{}
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// const { menu = [], starterMenu: starters = [1] } = restaurant;
// console.log(menu, starters);

// let a = 111;
// let b = 999;
// const abj = { a: 23, b: 7, c: 14 }(({ a, b } = obj));
// console.log(a, b);

// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);

// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

// const newArr = [1, 2, ...arr];
// console.log(newArr);

// const newMenu =[...restaurant.mainMenu, 'Gnocci']
// console.log(newMenu)

// const someNew = [...badNewArr, ...newArr];
// console.log(someNew);

// const str = 'Jonas';
// const letters = [...str, '', 's.'];
// console.log(letters);
// console.log(...str);

// const ingredients = [
//   prompt("Let's make pasta! ingredient 1?"),
//   prompt("Let's make pasta! ingredient 2?"),
//   prompt("Let's make pasta! ingredient 3?"),
// ];
// console.log(ingredients);

// restaurant.orderPasta(ingredients[0],ingredients[1],ingredients[2])
// restaurant.orderPasta(...ingredients)
// // console.log(`${...str} Schmedtmann`)
// const newRestuarant = { foundedIn : 1998, ... restaurant, founder:'Guiseppe'}
// console.log(newRestuarant)

// const restaurantCopy = {...restaurant}
// restaurantCopy.name = 'Ristorante Roma'
// console.log(restaurantCopy.name)

// const Arr = [1, 2, ...[3, 4]];
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

// const [pizza, , , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, otherFood);

// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

// orderPizza.function(mainIngredient,...otherIngrediennts) {
//   console.log(mainIngredient)
//   restaurant.oderPizza('mushroom',)
// }
// const menu = [...restaurant.startMenu, ...restaurant.mainMenu]

// for (const item of menu) console.log(item)
// for (const item of menu.entries()){
//   console.log(`${item[0] + 1}: ${item[1]}`)
// }

// console.log([...menu.entries()])
// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) sum += numbers[i];
//   console.log(sum);
// };

// add(2, 3);
// add(5, 3, 7, 2);
// add(8, 2, 5, 3, 2, 1, 4);

// const x = [23, 5, 7];
// add(...x);

// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;
// console.log(x, y, z);

// let [main, secondary] = restaurant.categories;
// console.log(main, secondary);

// const temp = main;
// main = secondary
// secondary = temp
// console.log(main, secondary)

// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// const nested = [2, 4, [5, 6]]
// const [i, ,j] = nested;
// console.log(i,j)

// const[i, [j,k]] = nested
// console.log(i,j,k)

// const [p, q, r] = [8,9]
// console.log(p, q, r)

// console.log('----OR----');

// console.log(3 || 'jonas');
// console.log('' || 'jonas');
// console.log(true || 0);
// console.log(undefined || null);

// console.log(undefined || 0 || '' || 'hello' || 23 || null);

// restaurant.numGuests = 0;
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);

// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);

// console.log('----AND----');

// console.log(0 && 'jonas');
// console.log(7 && 'jonas');

// console.log('hello' && 23 && null && 'jonas');

// if (restaurant.orderPizza) {
//   restaurant.orderPizza('mushroom', 'spanich');
// }
// restaurant.orderPizza && restaurant.orderPizza
// ('mushrooms', 'spinach');

// restaurant.numGuests = 0;
// const guests = restaurant.numGuests || 10;
// console.log(guests);

// const guestCorect = restaurant.numGuests ?? 10 ;
// console.log(guestCorect)

// const rest1 = {
//   name: 'capri',
//   numGuests: 20,
// };
// const rest2 = {
//   name: 'La piazza',
//   owner: 'Giovanni',
// };

// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// rest1.numGuests ||= 10
// rest2.numGuests ||= 10

// rest1.numGuests ??= 10
// rest2.numGuests ??= 10

// rest1.owner = rest1.owner && '<ANONYMOUS>'
// rest2.owner = rest2.owner && '<ANONYMOUS>'
// rest1.owner &&= '<ANONYMOUS>'
// rest2.owner &&= '<ANONYMOUS>'

// console.log(rest1);
// console.log(rest2);

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',

//   players: [
//     [
//       'never',
//       'Pavard',
//       'Martinez',
//       'Alba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       ,
//       'Coman',
//       'Muller',
//       'Gnabry',
//       'lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewendoski', 'Gnarby', 'Lewendoski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 11.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// const [players1, players2] = game.players;
// console.log(players1, players2);

// const [gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers);

// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Periscic'];

// const {
//   odds: { team1, x: draw, team2 },
// } = game;
// console.log(team1, draw, team2);

// const printGoals = function (...players) {
//   console.log(players);
//   console.log(`${players.length} goals were scored`);
// };
// // printGoals('Davies','Muller','Lewandowski','Kimich')
// // printGoals('Davies','Muller')
// printGoals(...game.scored);

// team1 < team2 && console.log('Team 1 is more likely to win');
// team1 > team2 && console.log('Team 2 is more likely to win');

// for (const [i, player] of game.scored.entries())
//   console.log(`Goal ${i + 1}: ${player}`);

// const odds = Object.values(game.odds);
// let average = 0;
// for (const odd of Object.values(game.odds)) average += odd;
// average /= Object.values(game.odds).length;
// console.log(average);

// for(const [team,odd] of Object.entries(game.odds)){
//   const teamStr = team === 'x' ? 'draw':`victory ${game[team]}`
//   console.log(`Odd of ${teamStr} ${odd}`)
// }

// console.log(restaurant.openingHours.mon.open);

// if (resturant.openingHours && restaurant.openingHours.mon)
//   console.log(restaurant.openingHours.mon.open);
// console.log(restaurant.openingHours.mon?.open);

// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// for (const day of days) {
//   console.log(day);
//   restuarant.openingHours[day]?.open || 'closed';
//   console.log(`On ${day}, we open at ${open}`);
// }
// console.log(restuarant.orderRisotto?.(0, 1) ?? 'Method  does not exist');

// // const users = [{name:'jonas', email:'hello@jonas.io'}]

// const users = [];

// console.log(users[0]?.name ?? 'User array empty');

// if (users.length > 0) console.log(users[0].name);
// else console.log('user array empty');

// const  prooperties = Object.keys(openingHours)
// console.log(prooperties)

// console.log(`we are open on ${prooperties.length} days`)

// for(const day of Object.keys(openingHours)){
//   console.log(day)
// }
// let openstr =`we open on${prooperties.length}`

// console.log(openstr)

// const values = Object.values(openingHours)
// console.log(entries)

// for(const [key,{open,close}] of entries){
//   console.log(`on ${key} we open at ${open} and close at ${close}`)
// }

'------slack  -------';

// const ordersSet = new Set([
//   'Pasta',
//   'Pizza',
//   'Pizza',
//   'Risotto',
//   'Pasta',
//   'Pizza',
// ]);

// console.log(ordersSet);

// console.log(new Set('Jonas'));

// console.log(ordersSet.size);
// console.log(ordersSet.has('Pizza'));
// console.log(ordersSet.has('bread'));

// ordersSet.add('Garlic Bread');
// ordersSet.add('Garlic Bread');

// ordersSet.delete('Risotto');
// ordersSet.clear();
// console.log(ordersSet);

// for (const order of ordersSet) console.log(order);

// const staff = ['Waiter', 'chef', 'waiter', 'manager', 'chef', 'waiter'];

// const staffUnique = [...new Set(staff)];
// console.log(staffUnique);

// console.log(
//   new Set(['Waiter', 'chef', 'waiter', 'manager', 'chef', 'waiter']).size
// );

// console.log(new Set('amaljose').size);

// const rest = new Map();
// rest.set('name', 'Classico Italiano');
// rest.set(1, 'Firenze,italy');
// console.log(rest.set(2, 'Lisbon,Portugal'));

// rest
//   .set('categories', ['itallian', 'Pizzeria', 'Vegetarian', 'Organic'])
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, 'We are open')
//   .set(false, 'We are closed');

// console.log(rest.get('name'));
// console.log(rest.get(true));
// console.log(rest.get(1));

// const time = 21;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// console.log(rest.has('categories'))
// rest.delete(2)
// console.log(rest)
// console.log(rest.size)

// rest.set()

// console.log(rest.get([1,2]))

// const question = new Map([
//   ['question', 'what is the best programming language in the world?'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'JavaScript'],
//   ['correct', 3],
//   [true, 'correct'],
//   [false, 'try again'],
// ]);
// console.log(question);

// console.log(Object.entries(openingHours));
// const hoursMap = new Map(Object(openingHours));

// console.log(hoursMap);

// console.log(question.get('question'));
// for (const [key, value] of question) {
//   if (typeof key === 'number') console.log(`answer ${key}: ${value}`);
// }
// const answer = Number(prompt('Your answer'));
// console.log(answer);

// console.log(question.get(question.get('correct') === answer));

// console.log([...question]);
// console.log(question.entries());
// console.log(...question.keys());
// console.log(...question.values());

// const gameEvents = new Map([
//   [17, 'GOAL'],
//   [36, 'Substitution'],
//   [47, 'GOAL'],
//   [61, 'Substitution'],
//   [64, 'Yellow card'],
//   [69, 'Red Card'],
//   [70, 'Substitution'],
//   [72, 'Substitution'],
//   [76, 'GOAL'][(80, 'GOAL')][(92, 'Yellow card')],
// ]);

// // console.log(gameEvents.values())
// const events = [...new Set(gameEvents.values())];
// console.log(events);

// gameEvents.delete(64);

// console.log(
//   `An event happend, on average, every ${90 / gameEvents.size} minutes `
// );

// const time = [...gameEvents.keys()].pop();
// console.log(time);

// console.log(
//   `An event happend, on average, every ${time / gameEvents.size} minutes`
// );

// for (const [min, event] of gameEvents) {
//   const half = min <= 45 ? 'FIRST' : 'SECOND';
//   console.log(`[${half} HALF] ${min}:${event}`);
// }

// const airline = 'TAP Air Portugal';
// const plane = 'A320';

// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[3]);
// console.log('B737'.length);

// console.log(airline.indexOf('r'));

// console.log(airline.lastIndexOf('r'));

// console.log(airline.slice(4));
// console.log(airline.slice(4, 7));

// console.log(airline.slice(0, airline.indexOf(' ')));
// console.log(airline.slice(airline.lastIndexOf(' ') + 1));

// console.log(airline.slice(-2));
// console.log(airline.slice(1,-1));

// const checkMiddleSeat = function(seat){
//  const s =seat.slice(-1)
//  if (s === 'B' || s ==='E'){
//   console.log('You got the middle seat')
//  }else{
//   console.log('you got lucky')
//  }
// }
// checkMiddleSeat('11B')
// checkMiddleSeat('23C')
// checkMiddleSeat('3E')

// console.log(new String('jonas'))

// const airline = 'TAP Air Portugal';

// console.log(airline.toLowerCase());
// console.log(airline.toUpperCase());

// const passenger = 'jonAs';
// const passengerLower = passenger.toLowerCase();
// const passengerCorrect = passenger[0].toUpperCase() + passengerLower.slice(1);
// console.log(passengerCorrect);

// const email = 'hello@gmail.com';
// const loginEmail = ' Hello@Gmail.Com \n';

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
// console.log(lowerEmail);
// console.log(trimmedEmail);

// const normalizedEmail = loginEmail.toLocaleLowerCase().trim();
// console.log(normalizedEmail);
// console.log(email === normalizedEmail);

// const priceGB = '288,97$';
// const priceUS = priceGB.replace('$', '&').replace(',', '.');
// console.log(priceUS);

// const announcement =
//   'All passengers come to boarding door 23.Boarding  door 23!';
// console.log(announcement.replace('door', 'gate'));
// console.log(announcement.replaceAll('door', 'gate'));

// console.log(announcement.replace(/door/g, 'gate'));

// const plane = 'Air A320neo';
// console.log(plane.includes('A320'));
// console.log(plane.includes('boeing'));
// console.log(plane.includes('Air'));

// if (plane.startsWith('Air') && plane.endsWith('neo')) {
//   console.log('Part of the NEW AIRbus family');
// }

// const checkBaggage = function(items){
//   const baggage = items.toLowerCase()
//   if((baggage.includes('Knife'))||(baggage.includes('gun'))){
//     console.log('You are NOT allowed on board')
//   }else{
//     console.log('Welcome aboard!')
//   }
// }
// checkBaggage('I have a laptop,some Food and  a pocket Knife')
// checkBaggage('Socks and camera')
// checkBaggage('Got some snacks and a gun for protection')

// console.log('a+very+nice+string'.split('+'));
// console.log('Amal jose'.split(' '));

// const [firstName, lastName] = 'Amal jose'.split(' ');

// const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
// console.log(newName);

// const capitalizeName = function (name) {
//   const names = name.split(' ');
//   const namesUpper = [];

//   for (const n of names) {
//     // namesUpper.push(n[0].toUpperCase() + n.slice(1));
//     namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
//   }
//   console.log(namesUpper.join(' '));
// };
// capitalizeName('jessica and smith davis');
// capitalizeName('amal jose');

// const message = 'Go to gate 23!';
// console.log(message.padStart(25, '.').padEnd(30, '+'));
// console.log('jonas'.padStart(23, '+'));

// const maskCreditCard = function (number) {
//   const str = number + '';
//   const last = str.slice(-4);
//   return last.padStart(str.length, '*');
// };
// console.log(maskCreditCard(45674565434565489));
// console.log(maskCreditCard(23456789876543));

// const message2 = 'Bad weather... All Departues Delayed...'
// console.log(message2.repeat(5))

// const planesInline = function(n){
//   console.log(`There are ${n} planes in line ${'*'.repeat(n)}`)
// }
// planesInline(5)
// planesInline(3)
// planesInline(12)

// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));

// document.querySelector('button').addEventListener('click', function () {
//   const text = document.querySelector('textarea').value;
//   const rows = text.split('\n');
//   console.log(rows);

//   for (const row in rows.entries){
//    const  [first,second] = row.toLowerCase().trim().split('_')
//    console.log(row,first,second)
//   const output = `${first}${second.replace(second[0],second[0].toUpperCase)}`
//   console.log(output)
//   }
// });
// console.log(`${output.padEnd(20)}`)

// const flights =
//   '_Delayed _Departure;fao93766109;txtl2133758440;11:25 +_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel74392998';

// console.log(flights.split('+'));

// for (const flight of flights.split('+')) {
//   console.log(flights);
// }
// const [] flight.slplit(';')
// const output = `${type.replaceAll('_','')} ${from} ${to} (${time})`
// console.log(output)

// 'use strict';

// const bookings = [];

// const createBooking = function (flightNum, numPassengers, price) {
//   numPassengers = numPassengers || 1;
//   price = price || 199;

//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking('LH123');
// createBooking('LH1234', 120, 8000);
// createBooking('LH123', 5);

// const flight = 'LH234';
// const amal = {
//   name: 'Amal Jose',
//   passport: 2345678,
// };

// const checkIn = function (flightNum, passanger) {
//   flightNum = 'LH999';
//   passanger.name = 'Mr.' + passanger.name;

//   if (passanger.passport === 2345678) {
//     alert('Check in');
//   } else {
//     alert('wrong passport!');
//   }
// };
// checkIn(flight, amal);

// console.log(flight)
// console.log(amal)

// // flightNum = flight
// const flightNum = flight
// const passanger =  amal

// const newPassport = function (person){
//   person.passport = Math.trunc(Math.random() * 10000000000)
// }
// // const  = new type(arguments);
// newPassport(amal)
// checkIn(flight,amal)

// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };

// const transformer = function (str, fn) {
//   console.log(`Original string:${str}`);
//   console.log(`Transformed string:${fn(str)}`);
//   console.log(`Transformed by: ${fn.name}`);
// };

// transformer('JavaScript is the best!', upperFirstWord);

// transformer('JavaScript is the best!', oneWord);

// const high5 = function () {
//   console.log('👋');
// };
// document.body.addEventListener('click', high5);

// ['Jonas','Martha','Adam'].forEach(high5)

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };
// const greeterHey = greet('Hey');
// greeterHey('Jonas');
// greeterHey('Steven');

// greet('hello')('jonas')

// const greetArr = greeting => name => console.log(`${greeting}${name}`)

// greetArr('hi')('jonas')

// const lufthansa = {
//   airline: 'Lufthansa',
//   iataCode: 'LH',
//   bookings: [],

//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
//     );
//     this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
//   },
// };
// lufthansa.book(239, 'Amal Jose');
// console.log(lufthansa);

// const eurowings = {
//   name: 'Eurowings',
//   iataCode: 'EW',
//   booking: [],
// };

// const book = lufthansa.book;

// book.call(eurowings, 23, 'aachi');
// console.log(eurowings);

// book.call(lufthansa, 239, 'amal');
// console.log(lufthansa);

// const swiss ={
//   airline: 'Swiss Air Lines',
//   iataCode: 'LX',
//   bookings: [],

// }

// book.call(swiss,583,'mary')
// connsole.log(swiss)

// const flightData = [583, 'amaljose']
// book.appply[swiss,flightData]
// console.log(swiss)

// book.call(swiss, ...flightData)

// const bookW = book.bind(eurowings)
// const bookLH = book.bind(lufthansa)
// const bookLX = book.bind(swiss)
// bookEW(23,'steven')

// const bookEW23 = book.bind(eurowings, 123)
// bookEW23('martha')

// lufthansa.planes = 300
// lufthansa.buyPlane = function(){
//   console.log(this)

//   this.planes++
//   console.log(this.planes)
// }
// lufthansa.buyPlane()

// document.querySelector('.buy').addEventListener(
//   'click', lufthansa.buyPlane)

// const addTax = (rate, value) => value + value * rate
// console.log(addtax(0.1,200))

// const addVAT = addtax.bind(null, 0.23)

// console.log(addVAT(100))
// console.log(addVAT(23))

// const addTaxRate = function(rate){
//   return function(value){
//     return value + value * rate
//   }
// }
// const addVAT2 = addTaxRate(0.23)

// const poll = {
//   question: 'What is your favorite programming language ?',
//   options: ['0:JavaScript', '1:Python', '2: Rust', '3: C++'],
//   answers: new Array(4).fill(0),
//   registerNewAnswer() {
//     const answer = Number(
//       prompt(
//         `${this.question}\n${this.options.join('\n')}\n(Write option number)`
//       )
//     );
//     typeof answer === 'number' &&
//       answer < this.answers.length &&
//       this.answers[answer]++;
//     console.log(this.answers);
//     this.
//   },
//   displayResults(type ='array'){
//     if(type === 'array'){
//       console.log(this.answers)
//     }else if(type === 'string'){
//       console.log(`Poll results are ${this.answers.join(',')}`)
//     }
//   }
// };
// // poll.registerNewAnswer();

// document
//   .querySelector('.poll')
//   .addEventListener('click', poll.registerNewAnswer.bind(poll));

//   poll.displayResults.call({answers: [5, 2, 3]},'string')
//   poll.displayResults.call({answers: [1, 5, 2, 3, 9, 6]},'string')
//   poll.displayResults.call({answers: [1, 5, 2, 3, 9, 6]})

// const runOnce = function () {
//   console.log('This will never run again');
// };
// runOnce()(function () {
//   console.log('This will never run again');
//   const isPrivate =23
// })();

// console.log(isPrivate)

// (() => console.log('This will ALSO never run again'))();

// {
//   const isPrivate = 23
//   var notPrivate = 46
// }
// console.log(notPrivate)

// const secureBooking = function(){
//   let passengerCount = 0

//   return function(){
//     passengerCount++
//     console.log(`$(passengerCount) passengers`)
//   }
// }
// const booker = secureBooking()

// // ------SLACK-------

// booker()
// booker()
// booker()

// console.dir(booker)

// let f;
// const g = function(){
//   const a= 23
//   f=function(){
//          console.log(a*2)
//   }
// }
// const h = function(){
//   const b = 777
//   f=function(){
//     console.log(b*2)
//   }
// }
// g();
// f()
// console.dir(f)
// h()
// f();

// console.dir(f)

// const boardPassengers = function(n, wait){
//   const perGroup = n / 3
//   setTimeout(function(){},1000)
//   console.log(`will start boarding in ${wait} seconds`)
// }
// setTimeout(function(){
//   console.log('TIMER')
// },1000)

// const perGroup = 1000;
// boardPassengers(180,3)

// (function () {
//   const header = documents.querrySelector('h1');
//   header.style.color = 'red';

//   document.querySelector('body').addEventListener
//   ('click',function(){
//     header.style.color = 'blue'
//   })
// })();

// 'use strict';

// const account1 = {
//   owner: 'Jonas Schmedtmann',
//   movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
//   interestRate: 1.2,
//   pin: 1111,
// };

// const account2 = {
//   owner: 'Jessica Davis',
//   movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
//   interestRate: 1.5,
//   pin: 2222,
// };

// const account3 = {
//   owner: 'Steven Thomas Williams',
//   movements: [200, -200, 340, -300, -20, 50, 400, -460],
//   interestRate: 0.7,
//   pin: 3333,
// };

// const account4 = {
//   owner: 'Sarah Smith',
//   movements: [430, 1000, 700, 50, 90],
//   interestRate: 1,
//   pin: 4444,
// };

// const accounts = [account1, account2, account3, account4];

// const labelWelcome = document.querySelector('.welcome');
// const labelDate = document.querySelector('.date');
// const labelBalance = document.querySelector('.balance__value');
// const labelSumIn = document.querySelector('.summary__value--in');
// const labelSumOut = document.querySelector('.summary__value--out');
// const labelSumInterest = document.querySelector('.summary__value--interest');
// const labelTimer = document.querySelector('.timer');

// const containerApp = document.querySelector('.app');
// const containerMovements = document.querySelector('.movements');

// const btnLogin = document.querySelector('.login__btn');
// const btnTransfer = document.querySelector('.form__btn--transfer');
// const btnLoan = document.querySelector('.form__btn--loan');
// const btnClose = document.querySelector('.form__btn--close');
// const btnSort = document.querySelector('.btn--sort');

// const inputLoginUsername = document.querySelector('.login__input--user');
// const inputLoginPin = document.querySelector('.login__input--pin');
// const inputTransferTo = document.querySelector('.form__input--to');
// const inputTransferAmount = document.querySelector('.form__input--amount');
// const inputLoanAmount = document.querySelector('.form__input--loan-amount');
// const inputCloseUsername = document.querySelector('.form__input--user');
// const inputClosePin = document.querySelector('.form__input--pin');

// // const displayMovements = function (movements) {
//   containerMovements.innerHTML = '';
//   movements.forEach(function (mov, i) {
//     const type = mov > 0 ? 'deposit' : 'withdrawal';

//     const html = `
//   <div class="movements__row">
//           <div class="movements__type movements__type--${type}">${
//       i + 1
//     }${type}</div>
//           <div class="movements__value">${mov}</div>
//         </div>`;
//     containerMovements.insertAdjacentHTML('afterbegin', html);
//   });
// };
// displayMovements(account1.movements);

// const createUsernames = function(user){
// const username = user.toLowerCase().split(' ').map(name => name[0]).join('')
// return username
// }
// const user = 'Steven Thomas Williams'

// console.log(createUsernames('Steven Thomas Williams'))

// const createUsernames = function (accs) {
//   accs.forEach(function (acc) {
//     acc.username = user.owner;
//   });
//   const username = user
//     .toLowerCase()
//     .split(' ')
//     .map(name => name[0])
//     .join('');
//   return username;
// };
// createUsernames(accounts);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300]

// let arr = ['a', 'b', 'c', 'd', 'e'];

// console.log(arr.slice(2));
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-2));
// console.log(arr.slice(-1));
// console.log(arr.slice(1, -2));
// console.log([...arr]);

// // console.log(arr.splice(2));
// arr.splice(-1)
// console.log(arr)
// arr.splice(1,2)
// console.log(arr);

// arr =['a','b','c','d','e']
// const arr2 = ['j','i','h','g','j']
// console.log(arr2.reverse())
// console.log(arr2)

// const letters = arr.concat(arr2)
// console.log(letters)
// console.log([...arr, ...arr2])

// console.log(letters.join)

// const arr = [23, 11, 64]
// console.log(arr[0])
// console.log(arr.at(0))

// console.log(arr[arr.length - 1])
// console.log(arr.slice(-1)[0])
// console.log(arr.at(-1))

// console.log('jonas'.at(0))
// console.log('jonas'.at(-1))

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// // for (const movement of movements) {
// for (const [i, movement] of movements.entries()) {
//   if (movement > 0) {
//     console.log(`Movement ${i + 1}: You deposited ${movement}`);
//   } else {
//     console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
//   }
// }

// console.log('----FOREACH----');
// movements.forEach(function (mov, i, arr) {
//   if (mov > 0) {
//     console.log(`Movement ${i + 1}: You deposited ${mov}`);
//   } else {
//     console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
//   }
// });

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach(function (value, key, Map) {
//   console.log(`${key}:${value}`);
// });

// const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
// console.log(currenciesUnique);
// currenciesUnique.forEach(function (value, key, map) {
//   console.log(`${value}:${value}`);
// });

// const checkDogs = function(dogsJulia, dogsKate){
//   const dogsJuliaCorretcted = dogsJulia.slice()
//   dogsJuliaCorretcted.splice(0,1)
//   dogsJuliaCorretcted.splice(-2)

// // dogsJulia.slice(1,3)
// const dogs = dogsJuliaCorretcted.concat(dogsKate)
// console.log(dogs)
//   // console.log(dogsJuliaCorretcted)

//   dogs.forEach(function(dog,i){
//     if(dog >= 3){
//       console.log(`Dog number ${i+1} is an adult, and is ${dog} years old`)
//     }else{
//       console.log(`Dog number ${i+1} is still a puppy`)
//     }
//   })
// }
// checkDogs([3,5,2,12,7,[4,1,15,8,3]])

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const eurToUsd = 1.1;

// const movementsUSD = movements.map(mov => mov * eurToUsd);
// console.log(movements);
// console.log(movementsUSD);

// const movementsUSDfor = [];
// for (const mov of movements) movementsUSDfor.push(mov * eurToUsd);
// console.log(movementsUSDfor);

// const movementsDescriptions = movements.map((mov, i, arr) => {
//   `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
//     mov
//   )}`;

//   if (mov > 0) {
//     console.log(`Movement ${i + 1}: You deposited ${mov}`);
//   } else {
//     console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
//   }
// });
// console.log(movementsDescriptions);

// const deposits = movements.filter(function(mov, i, arr){
//   return mov > 0
// })
// console.log(movements)
// console.log(deposits)

// const depositsFor = []
// for(const mov  of movements) if (mov > 0) depositsFor.push(mov)

// console.log(depositsFor)

// const withdrawals = movements.filter(mov => mov < 0)
// console.log(withdrawals)

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const balance = movements.reduce(function (acc, cur, i, arr) {
//   console.log(`Iteration ${i}: ${acc} `);
//   return acc + cur;
// }, 0);
// const balance = movements.reduce((acc, cur) => acc + cur, 0);
// console.log(balance);

// let balance2 = 0
// for (const mov of movements) balance2 += mov
// console.log(balance2)

// const max = movements.reduce((acc, mov) => {
//   if(acc > mov)
//   return acc
//   else
//   return mov
// },movements[0])
// console.log(max)

// const calcAverageHumanAge = function(ages){
//   const humanAges = ages.map(age => age <= 2 ? 2 * age : 16 + age * 4)
//   console.log(humanAges)
//   const adults = humanAges.filter(age => age >=18)
//   console.log(humanAges)
//   console.log(adults)

//   const average = adults.reduce((acc, age) => acc + age, 0)/adults.length
//   return average
// }
// const avg1 = calcAverageHumanAge([5,2,4,1,15,8,3])
// const avg2 = calcAverageHumanAge([16,6,10,5,6,1,4])
// console.log(avg1, avg2)
// const eurToUsd = 1.1
// console.log(movements)
// const totalDepositsUSD = movements
//   .filter(mov => mov < 0)
//   .map((mov, i, arr) =>{
//     console.log(arr)
//     return mov * eurToUsd
//   })
//   // .map(mov => mov * eurToUsd)
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(totalDepositsUSD)

// const calcAverageHumanAge = function (ages) {
//   const humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
//   console.log(humanAges);
//   const adults = humanAges.filter(age => age >= 18);
//   console.log(humanAges);
//   console.log(adults);

//   const average = adults.reduce((acc, age) => acc + age, 0) / adults.length;
//   return average;
// };
// const calcAverageHumanAge = ages =>
//   ages.map(age => (age <= 2 ? 2 * age : age * 4)).filter(age => age >= 18);
// const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
// console.log(avg1, avg2);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const firstWithdrawal = movements.find(mov => mov < 0);
// console.log(firstWithdrawal);

// console.log(accounts)
// const account = accounts.find(acc => acc.owner ==='Jessica Davis')
// console.log(account)

'use strict';

// const account1 = {
//   owner: 'Jonas Schmedtmann',
//   movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
//   interestRate: 1.2,
//   pin: 1111,
// };

// const account2 = {
//   owner: 'Jessica Davis',
//   movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
//   interestRate: 1.5,
//   pin: 2222,
// };

// const account3 = {
//   owner: 'Steven Thomas Williams',
//   movements: [200, -200, 340, -300, -20, 50, 400, -460],
//   interestRate: 0.7,
//   pin: 3333,
// };

// const account4 = {
//   owner: 'Sarah Smith',
//   movements: [430, 1000, 700, 50, 90],
//   interestRate: 1,
//   pin: 4444,
// };

// const accounts = [account1, account2, account3, account4];

// const labelWelcome = document.querySelector('.welcome');
// const labelDate = document.querySelector('.date');
// const labelBalance = document.querySelector('.balance__value');
// const labelSumIn = document.querySelector('.summary__value--in');
// const labelSumOut = document.querySelector('.summary__value--out');
// const labelSumInterest = document.querySelector('.summary__value--interest');
// const labelTimer = document.querySelector('.timer');

// const containerApp = document.querySelector('.app');
// const containerMovements = document.querySelector('.movements');

// const btnLogin = document.querySelector('.login__btn');
// const btnTransfer = document.querySelector('.form__btn--transfer');
// const btnLoan = document.querySelector('.form__btn--loan');
// const btnClose = document.querySelector('.form__btn--close');
// const btnSort = document.querySelector('.btn--sort');

// const inputLoginUsername = document.querySelector('.login__input--user');
// const inputLoginPin = document.querySelector('.login__input--pin');
// const inputTransferTo = document.querySelector('.form__input--to');
// const inputTransferAmount = document.querySelector('.form__input--amount');
// const inputLoanAmount = document.querySelector('.form__input--loan-amount');
// const inputCloseUsername = document.querySelector('.form__input--user');
// const inputClosePin = document.querySelector('.form__input--pin');

// let currentAccount;

// btnLogin.addEventListener('click', function (e) {
//   e.preventDefault();
//   currentAccount = accounts.find(
//     acc => acc.username === inputLoginUsername.value
//   );
//   console.log(currentAccount);
//   if (currentAccount?.pin === Number(inputLoginPin.value)) {
//     labelWelcome.textContent = `Welcome back, ${
//       currentAccount.owner.split(' ')[0]
//     }`;
//     containerApp.getElementsByClassName.opacity = 100;
//     inputLoginUsername.value = inputLoginPin.value = '';
//     inputLoginPin.blur();
//     displayMovements(currentAccount.movements);

//     clacDisplayBalance(currentAccount.movements);
//     // console.log('LOGIN');

//     clacDisplaySummary(currentAccount.movements);
//   }
// });
// btnTransfer.addEventListener('click', function (e) {
//   e.preventDefault();
//   const amount = Number(inputTransferAmount.value);
//   const receiverAcc = accounts.find(
//     acc => acc.username === inputTransferTo.value
//   );
//   console.log(amount, receiverAcc);
//   inputTransferAmount.value = inputTransferTo = '';
//   if (
//     amount > 0 &&
//     receiverAcc &&
//     currentAccount.balance >= amount &&
//     receiverAcc.username !== currentAccount.username
//   ) {
//     currentAccount.movements.push(-amount);
//     receiverAcc.movements.push(amount);

//     updateUI(currentAccount);
//   }
// });
// btnClose.addEventListener('click', function (e) {
//   e.preventDefault;
//   if (
//     inputCloseUsername.value === currentAccount.username &&
//     Number(inputClosePin.value) === currentAccount.pin
//   ) {
//     const index = accounts.findIndex(
//       acc => acc.username === currentAccount.username
//     );
//     console.log(index);
//   }
// });

// console.log(movements);
// console.log(movements.includes(-130));

// if(amount>0 && currentAmount.movements.some(mov => >= amount * 0.1)){
//   currentAccount.movements.push(amount)

//   updateUI(currentAccount)
// }

// const anyDeposits = movements.some(mov => mov > 5000)

// console.log(anyDeposits)

// console.log(movements.every(mov = > mov > 0))

// const deposit = mov => mov > 0
// console.log(movements.some(deposit))
// console.log(movements.every(deposit))
// console.log(movements.filter(deposit))

// const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
// console.log(arr.flat());

// const arrDeep = [[[1, 2], 3], [4, 5, 6], 7, 8];
// console.log(arrDeep.flat());
// console.log(arrDeep.flat(2));

// const accountsMovements = accounts.map(acc => acc.movements)

// const allMovements = accountMovements.flat();
// console.log(allMovements)
// const overalBalance = allMovements.reduce((accc,mov) => acc + mov, 0)
// console.log(overalBalance)

// const overalBalance = accounts.map(acc => acc.movements).flat().reduce(acc, mov) => acc + mov,0;
// console.log(overalBalance)

// const owners = ['Jonas','Zach','Adam','Martha']
// console.log(owners.sort())

// console.log(movements)
// movements.sort((a,b) => {
//   if(a > b)
//   return 1;
//   if(b > a) return -1
// })

// movements.sort((a, b) => a -b)
// console.log(movements)
// const movs = sort ? movements.slice().sort(a , b) => a-b)

// const arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(new Array(1, 2, 3, 4, 5, 6, 7));

// // ----SLACK------

// const x = new Array(7);
// console.log(x);

// // console.log(x.map(()=> 5))

// x.fill(5);
// console.log(x);

// arr.fill(23, 4, 6);
// console.log(arr);

// Array.from({length: 7},() => 1)
// console.log(y)

// const z = Array.from({length: 7},(cur,i) => i + 1)
// console.log(z)

// console.log(movementsUI.map(el => Number(el.textContent.replace(''))))

// const bankDepositSum = accounts.flatMap(acc.movements).filter(mov => mov > 0).reduce((sum, cur) => sum + cur, 0);

// console.log(bankDepositSum);

// // const numDeposits1000 = account.flatMap(acc => acc.movements)
// console.log(numDeposits1000)

// const numDeposits1000 = accounts.flatMap(acc => acc.movements).reduce((count,cur) => (cur >= 1000 ? count + 1 :count ), 0)

// const {deposits, withdrawals} = accounts
// .flatMap(acc => acc.movements).reduce((sums, cur) => {
// // cur > 0 ? sums.deposits += cur : sums.withdrawals += cur;
// sums[cur > 0 ? 'deposits' : 'withdrawals'] += cur
// return sums
// },{deposits:0, withdrawals:0})

// console.log()

// const arr = [8, 6, 1, 3, 4, 5, 2, 8, 9];

// const sorted = arr.filter(i => i < 6).sort();
// console.log(sorted);

// const convertTitleCase = function (title) {
//   const expections = ['a', 'an', 'the', 'but', 'or', 'on', 'in', 'with'];

//   const titleCase = title
//     .toLowerCase()
//     .split(' ')
//     .map(word =>
//       expections.includes(word) ? word : word[0].toUpperCase() + word.slice(1)
//     );
//   return titleCase;
// };
// console.log(convertTitleCase('this is a nice title'));

// const dogs = [
//   { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
//   { weight: 8, curFood: 200, owners: ['Matilda'] },
//   { weight: 22, curFood: 250, owners: ['Sarah', 'John'] },
//   { weight: 22, curFood: 250, owners: ['Michael'] },
// ];
// dogs.forEach(dog => (dog.recFood = Math.trunc(dog.weight ** 0.75 * 28)));
// console.log(dogs);

// const dogSarah = gogs.find(dog => dog.owners.includes('Sarah'));
// console.log(dogSarah);
// console.log(
//   `Sarsh's dog is eating ${
//     dogSarah.curFood > dogSarah.recFood ? 'much' : 'little'
//   } `
// );

// const ownersEatTooMuch = dogs.filter(dog => dog.curFood > dog.recFood);

// console.log(ownersEatTooMuch);

// console.log(BigInt(999 ** 99));

// const future = new Date(2037, 10, 19, 15, 23);
// console.log(future);
// console.log(future.getFullYear());
// console.log(future.getMonth());

// const future = new Date(2023, 5, 27, 15, 23);
// console.log(future);
// console.log(future.getFullYear());
// console.log(future.getMonth());
// console.log(future.getDate());
// console.log(future.getDay());
// console.log(future.getHours());
// console.log(future.getMinutes());
// console.log(future.getSeconds);
// console.log(Date());
// console.log(future.toISOString());
// console.log(future.getTime());

// console.log(new Date(2142256980000))

// const future = new Date(2023, 5, 27, 15, 23);
// console.log(+future);

// const clacDaysPassed = (date1, date2) =>
//   (date2 - date1) / (1000 * 60 * 60 * 24);

// const days1 = clacDaysPassed(new Date(2023, 5, 27), new Date(2023, 5, 30));
// console.log(days1);

// const now = new Date();
// labelDate.textContent = new Intl.DateTimeFormat('en-Us').format(now);

// setInterval(function () {
//   const now = new Date();
//   console.log(now);
// }, 1000);

// console.log(new Date());

// setInterval(function () {
//   const anan = 'hi';
//   console.log(anan);
// }, 1000);
