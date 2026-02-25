/*
What is Typescript?
Typescript was developed by Microsoft
Typescript is a superset of JavaScript that adds extra features to JavaScript such as static typing, interfaces,modules,enums,
generics,access modifiers, and compile-time error checking,classes

Note: Javacript Introduces classes in ES6 (2015)
What is ES6?
ES6 (ECMAScript 2015) is the sixth major release of the ECMAScript language specification.
ECMAScript (ES) is a Kind of rule book that defines how JavaScript should work.
  example : syntax (how code should be written), data types, keywords (let, const, var), and  behaviour of the language.


How does Typescript work?
1. you  write code in typescript(.ts files)
2. then you run the typescript compiler (tsc) to transpile your code to plain JavaScript (.js files)
3. then you can run the generated JavaScript code in any environment that supports JavaScript.

Javascript vs Typescript
1. Typescript is a statically typed language, while JavaScript is a dynamically typed language.
    Example: javascript(Dynamic typing )
            1.No static type checking, 
            2.variables can hold values of any type and can change types at runtime.
    let message = "Hello, World!";// This is String type
    message = 42; //  changing data type to number  This is allowed in JavaScript

    Example: Typescript(Static typing)
        1.A superset of javaScript that (adds static typing)
        2.variable must match their declared types and cannot change types at runtime.

        let message: string = "Hello, World!"; // This is String type
        message = 42; // ompile-time error in TypeScript because message is declared as a string and cannot be assigned a number.
2. Typescript includes features such as classes, interfaces, and modules, which are not present in JavaScript.
3. Typescript code needs to be transpiled to JavaScript before it can be executed, while JavaScript can be executed directly in the browser or on the server.

Why use Typescript?
1.Helps to catch errors early:(before running the code)
2.Makes Larege projects easier to manage and maintain
3.works smoothly with existing JavaScript code and libraries

Setting up Typescript
   To begin using TypeScript, you will need this tools:
    1.Node.js and npm (Node Package Manager)--> this let you run Typescript complier and manage dependencies in your project.
    2.Typescript compiler (tsc)--> this is the tool that transpiles your TypeScript code into JavaScript.
    3.VS code( recommended) A free code editor that works great with Typescript 

 Step1: Install Node.js and npm
    1.You can download and install Node.js from the official website: https://nodejs.org/
      npm is included with Node.js, so you will have it installed automatically when you install Node.js.
    2.Set Environment variable for node and npm in windows
        1. Open the Start menu and search for "Environment Variables".
        2. Click on "Edit the system environment variables".
        3. In the System Properties window, click on the "Environment Variables" button.
        4. In the Environment Variables window, under "System variables", find the "Path" variable and click "Edit".
        5. Click "New" and add the path to your Node.js installation (C:\Program Files\nodejs\  C:\Program Files\nodejs\).
        6. Click "OK" to close all windows. 
    3. Verify the installation by opening a command prompt and running the following commands:
        node -v or node --version
        npm -v or npm --version
        you should see the version numbers for both Node.js and npm, indicating that they are installed correctly.


 Step2: Install Typescript compiler (tsc)
     1.open a command prompt and run the following command to install the TypeScript compiler globally:
        npm install -g typescript
     2. Verify the installation by running the following command:
        tsc -v or tsc --version
        you should see the version number for the TypeScript compiler, indicating that it is installed correctly.
Step3: Install TSX(To run typescript Directly without transpiling) 
         To execute TypeScript files directly without compiling them first 
         1. To install TSX, run the following command in your terminal:
            npm install -g tsx
     
step4: install VS code
            1. You can download and install Visual Studio Code from the official website: https://code.visualstudio.com/
            2. run the installtion process and follow the prompts to complete the installation.
            3. Once installed, you can open Visual Studio Code and start writing TypeScript code.
 
 Quick Summary:
 Node.js --> Runs the typescript
 Typescript compiler (tsc) --> Transpiles typescript to javascript
 VS code --> Code editor for writing typescript code
 TSX --> Run typescript directly without transpiling(Compilling)
 
 SimpleSteps to create and run a TypeScript file:
 1.create a project folder-->make a new folder for your TypeScript project (e.g., my-typescript-project).
 2. Open the folder in Visual Studio Code -->File > Open Folder > Select your project folder.
 3.create a new TypeScript file --> In Visual Studio Code, right-click on the project folder 
   in the Explorer pane and select "New File". Name the file with a .ts extension (e.g., app.ts).
   add the code example: console.log("Hello, this is a TypeScript file!");
 4.open the terminal in Visual Studio Code -->go to Terminal-->New Terminal
  shortCuts:
    Windows: Ctrl + `
    Mac: Cmd + `
5. compile the TypeScript file to JavaScript --> In the terminal, run the following command:
   tsc app.ts
   This will generate a JavaScript file named app.js in the same directory.
6. run the generated JavaScript file --> In the terminal, run the following command:
   node app.js
   You should see the output: "Hello, this is a TypeScript file!" in the terminal.
7. Alternatively, you can run the TypeScript file directly using TSX without compiling it first:
   tsx app.ts
   This will execute the TypeScript file directly and you should see the 
   same output: "Hello, this is a TypeScript file!" in the terminal.   

*/