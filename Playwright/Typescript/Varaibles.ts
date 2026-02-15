/*
What is Typescript Variables?
varaibles is a container which is used to hold data values. 
In TypeScript, you can declare variables using three keywords: var, let, and const.
Each has different behabour in terms of : 
        1.scope (var is function-scoped, let and const are block-scoped)
        2.value assignment (var and let assignment is not mandatory, const must be assigned a value at the time of declaration)
        3.redeclaration (var can be redeclared, let and const cannot be redeclared)
        4.reassignment (var and let can be reassigned, const cannot be reassigned)
        5.hoisting (var is hoisted with undefined value, let and const are hoisted but not initialized)
1.Scope:
        var is function-scoped:
        varaibles declared with var are accessible anywhere inside the function in which they are declared, regardless of block boundaries.
        */
        function example() {
            if (true) {
                var x = 10; // x is declared with var
            }
            console.log(x); // Output: 10 (x is accessible here)
        }
        example();  
        /*
        Disadvantage: This can lead to unintended consequences, such as accidentally overwriting variables or creating bugs that are difficult to track down.
        Example:
        */

        function example1() {
            var x = 10; // x is declared with var   
            if (true) {
                var x = 20; // x is redeclared and reassigned with var
                console.log(x); // Output: 20 (x is accessible here)    
            }
            console.log(x); // Output: 20 (x is accessible here, but it has been overwritten)
        }   
        example1();
        /*
        explain above line by line:
                1. The function example() is defined.
                2. Inside the function, a variable x is declared and initialized with the value 10 using var.
                3. An if statement checks if the condition is true (which it is).  
                4. Inside the if block, the variable x is redeclared and reassigned with the value 20 using var.
                5. The value of x is logged to the console, which outputs 20 because x is accessible within the if block.
                6. After the if block, the value of x is logged again, which also outputs 20 because x is function-scoped and has been overwritten by the redeclaration inside the if block.
                7. The example() function is called to execute the code.    

        */
        /*
        Let and const are block-scoped:
        1.Variables declared with let and const are only accessible within the block (enclosed by curly braces {}) in which they are declared.
        2.safer and more predictable than var, as they prevent accidental variable overwriting and make it easier to track variable scope.

        Example:
        */
        function example3() {
            if (true) {
                let y = 10; // y is declared with let
                const z = 20;   
                console.log(y); // Output: 10 (y is accessible here)
                console.log(z); // Output: 20 (z is accessible here)
            }       
            // console.log(y); // Error: y is not defined (y is not accessible here)
            // console.log(z); // Error: z is not defined (z is not accessible here)
        }
        example3();
        /*
        explain above line by line:
                1. The function example3() is defined.
                2. Inside the function, an if statement checks if the condition is true (which it is).
                3. Inside the if block, a variable y is declared and initialized with the value 10 using let, and a constant z is declared and initialized with the value 20 using const.
                4. The values of y and z are logged to the console, which outputs 10 and 20 respectively because they are accessible within the if block.
                5. After the if block, there are attempts to log y and z again, which result in errors because y and z are block-scoped and are not accessible outside of the if block.
                6. The example3() function is called to execute the code.    
        */
/*       
2. Value Assignment and Declaration:
        1. var and let assignment is not mandatory, you can declare a variable without assigning a value to it.
           but const must be assigned a value at the time of declaration and cannot be left uninitialized.    
           Example:
        */
        var a; // variable declared with var, no value assigned 
        console.log(a); // Output: undefined (a is declared but not initialized, so it has the value undefined)
        let b; // variable declared with let, no value assigned
        console.log(b); // Output: undefined (b is declared but not initialized, so it has the value undefined)

       //  const c; // Error: Missing initializer in const declaration (const must be assigned a value at the time of declaration)
       //  console.log(c); // This line will not be executed due to the error in the previous line
        const d = 10; // variable declared with const and initialized with a value
        console.log(d); // Output: 10 (d is declared and initialized, so it has the value 10)
        /*
        explain above line by line:
                1. A variable a is declared using var without assigning a value, so it is initialized with the value undefined.
                2. The value of a is logged to the console, which outputs undefined.
                3. A variable b is declared using let without assigning a value, so it is also initialized with the value undefined.
                4. The value of b is logged to the console, which outputs undefined.
                5. An attempt is made to declare a constant c using const without assigning a value, which results in an error because const declarations must be initialized at the time of declaration.
                6. The line that attempts to log c will not be executed due to the error in the previous line.
        */
/*
3. Redeclaration:  
        1. var can be redeclared within the same scope, which can lead to unintended consequences and bugs.
        2. let and const cannot be redeclared within the same scope, which helps to prevent accidental variable overwriting and makes it easier to track variable scope.    
          Keyword                             Allow Redeclaration
            var                                   Yes
            let                                   No
            const                                 No

        Example:
        var e = 10; // variable declared with var and initialized with a value
        console.log(e); // Output: 10 (e is declared and initialized, so it has the value 10)
        var e = 20; // variable redeclared with var and reassigned with a new value
        console.log(e); // Output: 20 (e is redeclared and reassigned, so it has the new value 20)
        let f = 10; // variable declared with let and initialized with a value
        console.log(f); // Output: 10 (f is declared and initialized, so it has the value 10)
        let f = 20;
        console.log(f); // Error: Identifier 'f' has already been declared (f cannot be redeclared with let)
        const g = 10; // variable declared with const and initialized with a value
        const g = 20; // Error: Identifier 'g' has already been declared (g cannot be redeclared with const)
        console.log(g); // This line will not be executed due to the error in the previous line
*/
/*
4. Reassignment:
        1. var and let can be reassigned with new values, which allows for flexibility in variable usage.
        2. const cannot be reassigned with a new value after it has been initialized, which helps to ensure that the value remains constant throughout the program.
          Keyword                             Allow Reassignment
            var                                   Yes
            let                                   Yes
            const                                 No

        Example:
        var h = 10; // variable declared with var and initialized with a value
        console.log(h); // Output: 10 (h is declared and initialized, so it has the value 10)
        h = 20; // variable reassigned with a new value
        console.log(h); // Output: 20 (h is reassigned, so it has the new value 20)
        let i = 10; // variable declared with let and initialized with a value
        console.log(i); // Output: 10 (i is declared and initialized, so it has the value 10)
        i = 20; // variable reassigned with a new value
        console.log(i); // Output: 20 (i is reassigned, so it has the new value 20)
        const j = 10; // variable declared with const and initialized with a value
        console.log(j); // Output: 10 (j is declared and initialized, so it has the value 10)
        j = 20; // Error: Assignment to constant variable (j cannot be reassigned with a new value)
        console.log(j); // This line will not be executed due to the error in the previous line

5. Hoisting:(variable declarations are moved to the top of their scope before code execution)

  Variable Access Before Declaration:
    1.var --> Hoisted with an initial value of undefined, 
         which means that the variable declaration is moved to the top of its scope and initialized with undefined before any code is executed.
          This allows you to access a var variable before it is declared, but it will have the value undefined.

    2. let and const --> Hoisted but not initialized,(cannot be accessed before declaration)
        which means that the variable declaration is moved to the top of its scope,
         but it is not initialized until the line of code where it is declared is executed.  
          
        Keyword                             Hoisting Behavior
        var                                   Hoisted with undefined value
        let                                   Hoisted but not initialized
        const                                 Hoisted but not initialized  

        Example:
        console.log(k); // Output: undefined (k is hoisted with an initial value of undefined)
        var k = 10; // variable declared with var and initialized with a value
        console.log(k); // Output: 10 (k is declared and initialized, so it has the value 10)
        console.log(l); // Error: Cannot access 'l' before initialization (l is hoisted but not initialized, so it cannot be accessed before declaration)
        let l = 20; // variable declared with let and initialized with a value
        console.log(l); // Output: 20 (l is declared and initialized, so it has the value 20)
        console.log(m); // Error: Cannot access 'm' before initialization (m is hoisted but not initialized, so it cannot be accessed before declaration)
        const m = 30;
        console.log(m); // Output: 30 (m is declared and initialized, so it has the value 30)

        explain above line by line:
                1. An attempt is made to log the variable k before it is declared, which outputs undefined because k is hoisted with an initial value of undefined.
                2. The variable k is declared using var and initialized with the value 10.  
                3. The value of k is logged to the console, which outputs 10 because k is now declared and initialized.
                4. An attempt is made to log the variable l before it is declared, which results in an error because l is hoisted but not initialized, so it cannot be accessed before declaration.
                5. The variable l is declared using let and initialized with the value 20.
                6. The value of l is logged to the console, which outputs 20 because l is now declared and initialized. 
                7. An attempt is made to log the variable m before it is declared, which results in an error because m is hoisted but not initialized, so it cannot be accessed before declaration.
                8. The variable m is declared using const and initialized with the value 30.
                9. The value of m is logged to the console, which outputs 30 because m is now declared and initialized.  
                
 #Summary: preparing Tabular format for quick references By Applying Border:
Feature                             var                                   let                                   const
Scope                               Function-scoped                       Block-scoped                          Block-scoped
Value Assignment                    Not mandatory                          Not mandatory                          Must be assigned at declaration 
Redeclaration                       Allowed                                Not allowed                            Not allowed
Reassignment                       Allowed                                Allowed                                Not allowed
Hoisting                            Hoisted with undefined value           Hoisted but not initialized            Hoisted but not initialized 
Best Use                             Avoid                                 Changingvalue                           Constant

# Best Practices for Using Variables in TypeScript:
    Avoid var --> it can cause unexpected bugs due to its function-scope
    use Let -->When a varaibles need to be reassigned with a new value
    use const --> When a variable should not be reassigned with a new value (constant)

*/  

