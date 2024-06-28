import './App.css';
import { About } from './pages/about';
import { BrowserRouter } from 'react-router-dom';
import { Contact } from './pages/contact';
import Home from './pages/home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Login } from './pages/login';



function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/login" element={<Login />} />
        </Routes>
  </Router>
   
  
  );
}

export default App;
