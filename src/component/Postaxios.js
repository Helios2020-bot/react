import axios from 'axios';
import React from 'react';

class Postaxios extends React.Component{
  constructor(){
    super();
    this.state={
      first_name:""
    }
  }
  handleChange = event => {
    this.setState({ first_name: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    const user = {
      first_name: this.state.first_name
    };
    axios.post('https://reqres.in/api/users',{user})
    .then((res)=>{
      // const users=res.data.data;
      // this.setState({users})
      console.log(res.data);
    })
  }
  componentDidMount(){

  }
  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            First Name:
            <input type="text" name="name" onChange={this.handleChange} />
          </label>
          <button type="submit">Add</button>
        </form>
      </div>
    )
}
}
export default Postaxios;
