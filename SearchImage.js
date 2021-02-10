import React from 'react';
import './AddImage.css';

//uncontrolled class component
export default class SearchImage extends React.Component{

    constructor(){
        super();
        this.search=React.createRef();
    }

   

handleSubmit=(event)=>{
    alert(this.search.current.value+" to be searched..!!!")
    event.preventDefault();
}

    render(){
       
        return(
         <div>
             <h3>Search Image</h3>
             <form onSubmit={this.handleSubmit}>
               Search Image: <input type="text" ref={this.search}></input>
                <input type="submit" value="Search" ></input>
             </form>
         </div>
       
        );
    }//render
       
}//class