// push 
// Example 1
const animals = ['pigs','goats','sheep'];

const count = animals.push('cows');

console.log(count);
console.log(animals);


// Example 2

let topSongs = [
  'First Time',
  'God only know',
  'A day in the life',
  'life on mars'
];

topSongs.push('fortunate son');

// pop
// Example 1

const remove = animals.pop();
console.log(remove);
console.log(animals) ;

// unshift
// Example 1
let array1 = [1,2,3];

console.log(array1.unshift(0));

console.log(array1);


// shift
// Example 1
let firstElement = array1.shift();

console.log(array1);

console.log(firstElement);


// concat
// Example 1

let fruits = ['apple','banana'];
let veggies = ['asperagus','brussel sprouts'];
let meats = ['steak', 'chicken breast'];


console.log(fruits.concat(meats,veggies));
console.log(fruits);
console.log(meats);
console.log(veggies);

// includes
// Example 1 

let ingredients = ['water','flour','cheese','butter','eel','egg'];
console.log(ingredients.includes('fish'));
console.log(ingredients.includes('water'));
console.log('flour',3);


// indexOf

console.log(ingredients.indexOf('eel'));
console.log(ingredients.indexOf('maple syurp'));
console.log(ingredients.indexOf('cheese',2));


// Reverse and join methods
// Example 1
let letter = ['T','C','E','P','S','E','R'];

console.log(letter.reverse().join('.'));

// slice method
// Example
let animal = ['shark','salmon','whale','bear','lizard','tortoise'];
let swimmers = animal.slice(0,3);
console.log(swimmers);
let mammals = animal.slice(2,4);
console.log(mammals);
// let reptiles = animal.slice(4,6);
let reptiles = animal.slice(4);
console.log(reptiles);

let quadruped = animal.slice(-3);
console.log(quadruped);

//sort method
// Example
let people = ['dave','ayo','zac','jolene'];
console.log(people.sort());

let num = [1,10000,3,566,32,10];
console.log(num.sort());


// Nested Array
// Example
const animalPairs = [
  ['doe','buck'],
  ['ewe','ram'],
  ['peahen','peacock']
];
console.log(animalPairs[2]);

console.log(animalPairs[2][0]);
console.log(animalPairs[2][1]);
console.log(animalPairs[1][1]);
console.log(animalPairs[0][1]='stag');
console.log(animalPairs);