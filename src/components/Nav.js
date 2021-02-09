import React from 'react';
import {Link} from 'react-router-dom';
import {  Route, Switch } from "react-router";
import Main from '../Main';
import ImageForm from './ImageForm';
import DetailedImage from './DetailedImage';
import UserList from './UserList';

class Nav extends React.Component{
  render(){
    return(
      <div>
        <Link to="/">Home</Link><br></br>
        <Link to="/addImage">Add Image</Link><br></br>
        <Link to="/listImage">List of all image</Link>
        <Link to="/UserList">User list</Link>

        <Route path="/addImage" component={ImageForm}></Route>
        <Route path="/listImage" component={Main}></Route>
        <Route path="/DetailedImage/:imgId" component={DetailedImage}></Route>
        <Route path="/UserList" component={UserList}></Route>
      </div>
    )
}
}
export default Nav;
