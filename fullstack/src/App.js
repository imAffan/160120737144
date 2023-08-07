import logo from './logo.svg';
import './App.css';
import Train from './components/Train';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Routes>
                 <Route exact path='/about' element={<Train/>}></Route>
         </Routes>
  );
}

export default App;
