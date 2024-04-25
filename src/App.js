import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import SignUp from './components/Signup/SignUp';
import Catalogue from './components/Catalogue/Catalogue';
import Contact from './components/Contact/Contact';
import FAQ from './components/FAQ/FAQ';

function App() {
  return (
    <div className='app-container'>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/catalogue" element={<Catalogue />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
