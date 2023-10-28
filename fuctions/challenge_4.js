// function pick(arr){
//     const idx = Math.floor(Math.random() * arr.length);
//     return arr[idx];
// }
function getCard(){
  const arrValue= ['2','3','4','5','6','7','8','9','10','J','Q', 'K','A']; 
    
 const idx = Math.floor(Math.random() * arrValue.length);

 const val = arrValue[idx];

 const arrSuits = ['clubs','spades','hearts','diamonds'];
 const suitidx = Math.floor(Math.random() * arrSuits.length);
 const suit = arrSuits[suitidx];
 return  {
    value: val,
    suit:suit
 }
}

let ans = getCard();
console.log(ans);


// function expect(val) {

//   return{
//       toBe: sal =>  {
//       if(val !== sal){
//          throw new Error("Not Equal");
//       }
//        return true;
//       },
       
//       notToBe :dal =>{
//           if(val === dal){
//                 throw new Error("Equal");
//           }
//           return true;
//       }
//   } 
      
      
//   } ;


// const ans = expect(5).toBe(5);
// const res = expect(8).notToBe(3);
// console.log(typeof(ans));
// console.log(res);