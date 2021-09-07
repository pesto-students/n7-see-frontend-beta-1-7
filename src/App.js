import logo from './logo.svg';
import './App.css';
import './assets/style.css';
import  Register from './container/Register';
import NavBar from './components/NavBar';
import {
Grid
} from '@material-ui/core';
function App() {
  return (
    <div className="App">
      <div className="bg">
      <Register/>
      </div>
     
    </div>
  );
}

export default App;
