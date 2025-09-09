### 1 What is the difference between var, let, and const?
# var
Scope: Function-scoped (or globally scoped if declared outside a function).

Hoisting: Gets hoisted to the top of its scope and initialized with undefined.

Re-declaration: Can be re-declared in the same scope without error.

Best use: Rarely recommended in modern code because it can cause unexpected bugs.

# let

Scope: Block-scoped (works within {} like if, for, etc.).

Hoisting: Hoisted but not initialized → exists in the temporal dead zone until declared.

Re-declaration: Cannot be re-declared in the same scope.

Best use: When you expect the value of the variable to change.

#  const

Scope: Block-scoped (like let).

Hoisting: Also hoisted but in the temporal dead zone until declared.

Re-declaration: Cannot be re-declared in the same scope.

Re-assignment: Cannot be re-assigned, but objects/arrays declared with const can have their properties modified.

Best use: For values that should never be reassigned.

### 2 What is the difference between map(), forEach(), and filter()?

# forEach()

Purpose: Executes a function for each element in the array.

Return value: Always undefined (does not create a new array).

When to use: When you just want to do something with each element (like logging or updating UI), but don’t need a new array.

# map()

Purpose: Transforms each element and returns a new array with the transformed values.

Return value: A new array, same length as original.

When to use: When you want to transform data.

# filter()

Purpose: Selects elements based on a condition and returns a new array with only the elements that match.

Return value: A new array, possibly shorter than original.

When to use: When you want to filter out elements.


### 3 What are arrow functions in ES6?
# What are Arrow Functions?

Arrow functions are a shorter syntax for writing functions in JavaScript. They’re often used for cleaner, more concise code.
# Key Features of Arrow Functions

 # Shorter syntax

No need for the function keyword.

If the body is a single expression, you can skip return and {}.
  

#  Lexical this binding (the most important difference)

Arrow functions do not have their own this. Instead, they inherit this from their surrounding scope.

This solves common problems with callbacks in objects and clas

### 4Lexical this binding (the most important difference)
What does "lexical this" mean?

In normal functions, this depends on how the function is called (runtime binding).

In arrow functions, this is determined by the surrounding (lexical) scope where the arrow function is defined, not how it’s called.

### 5 Explain template literals in ES6. How are they different from string concatenation?

# What are Template Literals?

Template literals are a new way to work with strings in ES6, using backticks (`) instead of quotes.
They allow embedded expressions, multi-line strings, and string interpolation in a clean way.

# Syntax
const name = "Alice";
const greeting = `Hello, ${name}!`;
console.log(greeting); 

 # String Interpolation (no messy + concatenation)
Old way:

const user = "Bob";
const age = 25;
const msg = "Hello, my name is " + user + " and I am " + age + " years old.";
console.log(msg);
// "Hello, my name is Bob and I am 25 years old."


# With template literals:

const msg = `Hello, my name is ${user} and I am ${age} years old.`;
console.log(msg);


Multi-line Strings (no \n needed)
Old way:

const text = "Line 1\n" +
             "Line 2\n" +
             "Line 3";


# With template literals:

const text = `
Line 1
Line 2
Line 3
`;


# Expression Evaluation
You can run JavaScript expressions inside ${}:

const a = 10;
const b = 20;
console.log(`The sum is ${a + b}`); // "The sum is 30"


# Tagged Templates (advanced feature)

Lets you preprocess template literals with a function.

function highlight(strings, ...values) {
  return strings.reduce((result, str, i) => result + str + (values[i] ? values[i].toUpperCase() : ""), "");
}

const user = "alice";
const result = highlight`Hello, ${user}!`;
console.log(result); // "Hello, ALICE!"

