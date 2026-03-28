const fetchTrivia = async () => {
    const response = await fetch("https://opentdb.com/api.php?amount=1&type=multiple");
    return await response.json();
};

const runAsyncTasks = async () => {
    console.log("Start Async/Await");

    try {
        // Pause this entire function until we get a response from the Trivia API
        const data = await fetchTrivia();

        if (data.results && data.results.length > 0) {
            const q = data.results[0];
            console.log("Question:", q.question);
            console.log("Correct Answer:", q.correct_answer);
        } else {
            console.log("No question returned");
        }

    } catch (error) {
        console.error("Error:", error);
    }

    console.log("End Async/Await");
};

runAsyncTasks();


// Having this here instead gives the same result as promise chaining
// runAsyncTasks() gets paused, so we continue to run stuff after it
//console.log("End Async/Await");