const jeopardyWinnings = {
    regularPlay : 25222700,
    watson:3000000,
    tourname:500000,
    battle:10000
};

for (let prop in jeopardyWinnings) {
    console.log(prop);
    console.log(jeopardyWinnings[prop]);
}

let totals = 0;
for(let prop in jeopardyWinnings){
    totals += jeopardyWinnings[prop];
}
console.log(`total earning ${totals}`);


// using for in with and array but to console the index on the arry because the indexs are the key of the array

for (const key in [88,99,30,99,86,77]) {
    console.log(key);
}