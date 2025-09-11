import './App.css';
import Navbar from './component/Navbar';

import {  BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from './component/Home';
import About from './component/About';
import Menu from './component/Menu';
import Contact from './component/Contact';
import Footer from './component/Footer';
import Login from './component/Login';
import Signup from './component/Signup';  

function App() {
  return (
    <Router> 
   <div>
    <Navbar />

    <Routes>
      <Route path="/Home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    
      
    </Routes>
    <Footer />
   </div>
   </Router>
  );
}

export default App;
