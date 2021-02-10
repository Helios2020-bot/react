import React from 'react';
import { Link, Route } from 'react-router-dom';
import ImageList from '../container/image-list';
import Main from '../Main';
import AddImage from './AddImage';
import './AddImage.css';

//class component
export default class Nav extends React.Component{

       render(){
       
        return(
         <div>
             <Link to="/">Home</Link><br></br>
             <Link to="/addImage">Add Image</Link><br></br>
             <Link to="/listImage">List of all Images</Link><br></br>
             <Link to="/users">List of all Users</Link><br></br>
             <ImageList></ImageList>
        </div>
       
        );
    }//render
       
}//class