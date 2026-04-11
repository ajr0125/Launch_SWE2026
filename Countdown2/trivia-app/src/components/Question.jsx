import { useState } from "react";
import Button from "@mui/material/Button";

const Question = ({ questionData }) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  function buildAnswerChoices(questionData) {
    return [
      {
        text: questionData.correctAnswer,
        isCorrect: true,
      },
      ...questionData.incorrectAnswers.map((ans) => ({
        text: ans,
        isCorrect: false,
      })),
    ].sort(() => Math.random() - 0.5);
  }

  const answerChoices = buildAnswerChoices(questionData);

  return (
    <div>
      <h4>{questionData.question.text}</h4>

      {answerChoices.map((answer, index) => (
        <Button variant="contained"
          key={index}
          onClick={() => setSelectedAnswer(answer)}
        >
          {answer.text}
        </Button>
      ))}

      {selectedAnswer && (
        <p>
          {selectedAnswer.isCorrect ? "Correct!" : "Incorrect :("}
        </p>
      )}
    </div>
  );
};

export default Question;
