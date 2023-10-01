const userReviews = {};

// adding value to an empty object
userReviews['queenBee49']=4.0;

userReviews.mrSmith78  = 3.5;

// updating the value orincreseing the value
userReviews['queenBee49'] += 2;

userReviews.mrSmith78++;

console.log(userReviews.mrSmith78);
// nested  objects

const student = {
  firstName : 'David',
  lastName : 'jones',
  strengths : ['Music' , 'art'],
  exams :{
    midterm : 92,
    final :88
  }
};

// print out the avg of the exam object
console.log(
(student.exams.final + student.exams.midterm)/2
)
console.log(student.strengths[1]);

//nested arrays and object

const shoppingCart = [
  {
    product: 'Jenga Classic',
    price : 6.88,
    quantity : 1
  },

  {
    product: 'Echo dot',
    price : 29.9,
    quantity : 3
  },
  {
    product: 'Fire stick',
    price : 3.88,
    quantity : 2
  }
];


 const game = {
  player1:{
    username: "blue",
    playingAs :'x'
  },
  player2:{
    username : "muffins",
    playingAS : 'o'
  },
  board:[
    ['o',null,'x'],
    ['x',null,'o'],
    ['o',null,'x']
  ]

 };