// ================================================
// DAY 4 – Asynchronous JavaScript (Foundations)
// ================================================

// ------------------------------------------------
// 1. Async Execution Basics
// ------------------------------------------------
// JavaScript is single-threaded but supports
// asynchronous execution using callbacks and timers

console.log("Start of Program");

// ------------------------------------------------
// 2. setTimeout() – Simulating Async Execution
// ------------------------------------------------
// setTimeout executes code after a delay (non-blocking)

setTimeout(() => {
  console.log("This message runs after 2 seconds");
}, 2000);

console.log("End of Program");

// ------------------------------------------------
// 3. Callbacks
// ------------------------------------------------
// A callback is a function passed as an argument
// and executed later

function fetchData(callback) {
  console.log("Fetching data...");

  setTimeout(() => {
    const data = "User Data Loaded";
    callback(data); // callback execution
  }, 1500);
}

// Callback function
function displayData(result) {
  console.log("Callback Result:", result);
}

// Using callback
fetchData(displayData);

// ------------------------------------------------
// Why This Matters
// ------------------------------------------------
// Async behavior explains:
// - Why code does not run line by line
// - How APIs, timers, and events work
// - Foundation for Promises & async/await
