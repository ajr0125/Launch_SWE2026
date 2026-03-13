/* Beginner Challenge */

const bookList = [
  { title: "Don Quixote", author: "Miguel de Cervantes" },
  { title: "Ulysses", author: "James Joyce" },
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
  { title: "Moby Dick", author: "Herman Melville" },
];

/* Do all of these using proper ES6 syntax
Using the following array of objects,
*/

// (1) Write an arrow function that adds a new entry to bookList
const addBook = (newTitle, newAuthor) => {
  // your code here
};

// (2) Write an arrow function that removes a specific book from the bookList
const removeBook = (removeTitle, removeAuthor) => {
  // your code here
};

// (3) Write an arrow function that prints all book titles using .forEach()
const printBooks = () => {
  // your code here
};


/* Intermediate Challenge */

// (4) Write a one-line arrow function that takes in a number and returns
// whether the number is positive or negative using a ternary operator
const numberSign = (n) => null;//  remove null type and add your code here


/* (5) Write a switch statement for a 'day' variable that prints something
based off of what day of the week it is */

let day = "Monday";

switch(day){

}


/* (6) Write an arrow function that takes in a number and returns the sum
of every number from 1 up to that number */

const sumUp = (n) => {
  // your code here
};


/* Harder Challenge */

// (7) Convert Celsius to Fahrenheit and return clothing advice

const temperature = (celsius) => {
  // your code here
};


/* (8) Print the amount of truthy values in an array using .forEach() */

const truthy = (arr) => {
  // your code here
};


/* (9) Using map(), return an array of objects that contain:
   - fullName
   - averageGrade */

const attendance = [
  { firstName: "Clay", lastName: "Tondreau", gpa: 4.0 },
  { firstName: "Tucker", lastName: "Wilson", gpa: 2.0 },
  { firstName: "Eliza", lastName: "Tobin", gpa: 3.7 },
  { firstName: "Sofia", lastName: "Ackerman", gpa: 1.1 },
  { firstName: "Thomas", lastName: "Beddow", gpa: 2.3 },
  { firstName: "Jackson", lastName: "Wolf", gpa: 4.0 },
  { firstName: "Jared", lastName: "Nguyen", gpa: 4.0 },
];

const gpaToLetter = (gpa) => {
  if (gpa >= 3.7) return "A";
  if (gpa >= 3.0) return "B";
  if (gpa >= 2.0) return "C";
  if (gpa >= 1.0) return "D";
  return "F";
};

const newArr = attendance.map(student => ({
  // your code here
}));


/* Hardest Challenge */

const numberToWordsLength = (num) => {
  const words = {
    0: "zero", 1: "one", 2: "two", 3: "three", 4: "four",
    5: "five", 6: "six", 7: "seven", 8: "eight", 9: "nine",
    10: "ten", 11: "eleven", 12: "twelve", 13: "thirteen",
    14: "fourteen", 15: "fifteen", 16: "sixteen",
    17: "seventeen", 18: "eighteen", 19: "nineteen",
    20: "twenty"
  };

  return words[num].length;
};

const allPathsLeadToFour = (num) => {
  // your code here
};