import React from 'react';
import { connect } from 'react-redux';


//class component
class ImageList extends React.Component{
   
   
    renderList() {
        return this.props.images.map((image) => {
            return (
                <li key={image.imgId}>
                    {image.imgName} 
                </li>
            );
        });
    }

    render(){
      return(
        <>
            {this.renderList()}
        </>
        );
    }

   
}

function mapStateToProps(state){
    return{
             images: state.allimages
     };
}

export default connect(mapStateToProps)(ImageList);