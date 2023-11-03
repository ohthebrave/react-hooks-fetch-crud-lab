import React from "react";

function QuestionItem({ question, onHandleDelete, onHandleUpdate }) {
  const { id, prompt, answers, correctIndex } = question;
// console.log(answers)
  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  function handleChange(answers) {
    // console.log(update)
    fetch(`http://localhost:4000/questions/${id}`, {
      method: "PATCH",
      headers: {
          "Content-Type": "application/json"
         },
      body: JSON.stringify({ question: { answers: answers } })
  })
  .then(r => r.json())
  .then(data => onHandleUpdate( data.question.answers))
  }

  function handleDelete() {
    fetch(`http://localhost:4000/questions/${question.id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => onHandleDelete(question));
  }

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex} onChange={(e) => handleChange(e.target.value)}>{options}</select>
      </label>
      <button onClick={handleDelete}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
