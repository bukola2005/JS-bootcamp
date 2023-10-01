let subreddits = ['soccer','pophead','çringe','book'];
for (const sub of subreddits) {
    console.log(sub);
}

for(let char of 'hello'){
    console.log(char.toUpperCase());
}

const magicSquare=[
    [2,7,6],
    [9,5,1],
    [4,3,8]
];

// for(let i = 0; i<magicSquare.length; i++){
//     let row = magicSquare[i];
//     let sum = 0;
//     for(let j = 0; j <row.length; j++){
//         console.log(row[j]);
//         sum+=row[j];
//     }
//     console.log(`${row} summed to ${sum}`);
// }

for (let row of magicSquare) {
    let sum = 0;
    for(let num of row){
        sum+=num;
    }
    console.log(`${row} summed to ${sum}`);
}

// for of using index 

const words1 = ['mail','milk','bath','black'];
const words2 = ['box','shake','tub','berry'];

for(let i = 0; i < words1.length; i++){
    console.log(`${words1[i]}${words2[i]}`);
}

// for of with object
const movieReviews = {
    Arrival : 9.5,
    Alien  : 9,
    Amelie : 8,
    'In Bruges' : 9
};

// does not work it is not iterable
// for (let x of movieReviews) {
//     console.log(x);
// }

for (let movie of Object.keys(movieReviews)) {
    console.log(movie, movieReviews[movie]) ;
}

const rating  = Object.values(movieReviews);
let total = 0;
for (let r of rating) {
    total += r;
}
let avg = total /rating.length;
console.log(avg);