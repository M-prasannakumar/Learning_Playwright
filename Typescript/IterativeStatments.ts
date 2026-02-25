/*                      iterative statements or Looping statements
What is loop?
A loop is a programming construct that allows you to repeat a block of code multiple times based on a specified condition. 

Why we need to use loops?
Loops are used to perform repetitive tasks without having to write the same code multiple times. 
They help to reduce code redundancy and make our programs more efficient and easier to read.

There are three types of iterative statements in TypeScript:
1. while loop
2. do...while loop
3. for loop  

1. while loop:
The while loop is used to execute a block of code as long as a specified condition is true.
syntax:
while (condition) {
    // code to be executed
}

three important steps about while loop:
1. Initialization: Before the loop starts, you need to initialize any variables that will be used in the loop condition.
2. Condition: The loop will continue to execute as long as the condition evaluates to true. If the condition is false, the loop will terminate.
3. Increment/Decrement: Inside the loop, you typically need to update the variables used in the condition to eventually make it false and prevent an infinite loop.

Important points about while loop:
1. If the condition is false at the beginning, the code block inside the while loop will not execute at all.
2. If the condition never becomes false, it will result in an infinite loop, which can cause your program to crash or become unresponsive.

Example: write a program to print numbers from 1 to 5 using while loop.
let i: number = 1;
while (i <= 5) {
    console.log(i);
    i++;
}   

Example: write a program to calculate the factorial of a number using while loop.
Logic: factorial of a number n is the product of all positive integers less than or equal to n. 
        It is denoted by n!. For example, 5! = 5 * 4 * 3 * 2 * 1 = 120.

let num: number = 5;
let factorial: number = 1;
let j: number = 1;
while (j <= num) {
    factorial *= j;
    j++;
}   
console.log(`The factorial of ${num} is ${factorial}.`);

do...while loop:
The do...while loop is similar to the while loop, but it guarantees that the code block will be executed at least once, even if the condition is false.
syntax:
do {
    // code to be executed
} while (condition);        

Important points about do...while loop:
1. The code block inside the do...while loop will always execute at least once, regardless of the condition.
2. If the condition is false after the first execution, the loop will terminate and will not execute again.

Example: write a program to print numbers from 1 to 5 using do...while loop.
let k: number = 1;
do {
    console.log(k); 
    k++;
} while (k <= 5);

Example: write a program to print number from 10 to 1 using do...while loop.
let m: number = 10;
do {
    console.log(m); 
    m--;
} while (m >= 1);

for loop:
The for loop is a more concise way to write a loop that includes initialization, condition, and increment/decrement in a single line.
syntax:
for (initialization; condition; increment/decrement) {
    // code to be executed
}
Important steps about for loop:
1. Initialization: This step is executed only once at the beginning of the loop. It is used to initialize any variables that will be used in the loop condition.
2. Condition: This step is evaluated before each iteration of the loop. If the condition evaluates to true, the code block inside the loop will be executed. If it evaluates to false, the loop will terminate.
3. Increment/Decrement: This step is executed after each iteration of the loop. It is typically used to update the variables used in the condition to eventually make it false and prevent an infinite loop.
Example: write a program to print numbers from 1 to 5 using for loop.
for (let n: number = 1; n <= 5; n++) {
    console.log(n);
}
    example explan the iteration of the for loop:
1. Initialization: let n: number = 1;
2. Condition: n <= 5; (true for the first iteration)
3. Code block execution: console.log(n); (prints 1)
4. Increment: n++ (n becomes 2)
5. Condition: n <= 5; (true for the second iteration)
6. Code block execution: console.log(n); (prints 2)
7. Increment: n++ (n becomes 3)
8. Condition: n <= 5; (true for the third iteration)
9. Code block execution: console.log(n); (prints 3)
10. Increment: n++ (n becomes 4)
11. Condition: n <= 5; (true for the fourth iteration)
12. Code block execution: console.log(n); (prints 4)
13. Increment: n++ (n becomes 5)
14. Condition: n <= 5; (true for the fifth iteration)
15. Code block execution: console.log(n); (prints 5)
16. Increment: n++ (n becomes 6)
17. Condition: n <= 5; (false, loop terminates)


Expalain about break and continue statements:
1. break statement: The break statement is used to exit a loop prematurely when a certain condition is met. When the break statement is executed, the loop will terminate immediately, and the program will continue with the next statement after the loop.
Example: write a program to print numbers from 1 to 10, but stop printing when the number is 5.
for (let p: number = 1; p <= 10; p++) {
    if (p === 5) {
        break; // exit the loop when p is 5
    }
    console.log(p); // prints numbers from 1 to 4
}
    output: 1 2 3 4

2. continue statement: The continue statement is used to skip the current iteration of a loop and move on to the next iteration. When the continue statement is executed, the rest of the code inside the loop for that iteration will be skipped, and the loop will proceed with the next iteration.
Example: write a program to print numbers from 1 to 10, but skip printing when the number is 5.
for (let q: number = 1; q <= 10; q++) {
    if (q === 5) {
        continue; // skip the current iteration when q is 5
    }
    console.log(q); // prints numbers from 1 to 10 except 5
}
    output: 1 2 3 4 6 7 8 9 10 
    






Important points about for loop:
1. The initialization is executed only once at the beginning of the loop.
2. The condition is evaluated before each iteration, and if it evaluates to false, the loop will terminate.
3. The increment/decrement is executed after each iteration of the loop.



