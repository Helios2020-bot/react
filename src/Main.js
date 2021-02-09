import React from 'react';
import './Main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import DetailedImage from './components/DetailedImage';

class Main extends React.Component{
  constructor(){
    super();
    this.state={
      flag:true,
    }
  }

  ToggleFlag=()=>{
    this.setState({flag: !this.state.flag})
  }
  images=[{imgId:101,imgName:"Nature",imgCategory:"Nature",imgSrc:"images/download.jfif"},
  {imgId:102,imgName:"Nature",imgCategory:"Nature",imgSrc:"images/nature.jfif"},
  {imgId:103,imgName:"Iceland",imgCategory:"Scenary",imgSrc:"images/iceland.jfif"},
  {imgId:104,imgName:"Volcano",imgCategory:"Landscapes",imgSrc:"images/volcano.jfif"},
  {imgId:105,imgName:"Children",imgCategory:"Beauty",imgSrc:"images/children.jfif"}];
  render(){

    return(
      <div className="main d-flex">
  {
    this.images.map((img) =>{
      if (this.state.flag) {
        return(
          <div className="card">
          <img src={img.imgSrc}  alt="..."></img>
         <div className="card-body">
           <h5 className="card-title ">{img.imgName}</h5>
           <p className="card-text ">{img.imgCategory}</p>

           <button type="button" className="btn btn-primary" onClick={this.ToggleFlag}>Hide</button>
           <Link to={`/DetailedImage/${img.imgId}`} className="btn btn-primary">Detail</Link>
         </div>
       </div>

        )
      }else{
      return(
          < >
            <button type="button" className="btn btn-primary" onClick={this.ToggleFlag}>show</button>
          </>
    )}
    })
  }



        </div>

    )


  }//render
}//class

export default Main;
