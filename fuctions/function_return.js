// function isPurple(color){
//     if(color === "purple"){
//         return true;
//     }
//     return false;
// }

// const result = isPurple("blue");

// console.log(result);


function purpleArr(arr){
  for(value of arr){ 
    if(value === "purple" || value === "blue"){
        return true;
    }
  }
  return false;
}

const ans = purpleArr(["red"]);
console.log(ans);