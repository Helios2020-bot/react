import React from 'react';
import { Link } from 'react-router-dom';
import './Image.css';
import SearchImage from './SearchImage';

//class component
export default class MyImage extends React.Component{
    constructor(){
        super();
        this.state={
            flag: true
  }
        
    }


    toggleFlag=()=>{
        this.setState({flag: !this.state.flag});
         
      }

    render(){
        if( this.state.flag){
        return(
         <div>
          
          <div class="col-2">
            <div className="card" style={{width: "18rem"}}>
           <img className="card-img-top" src={this.props.img.imgSrc} alt="Card image cap"/>
           <div className="card-body">
          <h5 className="card-title">{this.props.img.imgName}</h5>
          <p className="card-text">{this.props.img.imgCategory}</p>
          <button href="#" className="btn btn-primary" onClick={this.toggleFlag}>Hide</button>
          <Link to={`/detailedImage/${this.props.img.imgId}`} className="btn btn-primary" >Details</Link>
          </div>
        </div>
        </div>
        </div>
        );
        }
        return(
            <div>
              <div class="col-2">
            <div className="card" style={{width: "18rem"}}></div>
                <button href="#" className="btn btn-primary" onClick={this.toggleFlag}>Show</button>
                </div>
                </div>
           
        );
    }

    
}