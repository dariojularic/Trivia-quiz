import "./Question.css"

function Question(props) {


  return (
    <div className="question-box">
      <div className="number-of-answers">
        <p>Correct answers: </p>
      </div>

      <div className="question-container">
        <p className="question">WQuestion</p>
        <p className="answer">nas</p>
        <p className="answer">fawfw</p>
        <p className="answer">gwagaw</p>
        <p className="answer">gawgawga</p>
      </div>

      <div>
        <button className="next-question-btn">Next question</button>
      </div>
    </div>
  )
}


export default Question;
