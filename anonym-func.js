// const sayHi = function(name){
//   return `Hi ${name}!!!`;
// };

// console.log(sayHi("Aleasdx"));


// Function is executed as JS moves them always to top is called hoisting
// console.log(getResult(10));

// function getResult(result){
//   let test = result + 2;
//   return test;
// };


// Function expression is not moved to top
console.log(getResult(10));

const getResult = function(result){
  let test = result + 2;
  return test;
};
