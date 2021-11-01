// Write your code here

//multiply
const num1 = Number(31);
const num2 = Number(2);
let multiply = Number(num1) * Number(num2);

//random
let random = Math.floor(Math.random() * 100) + 1; //generate number between 1 and 100

//mod
const num3 = 14;
const num4 = 5;
let mod = num3 % num4;

//max
const set = new Set(); // wasn't sure if "set" was a variable, or a Set object... so I did both...
set.add(4);
set.add(20);
set.add(15);
set.add(8);
//alternatively I was going to have set equal to an array ,[4, 20, 15, 8].
let max = Math.max(...set);