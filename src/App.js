import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './components/Home';
import { Router } from '@reach/router';
import Number from './components/Number';

function App() {
  return (
    <div className="App">
      <Router>
        <Home path='/home'/>
        <Number path='/:num'/>
        <Number path='/:num/:color1/:color2'/>

        </Router>
    </div>
  );
}

export default App;
