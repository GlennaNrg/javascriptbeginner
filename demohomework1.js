// Homework 1:
// 1.Create a javascript file which shows an example of the following key javascript syntax
// In a series of variables store:
//       A) string
var goal = `My goal for the year is to become a software engineer.`;
console.log(goal);
//       B) number
var myAge = 24;
//       C) Boolean
var isAGoodTeacher = true;
// 2.Add two numbers
var age1 = 24;
var age2 = 28;

console.log(age1 + age2);
// 3.Use the shorthand to add 1 to a number
age1++;
console.log(age1);
// 4.Use the shorthand to remove 1 from a number
age1--;
console.log(age1);
// 5.Concatenate two string
var name = "Glenna";
var age = "24";
console.log(`${name} is ${age} years old. In September she is ${age + 1}`);
// 6.Create an IF statement which checks if a variable matches another variable, if so it should console log a message
var name = "Glenna";
var age = 24;

if (age >= 18) {
  console.log(`${name} is old enough to drive`);
}

// 7.Extend one of the IF statements to check if two things are true, if so show a message
var hasDrivingLicense = true;

if (age >= 18 && hasDrivingLicense === true) {
  console.log(`${name} is old enough to drive and she has a driving license`);
}

// 8.Store in a variable someone’s name, age and height. Choose between an object and an array.
var me = {
  name: "Glenna",
  age: 24,
  height: "170cm",
};

console.log(me.height);
