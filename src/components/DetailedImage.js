import React from 'react';
import {Link} from 'react-router-dom';
import {  Route, Switch } from "react-router";
import Main from '../Main';
import ImageForm from './ImageForm';

class DetailedImage extends React.Component{
  images=[{imgId:101,imgName:"Nature",imgCategory:"Nature",imgSrc:"../images/download.jfif"},
  {imgId:102,imgName:"Nature",imgCategory:"Nature",imgSrc:"../images/nature.jfif"},
  {imgId:103,imgName:"Iceland",imgCategory:"Scenary",imgSrc:"../images/iceland.jfif"},
  {imgId:104,imgName:"Volcano",imgCategory:"Landscapes",imgSrc:"../images/volcano.jfif"},
  {imgId:105,imgName:"Children",imgCategory:"Beauty",imgSrc:"../images/children.jfif"}];

  getImgWithId(){
    var imagewithId=this.images.find((img)=>{
       console.log( this.props.match.params.imgId);
      return img.imgId == this.props.match.params.imgId;
    })
    return imagewithId;
  }
  render(){
    console.log(this.getImgWithId().imgSrc);
    return(
      <div>
         <div className="card">
          <img src={this.getImgWithId().imgSrc} alt="..."></img>
         <div className="card-body">
           <h5 className="card-title ">{this.getImgWithId().imgName}</h5>
           <p className="card-text ">{this.getImgWithId().imgCategory}</p>
           <p className="card-text ">{this.getImgWithId().imgId}</p>

           {/* <button type="button" className="btn btn-primary" onClick={this.ToggleFlag}>Hide</button> */}
           {/* <Link to={`/detailImage/${this.getImgWithId.imgId}`} className="btn btn-primary">Detail</Link> */}
         </div>
       </div>
      </div>
    )
}
}
export default DetailedImage;
