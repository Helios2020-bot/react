import React from 'react';
import {Link} from 'react-router-dom';
import {  Route, Switch } from "react-router";
import Question from '../Question';


class Nav extends React.Component{
   qBank = [

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
  render(){
    return(
      <div>
        <Link to="/">Home</Link><br></br>
        <Link to="/Question/gk">Take GK Quiz</Link><br></br>
        <Link to="/Question/sports">Take Sports Quiz</Link><br></br>

        <Route path="/Question/:category" component={Question}></Route>
        <Route path="/Question/:category" component={Question}></Route>
      </div>
    )
}
}
export default Nav;
