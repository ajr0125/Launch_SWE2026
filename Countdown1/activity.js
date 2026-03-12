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
      //your code here
};
// (2) Write an arrow function that removes a specific book from the bookList
const removeBook = (removeTitle, removeAuthor) => {
      //your code here
};

// (3) Write an arrow function that lists out all the books or all the authors in the book list */
const printBooks = () => {
      //your code here
};

/*
/* Intermediate Challenge */

/* (4) Write a one-line arrow function that takes in a number and returns a string stating whether the
  number is positive or negative using a ternary operator (assume the number will never be zero) */

const numberSign = () =>  //your code here

/* (5) Write a switch statement for a 'day' variable that prints out something based off of what day of
  the week it is i.e. if it's Monday, print "good luck" or wednesday print "hump day" or friday print "party" */

let day = "Monday";
switch(day){
     //your code here
}

/* (6) Write an arrow function that takes in a number, and uses a for loop to return the sum of every
  number from 1 up to that number
  ex. sumUp(7) = 28 */

const sumUp = (n) => {
        //your code here
}

/* Harder Challenge */

/* (7) Write an arrow function that converts the temperature from Celsius to Fahrenheit and then tells
    me what I should wear accordingly */

const temperature = (celsius) => {
    //your code here
};

/* (8) Write a function that takes in an array and prints out the amount of truthy values in that array
  using .forEach() */

const truthy = (arr) => {
    //your code here
}

/* (9) Using the map function and arrow syntax, return an array of object that contain a fullName field
  and an averageGrade field representing the letter grade that corresponds to their GPA */

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
}
const newArr = attendance.map(student => ({
          //your code here
}));
/* Hardest Challenge (Don't do this without completing harder challenges) */

/* Write a function that solves the "every number eventually equals 4" puzzle. The output should be
    an array of the path you took to make it equal four
    ex/ [11, 6, 3, 5, 4], [19, 8, 5, 4] or [252, 18, 8, 5, 4]
    For context: https://puzzling.stackexchange.com/questions/29137/every-number-eventually-equals-4 */

// assuming num < 1,000,000. Pattern holds with higher numbers but just requires more checks
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
    //your code here
};