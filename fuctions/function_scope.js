// Function scope

let bird = 'mandarin duck';

function birdWatch(){
    let bird = 'golden pheasant';
    console.log(`function ${bird}`);
}

birdWatch();
console.log(`outside function ${bird}`);

// Block scope
if (true) {
    let animal = 'eel';
    console.log(animal);
}
console.log(animal);

// Lexical scope
 function outer() {
    let movie = 'Amadeus';
    function inner(){
        console.log(movie.toUpperCase);
    }
    inner();
 }