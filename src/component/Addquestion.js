/** @jsxImportSource @emotion/react */
import 'bootstrap/dist/css/bootstrap.min.css';
import { jsx, css } from '@emotion/react';
import React from 'react';

class Addquestion extends React.Component{
  constructor(){
    super();
    this.state={
      flag:true,
      question:"",
       option1:"",
      option2:"",
      option3:"",
      option4:"",
      correct:"",
      questionId:""
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange=(event)=> {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit(event) {
    this.state.flag=false;
    this.forceUpdate();
    // alert('Added Image:' + this.state.imgName);

    event.preventDefault();
  }
  render(){
    return(

      <>
      {this.state.flag ?
      <form onSubmit={this.handleSubmit} css={css`margin:1%;`}>
        <label css={css`margin:1%;`}>
      question:
      <input type="text" name="question" value={this.state.question} onChange={this.handleChange} required/>
      </label><br></br>
      <label css={css`margin:1%;`}>
      option1:
      <input type="text" name="option1" value={this.state.option1} onChange={this.handleChange} required/>
      </label>
      <label css={css`margin:1%;`}>
      option2:
      <input type="text" name="option2" value={this.state.option2} onChange={this.handleChange} required/>
      </label>
      <label css={css`margin:1%;`}>
      option3:
      <input type="text" name="option3" value={this.state.option3} onChange={this.handleChange} required/>
      </label>
      <label css={css`margin:1%;`}>
      option4:
      <input type="text" name="option4" value={this.state.option4} onChange={this.handleChange} required/><br></br>
      </label>
      <label css={css`margin:1%;`}>
      correct:
      <input type="text" name="correct"value={this.state.correct} onChange={this.handleChange} required/><br></br>
      </label>
      <label css={css`margin:1%;`}>
      questionId:
      <input type="text"name="questionId" value={this.state.questionId} onChange={this.handleChange} required/><br></br>
      </label>
    <input type="submit" value="Submit" />
  </form>
      :
  <div className="container ">

  <div className="card border border-light text-white bg-dark ">
  <div className="card-body">
  <div className="row justify-content-md-center">
    <div className="col text-center">
    <h5 className="card-title "css={css` font-size:30px `} >Question:{this.state.questionId}</h5>
    <p className="card-text font-italic "css={css` font-size:40px; `}>{this.state.question}</p>
    </div>
    <div className="col">
  <button type="button" className="btn btn-dark mt-2 mr-5 rounded-pill border border-light "css={css`width:50%`}>{this.state.option1}</button>
  <button type="button" className="btn btn-dark mt-2 mr-5 rounded-pill border border-light "css={css`width:50%`}>{this.state.option2}</button>
  <button type="button" className="btn btn-dark mt-2 mr-5 rounded-pill border border-light "css={css`width:50%`}>{this.state.option3}</button>
  <button type="button" className="btn btn-dark mt-2 mr-5 rounded-pill border border-light "css={css`width:50%`}>{this.state.option4}</button>
  </div>

  </div>

</div>
</div>
</div>
}</>
    )
}
}
export default Addquestion;

