/* 
What is Conditional Statements?
Conditional statements are used to perform different actions based on different conditions. 
In TypeScript, we can use if, else if, and else statements to create conditional logic in our code.

When to use Conditional Statements?
When every you want to execute a set of statements or group of statement based on certain condition then you can use conditional statements.
Types of Conditional Statements in TypeScript:
1. if statement
2. if...else statement
3. if...else if...else statement
4. switch statement

1. if statement:
The if statement is used to execute a block of code if a specified condition is true. 
If the condition is false, the block of code will be skipped.
 syntax:
if (condition) {
    // code to be executed if condition is true
}
    condition: It is an expression that evaluates to true or false. 
    note: when it return true or false is based on relational /logical operator because they return boolean value.

Example:
let age: number = 18;
if (age >= 18) {
    console.log("You are eligible to vote.");
}   

2. if...else statement:
The if...else statement is used to execute one block of code if a specified condition is true, 
and another block of code if the condition is false.
syntax:
if (condition) {
    // code to be executed if condition is true 
} else {
    // code to be executed if condition is false
}

Example: write a program to check even or odd number using if...else statement.

Logic: if a number is divisible by 2 then it is even otherwise it is odd.

let value: number = 16;    
if (value % 2 === 0) {
    console.log("The number is even.");
}   else {
    console.log("The number is odd.");
}   

3. if...else if...else statement:
The if...else if...else statement is used to execute one block of code among multiple blocks of code based on different conditions.
syntax:
if (condition1) {
    // code to be executed if condition1 is true
} else if (condition2) {
    // code to be executed if condition2 is true
} else {
    // code to be executed if both condition1 and condition2 are false
}
    Example: write a program to check the grade of a student based on their marks using if...else if...else statement.

Logic: if marks are greater than or equal to 90 then grade is A,
      if marks are greater than or equal to 80 then grade is B, 
      if marks are greater than or equal to 70 then grade is C, 
      if marks are greater than or equal to 60 then grade is D, 
      otherwise grade is F.

let marks: number = 85;
if (marks >= 90) {
    console.log("Grade: A");
} else if (marks >= 80) {
    console.log("Grade: B");
} else if (marks >= 70) {
    console.log("Grade: C");
} else if (marks >= 60) {
    console.log("Grade: D");
} else {
    console.log("Grade: F");
}          
    Note:  difference between condition and expression
    condition: It is an expression that evaluates to true or false.
    expression: It is a combination of variables, operators, and values that evaluates to a single value.

4. switch statement:
The switch statement is used to perform different actions based on different conditions.
 It is an alternative to using multiple if...else if...else statements when you have many conditions to check.
syntax:
switch (expression) {
    case value1:    
        // code to be executed if expression === value1
        break;
    case value2:
        // code to be executed if expression === value2
        break;
    // more cases...
    default:
        // code to be executed if expression doesn't match any case
}
    expression: It is evaluated once and compared with the values of each case. 
    If there is a match, the corresponding block of code is executed.   
Example: write a program to check the day of the week based on a number using switch statement.
Logic: if number is 1 then day is Sunday,
      if number is 2 then day is Monday, 
      if number is 3 then day is Tuesday,   
      if number is 4 then day is Wednesday,
      if number is 5 then day is Thursday,
      if number is 6 then day is Friday,
      if number is 7 then day is Saturday,
      otherwise it is an invalid number.   

let dayNumber: number = 3; 
switch (dayNumber) {    
    case 1:
        console.log("Day: Sunday");
        break;
    case 2:
        console.log("Day: Monday");
        break;
    case 3:
        console.log("Day: Tuesday");
        break;
    case 4:
        console.log("Day: Wednesday");
        break;
    case 5:
        console.log("Day: Thursday");
        break;
    case 6:
        console.log("Day: Friday");
        break;  
    case 7:
        console.log("Day: Saturday");
        break;
    default:
        console.log("Invalid number. Please enter a number between 1 and 7.");
}   
            
      
    





