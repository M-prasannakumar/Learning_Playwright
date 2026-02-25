/*                      Functions in TypeScript

what is a function?
A function is a reusable block of code that performs a specific task. It allows you to break down your code into smaller, 
more manageable pieces, and can be called multiple times throughout your program. 
In TypeScript, you can define functions using the function keyword, 
followed by the function name, parameters (if any), and the function body.

Why do we need to use functions?
1. Reusability: Functions allow you to reuse code, which can save time and reduce errors. 
2. Modularity: Functions help to break down complex problems into smaller, more manageable pieces, making it easier to understand and maintain your code.
3. Abstraction: Functions can hide the implementation details of a task, allowing you to focus on the overall logic of your program.
4. Testing: Functions can be tested independently, which can help to identify and fix bugs more easily.
5. Collaboration: Functions can be shared and reused across different projects and teams, making it easier to collaborate and share code.

How we can reuse a function?
In TypeScript, you can reuse a function by calling it multiple times with different arguments.
When you call a function, you can pass different values as arguments, and the function will execute with those values. 
This allows you to perform the same task with different data without having to write the same code multiple times.

Types of functions in TypeScript:
1. Function Declaration is also known as Named Function
2. Function Expression is also known as Anonymous Function
3. Arrow Function is also known as Lambda Function
4. Anonymous Function
5. Recursive Function
6. Generator Function
7. Async Function
8. Higher-Order Function
9. Callback Function
10. IIFE (Immediately Invoked Function Expression)

1. Function Declaration or Named Function:
A function declaration is a way to define a function using the function keyword, followed by the function name, parameters (if any), and the function body. 
Function declarations are hoisted, which means they can be called before they are defined in the code.  

Function declaration is also known as named function because it has a name that can be used to call the function.

syntax:
function functionName(parameters) {
    // code to be executed
}
Example: write a function to calculate the area of a rectangle.
Logic: area of a rectangle is calculated by multiplying its length and width.   
function calculateArea(length: number, width: number): number {
    return length * width;
}
let area: number = calculateArea(5, 3);
console.log(`The area of the rectangle is ${area}.`);

output: The area of the rectangle is 15.

KEy point about function declaration:
1. Function declarations are hoisted, which means they can be called before they are defined in the code. 
2. Function declarations must have a name, and the name is used to call the function.


Example: Function declarations are hoisted, which means they can be called before they are defined in the code. 
calculateArea(5, 3); // This will work because of hoisting
function calculateArea(length: number, width: number): number {
    return length * width;
}
    
2. Function Expression or Anonymous Function:
Function expression is also known as anonymous function because it does not have a name.
   An anonymous function is a function that does not have a name. 
   it is usually assigned to a variable which acts as the function name.
   Function expressions are not hoisted, which means they cannot be called before they are defined in the code.


syntax: 
let functionName = function(parameters) {
    // code to be executed
}

Example: write a function expression to calculate the area of a rectangle.

Logic: area of a rectangle is calculated by multiplying its length and width. 

let calculateArea = function(length: number, width: number): number {
    return length * width;
}
let area: number = calculateArea(5, 3);
console.log(`The area of the rectangle is ${area}.`);
output: The area of the rectangle is 15.

Key point about function expression:
1. Function expressions are not hoisted, which means they cannot be called before they are defined in the code. 
2. Function expressions can be anonymous, meaning they do not have a name, and are assigned to a variable that can be used to call the function.


Example: Function expressions are not hoisted, which means they cannot be called before they are defined in the code. 
calculateArea(5, 3); // This will result in an error because calculateArea is not defined yet
let calculateArea = function(length: number, width: number): number {
    return length * width;
}

3. Arrow Function or Lambda Function:
An arrow function is a more concise way to write a function expression. 
It uses the => syntax and does not have its own this, arguments, or super keywords.
Arrow function is also known as lambda function because it is a shorter syntax for writing functions.
syntax:
let functionName = (parameters): returnType => {
    // code to be executed
}
Example: write an arrow function to print square of a number.
let printSquare = (num: number): void => {
    console.log(`The square of ${num} is ${num * num}.`);
}
printSquare(5);
output: The square of 5 is 25.

Key points :
1.Use =>(fat arrow) insted of function keyword to define an arrow function.
2.Single-line functions can omit the curly braces and the return keyword. For example:
let add = (a: number, b: number): number => a + b;
console.log(add(3, 4)); // Output: 7

3.Multi-line functions require curly braces and a return statement. For example:
let multiply = (a: number, b: number): number => {
    let result = a * b;
    return result;
}
console.log(multiply(3, 4)); // Output: 12

Key point about arrow function:
1. Arrow functions are more concise than regular function expressions.
2. Arrow functions do not have their own this, arguments, or super keywords.
3. Arrow functions are not hoisted, so they must be defined before they are called.
4. Arrow functions are often used in functional programming and for shorter syntax in callbacks and event handlers.

Example: Arrow functions are not hoisted, so they must be defined before they are called.
printEvenNumbers(); // This will result in an error because printEvenNumbers is not defined yet
let printEvenNumbers = () => {
    for (let i: number = 1; i <= 10; i++) { 
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}   

Explain the difference between Method and Function:
Explanation  in one line in table format:
| Aspect       | Method                                      | Function                                    |
|--------------|---------------------------------------------|---------------------------------------------|
| Definition   | A function associated with an object or class | A standalone block of code that can be called independently |
| Context      | Defined within the context of an object or class | Not associated with any object or class |
| Access       | Can access properties and other methods of the object using this keyword | Cannot access properties or methods of any object unless passed as arguments |


A method is a function that is associated with an object or a class. 
It is defined within the context of an object and can access the properties and other methods of that object using the this keyword. 
A function, on the other hand, is a standalone block of code that can be called independently and does not have access to the properties or methods of any object unless they are passed as arguments.







 


