import { Route, Routes } from 'react-router-dom';
import './App.css';
import './style.css';
import Navbar from './Components/Navbar';
import Home from './Home';
import Explore from './Explore'
import Contact from './Contact'
import Register from './Register'
import Encription from './Encription';
import Generatepass from './Generatepass';

function App() {
  return (
    <div >
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/explore' element={<Explore/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/encription' element={<Encription/>}/>
        <Route path='/generate' element={<Generatepass/>}/>
      </Routes>
    </div>
  );
}

export default App;
