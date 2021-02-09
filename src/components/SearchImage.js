import React from 'react';
import Main from '../Main';



class SearchImage extends React.Component{
  images=[{imgId:101,imgName:"Nature",imgCategory:"Nature",imgSrc:"images/download.jfif"},
  {imgId:102,imgName:"Nature",imgCategory:"Nature",imgSrc:"images/nature.jfif"},
  {imgId:103,imgName:"Iceland",imgCategory:"Scenary",imgSrc:"images/iceland.jfif"},
  {imgId:104,imgName:"Volcano",imgCategory:"Landscapes",imgSrc:"images/volcano.jfif"},
  {imgId:105,imgName:"Children",imgCategory:"Beauty",imgSrc:"images/children.jfif"}];
  constructor(){
    super();
    this.state = {
      searchedImages: [],
      categorytobeSearched: ''
   }

      this.search=React.createRef();
      this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange=(event)=> {
    this.setState({
      categorytobeSearched: event.target.value,
      searchedImages:this.images.filter((img)=>img.imgCategory.toLocaleLowerCase().includes(event.target.value.toLocaleLowerCase))
    });
    console.log(this.state.searchedImages);
  }
  handleSubmit(event) {
    //  alert('searched Image  : ' + this.search.current.value);
    <Main srch={this.search.current.value}></Main>
    event.preventDefault();
  }
  render(){
    return(
      <>
      <form onSubmit={this.handleSubmit}>
        Search Image:<input type="text" ref={this.search} onChange={this.handleChange}></input>
    <input type="submit" value="Submit" />
  </form>
  <Main images={this.state.searchedImages}></Main>
  </>

    )
}
}
export default SearchImage;
