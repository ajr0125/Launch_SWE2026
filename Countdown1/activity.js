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
  // create book
  const book = { title: newTitle, author: newAuthor};
  // add book to book list 
  bookList.push(book);
  return bookList;
};

// (2) Write an arrow function that removes a specific book from the bookList
const removeBook = (removeTitle, removeAuthor) => {
  const newList = bookList.filter(book => !(book.title === removeTitle && book.author === removeAuthor))
  return newList;
};

// (3) Write an arrow function that prints all book titles and authors using .forEach()
const printBooks = () => {
  // your code here
  bookList.forEach(book => console.log(`Title: ${book.title}, Author: ${book.author}`))
};


/* Intermediate Challenge */

// (4) Write a one-line arrow function that takes in a number and returns
// whether the number is positive or negative using a ternary operator
const numberSign = (n) => n >= 0 ? "positive" : "negative";


/* (5) Write a switch statement for a 'day' variable that prints something
based off of what day of the week it is */

let day = "Monday";

switch(day){
  case "Monday":
    console.log("It's only the beginning");
    break;
  case "Tuesday":
    console.log("Not again!");
    break;  
  case "Wednesday":
    console.log("Halfway there!");
    break;  
  case "Thursday":
    console.log("Almost done!");
    break;  
  case "Friday":
    console.log("TGIF");
    break;  
  default:
    console.log("When will this week ever end?!");
}


/* (6) Write an arrow function that takes in a number and returns the sum
of every number from 1 up to that number */

const sumUp = (n) => {
  let result = 0;
  for(let i = 1; i <= n ; i++){
    result += i;
  }
  return result;
};


/* Harder Challenge */

// (7) Convert Celsius to Fahrenheit and return clothing advice

const temperature = (celsius) => {
  const fahrenheit = celsius * 9/5 + 32;

  if(fahrenheit <= 32){
    return "wear a heavy coat";
  }else if(fahrenheit  > 32 && fahrenheit <= 65){
    return "wear a light coat";
  }else if(fahrenheit  > 65 && fahrenheit <= 100){
    return "wear a tanktop and shorts";
  }else{
    return "don't go outside";
  }
};


/* (8) Print the amount of truthy values in an array using .forEach() */

const truthy = (arr) => {
  let count = 0;
  arr.forEach(n => { if (n) count++; });
  return count;
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
  fullName: `${student.firstName} ${student.lastName}`,
  averageGrade: gpaToLetter(student.gpa)
}));


/* Hardest Challenge (Don't do this without completing easier challenges) */

/* Write a function that solves the "every number eventually equals 4" puzzle. The output should be
    an array of the path you took to make it equal four
    ex/ [11, 6, 3, 5, 4], [19, 8, 5, 4]
    For context: https://puzzling.stackexchange.com/questions/29137/every-number-eventually-equals-4 */

// assuming num < 21. Pattern holds with higher numbers but just requires more checks
// does not support leading zeros
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
  const nums = [num];

  while (num !== 4) {
    num = numberToWordsLength(num);
    nums.push(num);
  }

  return nums;
};