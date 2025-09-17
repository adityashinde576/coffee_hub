import './App.css';

import Navbar from './component/Navbar';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import Home from './component/Home';
import About from './component/About';
import Menu from './component/Menu';
import Contact from './component/Contact';
import Footer from './component/Footer';
import Login from './component/Login';
import Signup from './component/Signup';
import Order from './component/Order';
import Cart from './component/Cart'; 

import { CartProvider } from "./component/CartContext";

// Layout component - Navbar/Footer hide on login & signup
function Layout({ children }) {
  const location = useLocation();
  const hideLayout = location.pathname === "/login" || location.pathname === "/signup";

  return (
    <>
      {!hideLayout && <Navbar />}
      {children}
      {!hideLayout && <Footer />}
    </>
  );
}

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <Navigate to="/login" />
              </Layout>
            }
          />
          <Route
            path="/home"
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />
          <Route
            path="/about"
            element={
              <Layout>
                <About />
              </Layout>
            }
          />
          <Route
            path="/menu"
            element={
              <Layout>
                <Menu />
              </Layout>
            }
          />
          <Route
            path="/contact"
            element={
              <Layout>
                <Contact />
              </Layout>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/order"
            element={
              <Layout>
                <Order />
              </Layout>
            }
          />
          <Route
            path="/cart"
            element={
              <Layout>
                <Cart />
              </Layout>
            }
          />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
