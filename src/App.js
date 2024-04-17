import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import NavegationBar from './components/NavegationBar';
import Main from './components/Main';
import Footer from './components/Footer';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Catalogue from './components/Catalogue';
import Contact from './components/Contact';
import FAQ from './components/FAQ';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
        <Header />
        <NavegationBar />
        <Routes>
          <Route path="/" exact element={<Main />} />
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
