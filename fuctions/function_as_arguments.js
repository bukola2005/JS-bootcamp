// function as argument
function callThreetime(fun){
    fun();
    fun();
    fun();
}

function cry(){
    console.log("i am sad!");
}

console.log(callThreetime(cry));


function rage (){
    console.log("i hate everything");
}
// ----------------------//
function repeatNtimes(action, num){
    for(let i = 0; i < num; i++){
        action();
    }
}

console.log(repeatNtimes(rage,13)) ;

// -----------------------//
 function pickOne(f1,f2){
   let rand = Math.random();
   console.log(rand);
   if(rand < 0.5){
    f1();
   }else{
    f2();
   }
 }

 console.log(pickOne(cry,rage));

//  function as return
function multiply(num){
    return function (x){
        return x * num;
    }
}

const doubble = multiply(2);
const tripple = multiply(3);
console.log(doubble(4));
console.log(tripple(4));

//----------------------//
function makeBetween(x,y){
    return function (num){
        return num >= x && num <= y;
    }
}

const isChild = makeBetween(0,18);
console.log(isChild(17));

const nineties = makeBetween(1990, 2000);
console.log(nineties(1989));

 
// Callback function
// function grumps(){
//     alert("welcome!")
// }

// setTimeout( grumps, 5000);

// setTimeout(function(){
//     alert ('go away',600);
// })

//----------------------------//

const btn = document.querySelector('button');
btn.addEventListener('click',function(){
    alert("welcome!");
});