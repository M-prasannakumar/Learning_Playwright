/*
What is Operators in Typescript?
Operators are special symbols or keywords that perform specific operations on one or more operands (values or variables) and produce a result.

Typescript supports various types of operators, including:
1. Arithmetic Operators: Used for performing mathematical operations like addition (+), subtraction (-), multiplication (*), division (/), and modulus (%).
2. Assignment Operators: Used for assigning values to variables, such as the simple assignment operator (=) and compound assignment operators (+=, -=, *=, /=, %=).
3. Comparison Operators: Used for comparing values and returning a boolean result, such as equal to (==), not equal to (!=), greater than (>), less than (<), greater than or equal to (>=), and less than or equal to (<=).    
4. Logical Operators: Used for combining boolean expressions, such as logical AND (&&), logical OR (||), and logical NOT (!).
5. Ternary Operator: A shorthand for an if-else statement, represented by the syntax condition ? expressionIfTrue : expressionIfFalse.
6. Type Operators: Used for working with types in TypeScript, such as the typeof operator (used to get the type of a variable) and the instanceof operator (used to check if an object is an instance of a specific class).

1. Arithmetic Operators:
        Arithmetic operators are used to perform mathematical operations on numbers. 
        Here are some examples of arithmetic operators in TypeScript:
        - Addition (+): Adds two numbers together.
        Example:
        let a = 5;
        let b = 10;
        let sum = a + b; // sum will be 15

        - Subtraction (-): Subtracts one number from another.
        Example:
            let a = 10;
            let b = 5;
            let difference = a - b; // difference will be 5

        - Multiplication (*): Multiplies two numbers together.
            Example:
            let a = 5;
            let b = 10;
            let product = a * b; // product will be 50

        - Division (/): Divides one number by another.
            Example:
            let a = 10;
            let b = 5;
            let quotient = a / b; // quotient will be 2

        - Modulus (%): Returns the remainder of a division operation.
            Example:
            let a = 10;
            let b = 3;
            let remainder = a % b; // remainder will be 1

        -Exponentiation (**): Raises the first operand to the power of the second operand.
            Example:
            let a = 2;
            let b = 3;
            let result = a ** b; // result will be 8 (2 raised to the power of 3)
            
2. Assignment Operators:
        Assignment operators are used to assign values to variables. 
        Here are some examples of assignment operators in TypeScript:
        - Simple Assignment (=): Assigns a value to a variable.
        Example:
        let x = 10; // x is assigned the value 10

        - Addition Assignment (+=): Adds a value to the variable and assigns the result back to the variable.
        Example:
        let x = 10;
        x += 5; // x is now 15 (10 + 5)
        console.log(x); // Output: 15

        - Subtraction Assignment (-=): Subtracts a value from the variable and assigns the result back to the variable.
        Example:
        let x = 10;
        x -= 5; // x is now 5 (10 - 5)
        console.log(x); // Output: 5

        - Multiplication Assignment (*=): Multiplies the variable by a value and assigns the result back to the variable.
        Example:
        let x = 10; 
        x *= 5; // x is now 50 (10 * 5)
        console.log(x); // Output: 50

        - Division Assignment (/=): Divides the variable by a value and assigns the result back to the variable.
        Example:    
        let x = 10;
        x /= 5; // x is now 2 (10 / 5)
        console.log(x); // Output: 2

        - Modulus Assignment (%=): Takes the modulus of the variable by a value and assigns the result back to the variable.
        Example:
        let x = 10;
        x %= 3; // x is now 1 (10 % 3)
        console.log(x); // Output: 1

        - Exponentiation Assignment (**=): Raises the variable to the power of a value and assigns the result back to the variable.
        Example:
        let x = 2;
        x **= 3; // x is now 8 (2 raised to the power of 3)
       console.log(x); // Output: 8

3. Comparison Operators:(also known as relational operators <, >, <=, >=,!=, ==, ===, !==)
        Comparison operators are used to compare two values and return a boolean result (true or false). 

    Here are some examples of comparison operators in TypeScript:   
        - Equal to (==): Checks if two values are equal (performs type coercion).
        Example:
        let a = 5;  
        let b = '5';
        console.log(a == b); // Output: true (because of type coercion)

        - Not equal to (!=): Checks if two values are not equal (performs type coercion).
        Example:
        let a = 5;
        let b = '5';
        console.log(a != b); // Output: false (because of type coercion)

        - Strict equal to (===): Checks if two values are equal and of the same type (no type coercion).
        Example:
        let a = 5;  
        let b = '5';
        console.log(a === b); // Output: false (because a is a number and b is a string)

        - Strict not equal to (!==): Checks if two values are not equal or not of the same type (no type coercion).
        Example:    
        let a = 5;
        let b = '5';
        console.log(a !== b); // Output: true (because a is a number and b is a string)

        - Greater than (>): Checks if the left value is greater than the right value.
        Example:    
        let a = 10;
        let b = 5;
        console.log(a > b); // Output: true (because 10 is greater than 5)

        - Less than (<): Checks if the left value is less than the right value.
        Example:    
        let a = 10;
        let b = 5;
        console.log(a < b); // Output: false (because 10 is not less than 5)

        - Greater than or equal to (>=): Checks if the left value is greater than or equal to the right value.
        Example:
        let a = 10;
        let b = 10;
        console.log(a >= b); // Output: true (because 10 is equal to 10)    
        let c = 5;
        console.log(a >= c); // Output: true (because 10 is greater than 5)
        let d = 15;
        console.log(a >= d); // Output: false (because 10 is not greater than or equal to 15)

        - Less than or equal to (<=): Checks if the left value is less than or equal to the right value.
        Example:
        let a = 10;
        let b = 10;
        console.log(a <= b); // Output: true (because 10 is equal to 10)
        let c = 15;
        console.log(a <= c); // Output: true (because 10 is less than 15)
        let d = 5;
        console.log(a <= d); // Output: false (because 10 is not less than or equal to 5)

        - Typeof operator: Used to get the type of a variable or expression.
        Example:
        let a = 5;
        console.log(typeof a); // Output: "number" (because a is a number)
        let b = "Hello";
        console.log(typeof b); // Output: "string" (because b is a string)
        let c = true;
        console.log(typeof c); // Output: "boolean" (because c is a boolean)
        let d = { name: "Alice", age: 30 };
        console.log(typeof d); // Output: "object" (because d is an object)
        let e = [1, 2, 3];
        console.log(typeof e); // Output: "object" (because arrays are a type of object in JavaScript/TypeScript)
        let f = null;
        console.log(typeof f); // Output: "object" (this is a quirk in JavaScript/TypeScript where null is considered an object)
        let g = undefined;
        console.log(typeof g); // Output: "undefined" (because g is undefined)

        - Instanceof operator: Used to check if an object is an instance of a specific class or constructor function.
        Example:
        class Person {
            name: string;   
            constructor(name: string) { 
                this.name = name;
            }
        }
        let person1 = new Person("Alice");
        console.log(person1 instanceof Person); // Output: true (because person1 is an instance of the Person class)
        let person2 = {};
        console.log(person2 instanceof Person); // Output: false (because person2 is not an instance of the Person class)
        let date = new Date();
        console.log(date instanceof Date); // Output: true (because date is an instance of the Date class)
        console.log(date instanceof Object); // Output: true (because all objects in JavaScript/TypeScript are instances of the Object class)
        console.log(date instanceof Array); // Output: false (because date is not an instance of the Array class)
4. Logical Operators:(&&, ||, !)
        Logical operators we can use between boolean variables to perform logical operations.
        These return true or false based on the logic of the operation.
        A       B      && (AND)    || (OR)    ! (NOT)
        true   true    true        true      false
        true   false   false       true      false
        false  true    false       true      true
        false  false   false       false     true

        Here are some examples of logical operators in TypeScript:
        - Logical AND (&&): Returns true if both operands are true, otherwise returns false. 
        Example:
        let a = true;
        let b = false;
        console.log(a && b); // Output: false (because both a and b are not true)
        let c = true;
        console.log(a && c); // Output: true (because both a and c are true)

        - Logical OR (||): Returns true if at least one of the operands is true, otherwise returns false.
        Example:
        let a = true;
        let b = false;
        console.log(a || b); // Output: true (because at least one of a or b is true)
        let c = false;
        console.log(b || c); // Output: false (because neither b nor c is true)

        - Logical NOT (!): Returns true if the operand is false, and returns false if the operand is true.
        Example:
        let a = true;
        console.log(!a);
        // Output: false (because a is true, so !a is false)
        let b = false;
        console.log(!b);    
        // Output: true (because b is false, so !b is true)

     Note : Sometimes, we can use logical operators with combination of relational operators
     Combimtaiotn of logical and relational operators:
        let a = 10;
        let b = 5;
        let c = 15;
        console.log(a > b && a < c);
        // Output: true (because a is greater than b and a is less than c)
        console.log(a > b || a > c);
        // Output: true (because a is greater than b, even though a is not greater than c)
        console.log(!(a > b));
        // Output: false (because a is greater than b, so !(a > b) is false)
        console.log(!(a < b));  
        // Output: true (because a is not less than b, so !(a < b) is true)
5. Ternary Operator(?:) Based on condition we can decide the output of the expression. It is a shorthand for an if-else statement.
           or
    The ternary operator is a shorthand for an if-else statement that allows you to evaluate a condition and 
    return one of two values based on whether the condition is true or false. 

     The syntax for the ternary operator is:
        condition ? expressionIfTrue : expressionIfFalse;

    Here are some examples of the ternary operator in TypeScript:
        let age = 18;
        let canVote = age >= 18 ? "Yes, you can vote!" : "No, you cannot vote.";
        console.log(canVote);           
        // Output: "Yes, you can vote!" (because age is greater than or equal to 18) 
    Note: age>=18 is a expression that evaluates to true or false. If it is true, 
              the expression after the ? is returned; if it is false, the expression after the : is returned.
              
 Difference between expression and condition:
     1. An expression is a combination of values, variables, operators, and function calls that can be evaluated to produce a value.
     2. A condition is a specific type of expression that evaluates to a boolean value (true or false) and is used to control the flow of execution in conditional statements (like if-else) and loops.
        age = 16;
        canVote = age >= 18 ? "Yes, you can vote!" : "No, you cannot vote.";
        console.log(canVote);           
        // Output: "No, you cannot vote." (because age is less than 18)

        let number = 5;
        let result = number % 2 === 0 ? "Even" : "Odd";
        console.log(result);    
        // Output: "Odd" (because 5 is not divisible by 2, so it is odd)
        number = 10;
        result = number % 2 === 0 ? "Even" : "Odd";
        console.log(result);    
        // Output: "Even" (because 10 is divisible by 2, so it is even) 
Note: The above code without the ternary operator would look like this:
        let age = 18;
        let canVote;
        if (age >= 18) {
            canVote = "Yes, you can vote!";
        } else {    
            canVote = "No, you cannot vote.";
        }
        console.log(canVote);   
        let number = 5;
        let result;
        if (number % 2 === 0) {
            result = "Even";
        } else {
            result = "Odd";
        }
        console.log(result);
  */      


