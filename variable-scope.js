//Global Scope
const person = "Dude";


//removing let from inside the function changes the global scoped variable. To prevent changing global varaible from inside fucntion we should use const in globabl variable
function sayHi(){
  let person = "Alex"; 
  console.log(`Hi ${person}!!!`)
}

function sayHi2(){
  let person = "Bob";
  console.log(`Hi ${person}!!!`)
}


sayHi();
console.log(`Hi ${person}!!!`)
sayHi2();