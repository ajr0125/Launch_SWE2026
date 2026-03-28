// App starts
console.log("Start");

// Create promise - fetching data from an API, etc.
new Promise(resolve => setTimeout(resolve, 2000))
  .then(() => {
    // Log once we get the promise response
      console.log("Done");
      clearInterval(intervalId);
  });

// Move on and app continues to run while we wait for a response from the promise
const intervalId = setInterval(() => {
    console.log("App still running...");
}, 500);