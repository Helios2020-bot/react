import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import ImageForm from './components/ImageForm';
import SearchImage from './components/SearchImage';
import { BrowserRouter, Route } from 'react-router-dom';
import Nav from './components/Nav';
import DetailedImage from './components/DetailedImage';

function App() {
  let y=[{name:'raja'},{name:'rani'}];
  // let x=10;
  var images=[{imgId:101,imgName:"Nature",imgCategory:"Nature",imgSrc:"images/download.jfif"},
  {imgId:102,imgName:"Nature",imgCategory:"Nature",imgSrc:"images/nature.jfif"},
  {imgId:103,imgName:"Iceland",imgCategory:"Scenary",imgSrc:"images/iceland.jfif"},
  {imgId:104,imgName:"Volcano",imgCategory:"Landscapes",imgSrc:"images/volcano.jfif"},
  {imgId:105,imgName:"Children",imgCategory:"Beauty",imgSrc:"images/children.jfif"}];

  return (
    <div>
<BrowserRouter>
    <Header x="Cybage"></Header>
    {/* <ImageForm/> */}
     <SearchImage image={images}></SearchImage>
    {/* <Main image={images}></Main> */}
    <Nav></Nav>
    <Footer title="www.cybage.com"></Footer>
    </BrowserRouter>
    </div>
  );
}

export default App;
