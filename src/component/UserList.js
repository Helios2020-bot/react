import axios from 'axios';
import React from 'react';

class UserList extends React.Component{
  constructor(){
    super();
    this.state={
      users:[]
    }
  }
  componentDidMount(){
    axios.get('https://reqres.in/api/users')
    .then((res)=>{
      const users=res.data.data;
      this.setState({users})
    })
  }
  render(){
    return(
      <div>
        <ul>
          {
            this.state.users.map((user)=>{
              return <div>
                <li>
                  {user.first_name}
                </li>
              </div>
            })
          }
        </ul>
      </div>
    )
}
}
export default UserList;
