import logo from './logo.svg';
import './App.css';
import Train from './components/Train';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Signin from './components/Signin';

function App() {
  return (
    <Router>
    <Routes>
                 <Route exact path='/about' element={<Train/>}></Route>
                 <Route exact path='/' element={<Signin/>}></Route>
         </Routes>
         </Router>
  );
}

export default App;
