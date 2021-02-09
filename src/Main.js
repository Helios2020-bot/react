import './Main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Question from './Question';
import Addquestion from './component/Addquestion';
import Nav from './component/Nav';
import UserList from './component/UserList';
import Postaxios from './component/Postaxios';
import Deleteaxios from './component/Deleteaxios';
const qBank = [

  {
    question:
      "what is the capital of Maharashtra ?",
    answers: ["Nashik", "Aurangabad", "Mumbai", "Nagpur"],
    correct: "vinayak",
    questionId: "1",
    category:"gk"
  },
  {
    question: "What is the capital of United Kingdom?",
    answers: ["Manchester", "Birmingham", "London", "Birmingham"],
    correct: "London",
    questionId:"2",
    category:"gk"
  },

  {
    question: "What is the capital of India?",
    answers: ["Indore", "Delhi", "Goa", "Mumbai"],
    correct: "Delhi",
    questionId:"3",
    category:"gk"
  },
  {
    question: "Sachin Tendulkar has played how many ODI matches?",
    answers: ["400", "463", "430", "500"],
    correct: "463",
    questionId:"4",
    category:"sports"
  },
  {
    question: "When did Sachin Tendulkar make his first Test debut??",
    answers: ["15 November, 1989", "10 October, 1988", "11 November, 1988", "20 October, 1989"],
    correct: "15 November, 1989",
    questionId:"5",
    category:"sports"
  },
  {
    question: "Which of the following team has not won a single title of ICC Women`s T20 World Cup so far?",
    answers: ["England", "West Indies", "India", "Australia"],
    correct: "India",
    questionId:"6",
    category:"sports"
  }

];


const Main=()=>{
  return(

      <div className="container-fluid ">

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
      {/* <Addquestion></Addquestion> */}
       {/* <Question questions={qBank} x={qBank.length}></Question> */}
      <Nav questions={qBank}></Nav>
      <UserList></UserList>
      <Postaxios></Postaxios>
      <Deleteaxios></Deleteaxios>
      </div>

  )
}
export default Main;
