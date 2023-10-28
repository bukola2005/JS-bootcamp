// function pangram(sentence){
//     let lowerCase = sentence.toLowerCase();
//     for (const char of 'abcdefghijklmnopqrstuvwxyz') {
//     if(lowerCase.indexOf(char) === -1){
//         return false;
//     }
//     }
//     return true;
// }

// const ans = pangram('the five boxing wizards jump quickly');

// console.log(ans);

function pangram(sentence){
    let lowerCase = sentence.toLowerCase();
    for (const char of 'abcdefghijklmnopqrstuvwxyz') {
    if(lowerCase.includes(char)){
        return false;
    }
    }
    return true;
}

const ans = pangram('the five boxing wizards jump quickly');

console.log(ans);