import React from 'react';
import './Main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
var images=[{imgId:101,imgName:"Nature",imgCategory:"Nature",imgSrc:"images/download.jfif"},
{imgId:102,imgName:"Nature",imgCategory:"Nature",imgSrc:"images/nature.jfif"},
{imgId:103,imgName:"Iceland",imgCategory:"Scenary",imgSrc:"images/iceland.jfif"},
{imgId:104,imgName:"Volcano",imgCategory:"Landscapes",imgSrc:"images/volcano.jfif"},
{imgId:105,imgName:"Children",imgCategory:"Beauty",imgSrc:"images/children.jfif"}];
class Main extends React.Component{
  render(){
    return(
      <div className="main d-flex">
{/*
<table className="table">
  <thead className="thead-dark">
    <tr>

      <th scope="col">imgId</th>
      <th scope="col">imgName</th>
      <th scope="col">imgCategory</th>
      <th scope="col">imgSrc</th>
    </tr>
  </thead> */}
  {
    images.map((img) =>{
      return(
    //     <tbody>
    //     <tr>
    //   <td>{img.imgId}</td>
    //   <td>{img.imgName}</td>
    //   <td>{img.imgCategory}</td>
    //   <td>{img.imgSrc}</td>

    // </tr>
    // </tbody>
      <div className="card">
         <img src={img.imgSrc}  alt="..."></img>
        <div className="card-body">
          <h5 className="card-title ">{img.imgName}</h5>
          <p className="card-text ">{img.imgCategory}</p>

        </div>
      </div>
    )
    })
  }
{/* </table> */}


        </div>
    )
  }
}

export default Main;
