import './Main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Question from './Question';
const qBank = [
  {
    question:
      "what is the capital of Maharashtra ?",
    answers: ["Nashik", "Aurangabad", "Mumbai", "Nagpur"],
    correct: "vinayak",
    questionId: "1"
  },
  {
    question: "What is the capital of United Kingdom?",
    answers: ["Manchester", "Birmingham", "London", "Birmingham"],
    correct: "London",
    questionId:"2"
  },

  {
    question: "What is the capital of India?",
    answers: ["Indore", "Delhi", "Goa", "Mumbai"],
    correct: "Delhi",
    questionId:"3"
  }
];


const Main=()=>{
  return(

      <div className="container-fluid bg-dark">

      {/* <div className="card">
        <div className="card-body">
          <h5 className="card-title ">Question:1</h5>
          <p className="card-text ">{qBank[0].question}</p>
           <p className="card-text btn-btn-primary">{qBank[0].answers[0]}</p>
          <button type="button" className="btn btn-primary mt-2 mr-2">{qBank[0].answers[0]}</button>
          <button type="button" className="btn btn-primary mt-2 mr-2">{qBank[0].answers[1]}</button>
          <button type="button" className="btn btn-primary mt-2 mr-2">{qBank[0].answers[2]}</button>
          <button type="button" className="btn btn-primary mt-2 mr-2">{qBank[0].answers[3]}</button>
        </div>
      </div> */}
      {/* <div className="card">
      <div className="card-body text-center">
      Score is <h3>3/5</h3>
      </div>
      </div> */}
      <Question questions={qBank} x={qBank.length}></Question>

      </div>

  )
}
export default Main;
