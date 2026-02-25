/*
What is Playwright?

Playwright is an open-source automation testing tool used to test web applications automatically.
It is developed by Microsoft.

It helps testers and developers check whether a website or web application works correctly on different browsers and devices.

Why Playwright is used?
    Playwright is mainly used for:
    Web application testing (manual work done automatically)
    Functional testing
    Regression testing
    End-to-end (E2E) testing
    UI automation

Which browsers does Playwright support?
    Playwright supports all major browsers:
    Chromium (Chrome, Edge)
    Firefox
    WebKit (Safari)
    So one test can run on multiple browsers

Key features of Playwright?
    ✔ Fast and reliable automation
    ✔ Works on multiple browsers
    ✔ Auto-waits for elements (no need for manual waits most of the time)
    ✔ Supports mobile view testing
    ✔ Can take screenshots and videos
    ✔ Supports headless and headed mode
    ✔ Easy to set up
    ✔ Supports API testing also

Difference from Selenium (short)
    Playwright	                        Selenium
    Faster	                            Slower
    Built-in waits	                    Need manual waits
    Supports modern web apps well   	Sometimes unstable
    Single tool for all browsers	    Needs different drivers    

In one line
Playwright is a modern automation testing tool used to automatically test web applications across different browsers using simple code.

Prerequisites for Installing Playwright
1.Install Node.js – Required for running JavaScript-based projects.
2.Install Visual Studio Code (VS Code) – A recommended code editor for development.
3.Create a Project Folder – Open the folder using VS Code to begin development.

Installing Playwright
Open the terminal in your project folder and run:
         npm init playwright@latest

This command initializes a Playwright project and creates the following files and folders:
    •package.json – Manages project dependencies and scripts.
    •playwright.config.js – Contains Playwright configuration settings.
    •tests/ – Directory for organizing test files.

To check the installed version of Playwright:
      npx playwright --version

Writing and Running Your First Playwright Test
Step 1: Create a New Test File
Inside the tests/ directory, create a new file, for example, FirstTest.spec.ts.

Step 2: Import Playwright Module
 Add the following line at the top of your test file:
    const { test, expect } = require('@playwright/test');
    •test is used to define test cases.
    •expect is used for assertions.

Step 3: Create a Test Block
 Write your test using the test function:
        test('Verify page title', async ({ page }) => {
        await page.goto('https://example.com');
        const title = await page.title();
        expect(title).toHaveURL('Example Domain');
        })
Why async and await mentioned in the test block?
    Playwright methods return Promises?
    Playwright methods like:
        page.goto()
        page.title()
        page.url()
    talk to the browser (open page, load data, get title).
    These actions take some time, so they run asynchronously and return a Promise.
    If we don’t wait for them, JavaScript will move to the next line before the browser finishes the task.

What is async?
    async is used to declare a function that can work with await.
    👉 Meaning:
    This function can handle asynchronous (time-taking) operations.
    Example:
        const title = page.title();
        console.log(title);
        Output will be:
        Promise { <pending> }
    Because Playwright has not finished getting the title yet.

Correct Example using async and await
            async function getPageTitle() {
            await page.goto("https://example.com");   // wait until page loads
            const title = await page.title();         // wait until title is fetched
            console.log(title);
            }
What happens step by step:
    async allows us to use await.
    await page.goto() → waits for page to open.
    await page.title() → waits for title.
    Then prints the result.

Real-life analogy
    Think of ordering tea ☕:
Without await:
    Order tea and immediately try to drink it (but it’s not ready).
With await:
    Order tea → wait until it’s prepared → then drink it.

Keyword	Meaning
async	Declares a function that can use await and returns a Promise
await	Waits until an asynchronous task (Promise) is completed  

Another small Playwright example
        async function checkUrl() {
        await page.goto("https://google.com");
        const url = await page.url();
        console.log(url);
        }

this ensures:
    Page loads first
    Then URL is read
    Then printed

key components of Playwright Architecture
1.Client / Language Binding
  Playwright can be used with many programming languages like Java, JavaScript, TypeScript, and Python to write test scripts.
2.WebSocket
Playwright uses WebSocket to keep one continuous connection between client and browser, so tests run faster without reconnecting again and again.
3.Browser Context
 Browser Context is a separate browser session with its own cookies and data, which allows running multiple tests in parallel safely and quickly.
4.Internal Working (HTTP vs WebSocket)
 Unlike HTTP which opens and closes connections for every request, Playwright uses one WebSocket connection for all test actions, making execution much faster and efficient.
5.Where Playwright is Useful
 Playwright is best for modern applications that need fast, parallel, and cross-browser testing like trading apps, gaming apps, Slack, and GitHub.

Running Tests and Debugging
         Command                                                                Description
npx playwright test                                                   Runs all tests on all browsers in headlessmode.
npx playwright test --headed                                          Runs all tests in headed (non-headless)mode.
npx playwright show-report                                            Opens the HTML test report.
npx playwright test mytest.spec.ts                                    Runs a specific test file.
npx playwright test --project=chromium --headed mytest.spec.ts        Runs a specific test file only on Chromium in headed mode.
npx playwright test mytest1.spec.ts mytest2.spec.ts                   Runs multiple specified test files.
npx playwright test -g "test title"                                   Runs the test(s) that match the given title.
npx playwright test --project=chromium                                Runs all tests on the Chromium browser only.
npx playwright test --debug                                           Runs tests in debug mode.
npx playwright test example.spec.ts --debug                           Debugs a specific test file.
npx playwright test mytest.spec.ts –ui                                Run the test in UI Mode


             What is Playwright Architecture?
Playwright Architecture describes how Playwright works internally to control browsers and execute test scripts.
It follows a client–server model:
Your test code (client) → Playwright engine → Browser → Web application
Playwright communicates directly with browsers using browser-specific protocols.
It is developed by Microsoft.

Main Components of Playwright Architecture
     Playwright architecture has 4 main layers:
1️⃣Test Script (User Code Layer)
    This is the code written by the tester in:
    JavaScript / TypeScript / Java / Python / C#
    Example:
            page.goto("https://example.com");
            page.click("#login");
            This layer tells Playwright what actions to perform.

2️⃣ Playwright Client Library
        This is the Playwright API you use in your program.
        Responsibilities:
            Converts your commands into Playwright protocol messages
            Handles:
                    Auto-waiting
                    Retries
                    Assertions
                    Error handling
        Example APIs:
                    page.click()
                    page.fill()
                    browser.newPage()

3️⃣ Playwright Driver (Server Layer)
    This is the core engine of Playwright.
    Responsibilities:
        Receives commands from client library
        Talks directly with browser engines using native browser protocols:
        Chromium → DevTools Protocol
        Firefox → Firefox Remote Protocol
        WebKit → WebKit protocol
        Executes actions inside the browser
        Sends results back to client
        This makes Playwright:
        ✅ Fast
        ✅ Stable
        ✅ Reliable
        (No WebDriver in between like Selenium)

4️⃣ Browser Engine Layer
        Actual browsers where testing happens:
        Chromium (Chrome, Edge)
        Firefox
        WebKit (Safari)
        Playwright controls them directly.

🔁 Flow of Execution (Step by Step)
        Tester writes test script
        Playwright Client Library reads the script
        Commands go to Playwright Driver
        Driver sends instructions to browser
        Browser performs actions on web page
        Result is sent back to Driver
        Driver sends response to Client
        Test script continues or ends

  Playwright Architecture vs Selenium (short)      
| Playwright                   | Selenium         |
| ---------------------------- | ---------------- |
| Direct browser control       | Uses WebDriver   |
| Single tool for all browsers | Separate drivers |
| Faster execution             | Slower           |
| Stable                       | Less stable      |

Summary (Easy)
Playwright follows client–server architecture
Your code talks to Playwright API
Playwright API talks to Playwright Driver
Driver controls real browsers
Browsers interact with web application
Results come back to your test script

*/