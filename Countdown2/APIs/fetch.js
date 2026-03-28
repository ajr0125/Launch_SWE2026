const fetchTrivia = async () => {
    try {
        const response = await fetch("https://opentdb.com/api.php?amount=1&type=multiple");
        const data = await response.json();
        console.log("Question:", data.results[0].question);
        console.log("Correct Answer:", data.results[0].correct_answer);
        console.log("Incorrect Answers:", data.results[0].incorrect_answers);
    } catch (error) {
        console.error("Error fetching trivia:", error);
    }
};

fetchTrivia();