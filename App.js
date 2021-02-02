import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  let y=[{name:'raja'},{name:'rani'}];
  // let x=10;


  return (
    <div>

    <Header x="Cybage"></Header>
    <Main></Main>
    <Footer title="www.cybage.com"></Footer>

    </div>
  );
}

export default App;
