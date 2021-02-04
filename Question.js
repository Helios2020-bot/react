/** @jsxImportSource @emotion/react */
import 'bootstrap/dist/css/bootstrap.min.css';
import { jsx, css } from '@emotion/react';
import React from 'react';
// const style= css`color:red;
//   &:hover{
//     color=green;
//   }`;
class Question extends React.Component{
  constructor(){
    super();
    this.state={
      count:0
    };
  }

  next=()=>{
    this.setState({count :this.state.count+1});

  }
  previous=()=>{
    this.setState({count :this.state.count-1})
  }
  render(){
  return(
    <div>

        <div className="card border border-dark">
        <div className="card-body">
        <div className="row justify-content-md-center">
          <div className="col text-center">
          <h5 className="card-title "css={css` font-size:30px `} >Question:{this.state.count+1 }/{this.props.x}</h5>
          <p className="card-text font-italic "css={css` font-size:50px; `}>{this.props.questions[this.state.count].question}</p>
          </div>
          <div className="col">
        <button type="button" className="btn btn-dark mt-2 mr-2 rounded-pill justify-content-start">{this.props.questions[this.state.count].answers[0]}</button>
        <button type="button" className="btn btn-dark mt-2 mr-2 rounded-pill">{this.props.questions[this.state.count].answers[1]}</button>
        <button type="button" className="btn btn-dark mt-2 mr-2 rounded-pill">{this.props.questions[this.state.count].answers[2]}</button>
        <button type="button" className="btn btn-dark mt-2 mr-2 rounded-pill">{this.props.questions[this.state.count].answers[3]}</button>

        </div>

        </div>
        <div className=""><button type="button" className="btn btn-secondary"css={css` width:20%; margin:1% `} onClick={this.next} disabled={this.state.count==this.props.x-1} >next</button>
        <button type="button" className="btn btn-secondary"css={css` width:20%;margin:1% `} onClick={this.previous} disabled={this.state.count==0}>prev</button></div>
      </div>
      </div>
    </div>
  )
}
}
export default Question;
