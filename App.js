import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import Nav from './components/Nav';
import { Route } from 'react-router-dom';
import AddImage from './components/AddImage';
import DetailedImage from './components/DetailedImage';
import UserList from './components/UsersList';
function App() {
  

  
  return (
    <div>
  <Header title="Cybage"></Header>
  <Nav></Nav>
  <Footer message="Copyright @www.cybage.com"></Footer>

  <Route path="/addImage" component={AddImage}></Route>
  <Route path="/listImage" component={Main}></Route>
  <Route path="/detailedImage/:imgId" component={DetailedImage}></Route>  
  <Route path="/users" component={UserList}></Route>  
    </div>

  );
}

export default App;
