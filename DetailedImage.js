import React from 'react';
import { Link, Route } from 'react-router-dom';
import Main from '../Main';
import AddImage from './AddImage';
import './AddImage.css';

//class component
export default class DetailedImage extends React.Component{

    images=[
        {    imgId:101,imgName:"Nature",imgCategory:"Nature",imgSrc:"images/nature.jpg",setVisible: true },
        {    imgId:102,imgName:"Nature",imgCategory:"Nature",imgSrc:"images/nature2.jpg"  },
        {    imgId:103,imgName:"Island",imgCategory:"Scenery",imgSrc:"images/island.jpg"  },
        {    imgId:104,imgName:"Volcano",imgCategory:"Landscapes",imgSrc:"images/volcano.jpg"  },
        {    imgId:105,imgName:"Children",imgCategory:"Beauty",imgSrc:"images/children.jpg"  }];
    
        getImagewithId() {
         var imagewitId =this.images.find((img)=>{
             console.log(this.props.match.params.imgId);
                return img.imgId==this.props.match.params.imgId;
            })
            return imagewitId;
        }

       render(){
      
        return(
         <div>
        
        <div className="card" style={{width: "18rem"}}>
        <img className="card-img-top" src= {this.getImagewithId().imgSrc} alt="Card image cap"/>
        <div className="card-body">
        <h5 className="card-title">{this.getImagewithId().imgName}</h5>
        <p className="card-text">{this.getImagewithId().imgCategory}</p>
        </div>
        </div>
           
           

        </div>
       
        );
    }//render
       
}//class