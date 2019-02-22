// HOF higher order function
// function myFunc(){
//     return function(){

//     }
// }
function plusSomeValue(val) {
  return function(x) {
    return x + val;
  };
}
const plusOne = plusSomeValue(1);

const a = 7;
const b = plusOne(a);
console.log("b", b);

// HOC higher order componenet
