// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// We make a variable called "name" and set it to = “Dane” as a string. 
// Check to see if the string is equal to “Mary”.
// If the variable is not equal to “Mary”, we continue with the next condition. If the variable does match “Mary” we console.log “Hi Mary!”
// Since the variable does not meet the fist condition, we console.log the string “How do you do?”

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// Declare a variable called "secret and it is not set to anything at this given moment. 
// Declare a variable called "code" and set it to "123" as a number.
// Check if the "code" is equal to 123. 123 is equal to 123. 
//the value we delcared "code" will be multipled by 2, "code" will equal out to 246 as a number. 
// Now that "code" is correct the variable "secret" will be set to "super" as a string.
//We check to see if the new value of "code" is greater than 250. 246 is not greater than 250 so next line won't be ran. 
//if the value of code was greater than 250, the variable "secret" would be reassgnied "super". 
// We console.log "secret" and get the value "super".



//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// Declare variable "isStudent" and set it to "true" as (boolean).
// Declare variable "age" and set it to 34 as (number).
// Declare the variable zip and set it to 55407 as (number).
//We check to see if "isStudent" is "true" and if the zip is greater than 8000 We console.log('Your're a student on the West cooast";
//We check to see "isStudent" is "false and "age" is less than 30.  We console.log('What are your hobbies?'); .
//Check to see if "isStudent" is "true" so we consolog.log ("welcome to Prime");


//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

/*

// FIX- The variables are set to the worng vlaues and need to be corrected. 
// let colorOne = "blue" and let colorTwo = "red" and mix set to true; We check if mix is ture, it is, so we set colorOne and colorTwo to "purple".


// colorTwo is not reassigned. Only colorOne was reassigned to = "purple"
//colorTwo should also = "purple" example 
//if (mix === true) {
  colorTwo = "purple";
}

let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

if (mix === true) {
  colorOne = 'purple';
}
*/ 

//Fix the condition is wrong and needs to be recorrected example It should be 
//It should be [ if (temp > 39 && time >=4) ]
//if (temp > 39 || time >= 4) {
 // console.log('throw away the food!');
//}


//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
It should be [ if (temp > 39 && time >=4) ]
if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}


let temp = 40;
const time = 4;

if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/


//Fix switch minAge <= age to  Age >= minAge
//FIX switch the console statements because age is greater than 21, the condition is true and the console will log "enter".
//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;

if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/

