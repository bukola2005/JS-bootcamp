// Example 1 AND {&& }
let password = "hello kitty";

if(password.length >= 8 && password.indexOf(' ') === -1){
  console.log('valid password! ');
}else{
    console.log('invaild password! ');
}

// Example 2 AND {&&}

let num =  3; 
if (num >=1 && num <= 10) {
  console.log("1 and 10");
} else {
  console.log("not");
}

// Example 3 OR {||}

let age = 30;
if (age < 6 || age >= 65) {
  console.log("you get in for free");
} else {
  console.log("you must payyy");
}

// Example 4 OR {||}
 let color = "purple";
 if (color === "purple" || color === "lilac" || color === "violet") {
  console.log("great");
 }


//  Example 5 NOT {!}

let flavor = 'waterloeam';

//  using strict non-equailty and AND operator
// if (flavor !== "grape" && flavor !== "cherry") {
//   console.log("we dont have that flavour")
// }

// using NOT operator and OR operator and  strict equailty
if (!(flavor === "grape" || flavor === "cherry")){
  console.log("we only have grape and cherry");
}