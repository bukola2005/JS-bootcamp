// function average(arr){
// let sum  = 0;
// for(let value of arr){
//  sum+= value;
// }
// // let avg = sum / arr.length;
// return sum / arr.length;
// }

// const hey = average([2,3,4]);
// console.log(hey);

function average(arr){
let sum = 0;
for(let i = 0; i < arr.length; i++ ){
    sum+=arr[i];
}
return sum / arr.length;
}
const hey = average([2,3,4]);
console.log(hey);