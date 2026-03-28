const runAsync = async () => {
    console.log("Start function");

    // Pause this entire function until we get a response
    await new Promise(resolve => setTimeout(resolve, 2000));

    console.log("End function");

    clearInterval(intervalId);
};

// Paused until we get a response for promise
runAsync();

// Move to here, app continues to run in the meantime
const intervalId = setInterval(() => {
    console.log("App still running...");
}, 500);
