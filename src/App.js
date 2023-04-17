import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar';
import Plans from './Components/Plans/Plans';
import Login from './Components/Login';
import ScrollButton from './Components/ScrollButton';
import Blog from './Components/Blog/Blog';

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/plans' element={<Plans/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/blog' element={<Blog/>} />
        </Routes>
    </BrowserRouter>
    <ScrollButton/>
    </>
  );
}

export default App;
