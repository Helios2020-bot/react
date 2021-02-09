import React from 'react';

class ImageForm extends React.Component{
  constructor(){
    super();
    this.state={
      imgId:"",
      imgName:"",
      imgSrc:"",
      imgDescription:""
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange=(event)=> {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit(event) {
    alert('Added Image:' + this.state.imgName);
    event.preventDefault();
  }
  render(){
    return(
      <form onSubmit={this.handleSubmit}>
      imgId:
      <input type="text" name="imgId" value={this.state.imgId} onChange={this.handleChange}/>
      imgName:
      <input type="text" name="imgName" value={this.state.imgName} onChange={this.handleChange}/>
      imgSrc:
      <input type="text" name="imgSrc"value={this.state.imgSrc} onChange={this.handleChange}/>
      imgDescription:
      <input type="text"name="imgDescription" value={this.state.imgDescription} onChange={this.handleChange}/>
    <input type="submit" value="Submit" />
  </form>
    )
}
}
export default ImageForm;
