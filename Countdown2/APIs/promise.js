function fetchTrivia() {
    return fetch("https://opentdb.com/api.php?amount=1&type=multiple")
        .then(response => response.json());
}

console.log("Start Promise Chaining");

fetchTrivia()
    // This is what we do once we get a response from the Trivia API
    .then(data => {
        if (data.results && data.results.length > 0) {
            const q = data.results[0];
            console.log("Question:", q.question);
            console.log("Correct Answer:", q.correct_answer);
        } else {
            console.log("No question returned");
        }
    })
    .catch(error => {
        console.error("Error:", error);
    });


// While we wait for the Trivia API response, we move on
console.log("End Promise Chaining");