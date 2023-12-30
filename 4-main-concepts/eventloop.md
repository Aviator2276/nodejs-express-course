# The Event Loop
> The event loop is what allows NodeJS to perform non-blocking I/O operations -- despite the fact that JavaScript is single-threaded -- by **offloading** operations to the system kernal whenever possible.

## JavaScript is Synchronous & Single Threaded
```javascript
console.log("First Task");
console.time()
for (let i = 0; i < 100000000; i++>) {
    const h3 = document.querySelector('h3');
    h3.textContent = `Hey, everyone is waiting on me`;
}
console.timeEnd();

console.log("Next Task");
```
Output:
```
First Task
default: 2066 ms
Next Task
```
Javascript runs line by line. If a block of code takes awhile, the next task will only run after running the time-consuming task. These time-consuming tasks are called blocking code.

The browser provides an API that allows us to offload these time consuming tasks.
```javascript
console.log("First Task");
setTimeout(() => {
    console.log("Second Task");
}, 0);
console.log("Next Task");
```
Output:
```
First Task
Next Task
Second Task
```
Even though setTimeout is set to 0, meaning you would think it would run immediately, it runs after Next Task. Once Javascript is done with the immediate code, only then it runs the callback functions. That way, we can offload time-consuming tasks to the browser.

> This doesn't mean we can off-load For Loops, the browser offers APIs where we don't have to write blocking code. What we mean when we can't off-load For Loops is that we can still write blocking code in JavaScript.

## Event Loop Example
![Event Loop Example](https://course-api.com/images/slides/slide-3.png)
Lola Gardner sends a request that is a time-consuming database query

### No Event Loop Scenario
- All users will have to wait for Lola's request to finish.
### Event Loop Scenario
- Registers callback (CB)
- Run immediate code FIRST
- Only after the immediate code is finished, we execute the callback.