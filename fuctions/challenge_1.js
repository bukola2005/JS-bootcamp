function isValidPassword(password, username){
    if(password.length < 8 ){
        return false;
    }
  if(password.indexOf(username) !== -1){
    return false;
  }
  if(password.indexOf(' ') !== -1){
    return false;
  }
  return true;
}

let ans = isValidPassword('dogluvr123','dogluvr');

console.log(ans);

// another way

function isValidPassword(password,username){
    const tooShort = password.length < 8;
    const hasSpace = password.indexOf(' ') !== -1;
    const tooSimilar = password.indexOf(username) !== -1;

    if(!tooShort && !hasSpace && !tooSimilar)return true;
    
    return false;
}

let val = isValidPassword('dogluvr123','dogluvr');

console.log(ans);