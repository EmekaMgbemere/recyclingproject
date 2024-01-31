import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from './components/Pages/Nav';
import Footer from './components/Pages/Footer';
import Home from './components/Pages/Home';
import News from './components/Pages/News';
import NoPage from './components/Pages/NoPage';
import Products from './components/Pages/Products';
// import Projects from './components/Pages/Projects';
import About from './components/Pages/About';
import ContactUs from './components/Pages/ContactUs';

import './App.css';



function App() {

  return (
    <BrowserRouter>
        <div className="App">
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/footer" element={<Footer />} />
              <Route path="/news" element={<News />} />
              <Route path="/nav" element={<Nav />} />
              <Route path="/footer" element={<Footer />} />
              <Route path="/products" element={<Products />} />
              {/* <Route path="/projects" element={<Projects />} /> */}
              <Route path="/contactus" element={<ContactUs />} />
              <Route path="*" element={<NoPage />} />
          </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;

