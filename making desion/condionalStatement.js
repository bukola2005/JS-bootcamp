// Example 1 if
if (1 === 1) {
    console.log("True");
}

// Example2 else and else if
let rating = 3;

if (rating === 3) {
    console.log("you are a superstar!");
}else if(rating === 2){
    console.log("experation meet")
}else if(rating === 1){
    console.log('need work');
}
else{
    console.log('invaid rating');
}


// Example 3 nesting condition
let password = "hello kitty";

if(password.length >= 6){
    if (password.indexOf(' ') === -1) {
        console.log('valid password! ');
    }else{
        console.log('password cannot contain spaces');
    }
}else{
    console.log('password must be longer');
}


// Ternary operator 
// Example 1 

let num = 7;

num === 7 ? console.log('lucky') : console.log('bad');



// Example 2

let status = 'offline';

let color = status === 'offline' ? 'red' : 'green';