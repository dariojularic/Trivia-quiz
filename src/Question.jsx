import "./Question.css"

function Question(props) {


  return (
    <div className="question-box">
      <div className="number-of-answers">
        <p>Correct answers: </p>
      </div>

      <div className="question-container">
        <p className="question"></p>
        <p className="answer"></p>
        <p className="answer"></p>
        <p className="answer"></p>
        <p className="answer"></p>
      </div>

      <div>
        <button className="next-question-btn">Next question</button>
      </div>
    </div>
  )
}


export default Question;
