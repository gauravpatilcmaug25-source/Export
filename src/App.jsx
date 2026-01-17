import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Contact from './pages/Contact';
import WhatsAppButton from './components/WhatsAppButton';
import TrustBar from './components/TrustBar';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased text-slate-800 flex flex-col">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products/:category" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          {/* Fallback for /products to /products/vegetables or handle in component */}
          <Route path="/products" element={<Products />} />
        </Routes>
      </main>
      <TrustBar />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
