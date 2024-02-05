- Create a webpage with a section, and when you move the mouse over that section, a picture should appear. When you move the mouse away, the picture should disappear.

- Har baar ek div banao
- div ko absolute banao ek width and height do overflow hidden karo and div ke andar image banao and us image ko neeche push kar do
- image ko animated way mein upar laao

## Throttling in JS

Reducing the number of executions of a particular code 

Throttling is a technique in JavaScript that involves limiting the rate at which a particular function can be executed. The purpose of throttling is to control the frequency of function calls, especially in scenarios where the function might be invoked too often, such as in response to frequent events like scrolling or resizing.

The idea is to ensure that a function is not called more frequently than a specified time interval. Throttling helps in optimizing performance and preventing the overload of resources caused by excessive function calls.

Here's a basic explanation of how throttling works:

1. **Define a Throttle Function:**
   Create a function (commonly called `throttle`) that takes two parameters - the actual function you want to throttle (`func`) and a time delay (`delay`).

2. **Return a New Function:**
   Inside the throttle function, return a new function that wraps the original function. This new function will be the one you actually call in your code.

3. **Track the Last Invocation Time:**
   Maintain a variable to track the timestamp of the last time the original function was invoked.

4. **Check Time Difference:**
   Before allowing the original function to execute, check if the time elapsed since the last invocation is greater than or equal to the specified delay.

5. **Invoke the Original Function:**
   If the time condition is met, invoke the original function and update the last invocation timestamp.

Here's a simplified example:

```javascript
function throttle(func, delay) {
  let lastCall = 0;

  return function() {
    const now = new Date().getTime();

    if (now - lastCall >= delay) {
      func.apply(null, arguments);
      lastCall = now;
    }
  };
}

// Example usage:
const throttledFunction = throttle(function() {
  console.log('Function called!');
}, 1000);

// This will log 'Function called!' at most once every 1000 milliseconds
throttledFunction();
```

In this example, the `throttle` function returns a new function that can be called, but it ensures that the original function inside it (`func`) is invoked only if the specified time delay (1000 milliseconds in this case) has passed since the last invocation.