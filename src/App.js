import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/signup' element={<Signup/>} />
          {/* <Route path='/' element={} /> */}
          {/* <Route path='/' element={} /> */}
          {/* <Route path='/' element={} /> */}
          {/* <Route path='/' element={} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
