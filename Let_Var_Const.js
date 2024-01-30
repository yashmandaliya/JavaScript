// DECLARE USING LET
let a = 20;
{
  let a = 30;
  console.log(a); //30
}
console.log(a); //20

// DECLARE USING VAR
var b = 20;
{
  var b = 40;
  console.log(b); //40
}
console.log(b); //It Gets New Value In B  = 40

// DECLARE USING CONST
const c = 20;
{
  const c = "Yash";
  console.log(c); //Yash
}
console.log(c); //20


// Error In Below Code 👇
// Error :- Identifier d is already declared

let d = 40;
{
  var d = 30;
  console.log(d);
}
console.log(d);
