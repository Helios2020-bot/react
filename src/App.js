import logo from './logo.svg';
import './App.css';
import Footer from './Footer';
import Header from './Header';
import Card from './Card';
import Aside from './Aside';
import Main from './Main';
import  Navbar from './Navbar';
import Sum from './Sum';
import propTypes from 'prop-type';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.js'
function App() {
  return (
    <>
    <Header/>
    <Main/>
    {/* <Sum a={"1"} b={2}></Sum> */}
    <Footer/>
    </>
  );
}

export default App;
