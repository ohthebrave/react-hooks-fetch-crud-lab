import QuestionItem from "./QuestionItem";

function QuestionList({questions, setQuestions}) {

  function handleUpdate( questionUpdate) {
    const updatedQuestions = questions.map(question => {
      if (question.id === questionUpdate.id) {
        // Update the correctIndex for the specific question
        return {
          ...question,
          correctIndex: questionUpdate.correctIndex,
        };
      }
      return question; // Keep other questions unchanged
    });
  
    // Update the state with the new questions
    setQuestions(updatedQuestions);
  }

  // console.log("data:", page)
  function handleDeleteQuestion(item) {
    const filteredItems = questions.filter(question => {
      return question.id !== item.id
    })
    setQuestions(filteredItems)
  }
  

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {/* display QuestionItem components here after fetching */}
        { questions.map((question) => (
          <QuestionItem key={question.id} question={question} onHandleDelete={handleDeleteQuestion} onHandleUpdate={handleUpdate}/>
        )) }
      </ul>
    </section>
  );
}

export default QuestionList;
