# NODE / JS

# How javascript run the code

1. Memory allocation
2. code execution

## Normal `function` vs arrow functions `=>`

1. this keyword

- global context in reg function
- value is this in arrow function is same as

2. constructor

- an arrow function can not be used as a Constructor like a normal function

3. arguments

- in normal function `arguments` keyword will have array like object containing list of argument function was invoked
- in arrow function `arguments` will be taken from the outer function

4. implicit returns

- in arrow function if you miss the curly braces then it returns the last expression

5.

Ref: https://dmitripavlutin.com/differences-between-arrow-and-regular-functions/

# Common

- Shadowing
  - When a variable in inner scope is defined with the same as in outer scope
  - ??
- Blocking main thread
  - As javascript is single threaded we should use async programming like callback/promise/async/await to avoid blocking main thread.
  - When some time consuming process take place in syncarpous program it stops executing the program until it's completion.

# Closure

- A function with it's lexical scope forms a closure. A function
- The inner function will have access to the parent's lexical environment even when the function is executed in different scope.
- ref: https://youtu.be/qikxEIxsXco?list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP
- Lexical scope
  - A variable declared outside a function is accessible in function defined after that declaration; but the opposite is not true (a variable defined in a function is not accessible out side the function)

## Types of functions

1. Function statement / Function declaration

- while creating a function w/o assigning to a var
- while hoisted this function will have its code in the memory

```
  var someFunction = function () {
    // function code
  }
```

2. Function expression

- while creating a function with assigning to a variable
- while hoisted this function is treated like a function so It will be assigned undefined

```
  function someFunction() {
    // function code
  }
```

3. Anonymous function

- A function with no name
- Used as values

4. Named function expression (para vs arg)

```
  var myFunction = function someFunction(pra) {
    // function code
  }
  someFunction(arg) // Error: not defined
  // but someFunction will be accessible inside the function block
```

- Function expression with name

5. First class function / First class citizens

- A programming language is said to have First-class functions if functions in that language are treated like other variables. So the functions can be assigned to any other variable or passed as an argument or can be returned by another function. JavaScript treat function as a first-class-citizens.

6.  Callback function

- A function passed as an argument to another function is called Callback function.
- It give JS to do async programming

6.  Pure function
7.  Arrow Order function
8.  Higher Order function

- A function which takes a function as an argument or return a function is called higher order function

## Prototype

## Throttling and Debouncing

- Throttling
  - Calling a function in particular interval after the first click (at the first click function should be called immediately)
- Debouncing.
  - It is the programming practice which ensures an action is done only once per user input, to avoid multiple function invocation for one user input event.

## Garbage Collector

## Event Loop

- JS Engine consist of...
  - Call stack
    - All the function and global exe context are pushed inside call stack while getting exe
  - Micro task Queue
    - Same as Callback Queue but has higher priority
    - All the Promise callback functions, Mutation observer come into this this queue
  - Callback/Task Queue
    - When there is async exe and if certain functions to be run afterwards are pushed into this stack
  - Event loop
    - It checks the Callback Queue and when it finds something it push inside the Call stack
  - Note: Callback queue starvation

## Promise

## Bubbling and Capturing

- Bubbling Up
  - In case of bubbling an event will be handled by the inner most element and propagated to the outer most element.
- Tickling/Capturing Down
  - In case of Capturing or Tickling first the outer most element event is handled and then it goes to propagate event to inner elements the same way.

## REST VS SOAP VS RTC

- An API is a connection between programs.
- A web API is APIs which are accessed using HTTP protocol.
- REST APIs
  - representational state transfer, is a set of guidelines for scalable, lightweight, and easy-to-use APIs.
  - It uses HTTP
  - Client-Server Separation, Uniform Interface, Stateless, Layered system, Cacheable
- SOAP - Simple Object Access Protocol
  - Utilize XML to encode info.
  - it works over any communication protocol (not just HTTP, as is the case with REST).
- RPC (Remote Procedural Call)
  - The RPC (Remote Procedural Call) protocol is the most straightforward of the three architectures. Unlike REST and SOAP that facilitate the transfer of data, RPC APIs invoke processes. In other words, they execute scripts on a server.

## ES6

- https://www.w3schools.com/js/js_es6.asp
