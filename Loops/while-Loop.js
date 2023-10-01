let num = 0;
while (num <= 5) {
    console.log(num);
    num++;
}

// const target = Math.floor(Math.random() * 10);
// let guess = Math.floor(Math.random() * 10);
// console.log(`target: ${target}`)
// while (guess !== target){
//     console.log(`guess: ${guess}`);
//     guess = Math.floor(Math.random() * 10);
// }
// console.log(`Guess:${guess} \n Target:${target}`);

const target = Math.floor(Math.random() * 10);
let guess = Math.floor(Math.random() * 10);
while(true){
    if (guess === target) {
        break;
    }
    console.log(`target: ${target}`)
    console.log(`guess: ${guess}`);
    guess = Math.floor(Math.random() * 10);
}
console.log(`Guess:${guess} \n Target:${target}`);