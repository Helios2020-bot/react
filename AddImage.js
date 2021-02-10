import React from 'react';
import './AddImage.css';

//class component
export default class AddImage extends React.Component{

    constructor(){
        super();
        this.state={
            imageName: "",
            imageId: "",
            imageSrc:"",
            imageDescription:"",
            imageCategory:""
        }
    }

    handleChange=(event)=>{
        this.setState({[event.target.name]:event.target.value})
    }

handleSubmit=(event)=>{
    alert(this.state.imageName+" Added!!!")
    event.preventDefault();
}

    render(){
       
        return(
         <div>
             <h3>Add Image</h3>
             <form onSubmit={this.handleSubmit}>
                Image Id: <input type="text" 
                name="imageId" 
                value={this.state.imageId} 
                onChange={this.handleChange}>
                    </input><br></br>
                Image Name: <input type="text" 
                name="imageName" 
                value={this.state.imageName} 
                onChange={this.handleChange}>
                    </input><br></br>
                Image Category: <input type="text" 
                name="imageCategory" 
                value={this.state.imageCategory} 
                onChange={this.handleChange}>
                    </input><br></br>
                Image Url: <input type="text" 
                name="imageSrc" 
                value={this.state.imageSrc} 
                onChange={this.handleChange}>
                    </input><br></br>
                Image Description: <input type="text"
                name="imageDescription"  
                value={this.state.imageDescription} 
                onChange={this.handleChange}>
                    </input><br></br>
                <input type="submit" ></input>
             </form>
         </div>
       
        );
    }//render
       
}//class